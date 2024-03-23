let products = [];
let carts = [];
const elProductList = document.getElementById('productList');
const elBtnSearchInput = document.getElementById('searchInput');
const elBtnFilterCategory = document.getElementById('filterCategory');
const elCartCount = document.getElementById('cartCount');
const elcartList = document.getElementById('cartList');
//modal
const elInputProductImage = document.getElementById('productImage');
const elInputProductName = document.getElementById('productName');
const elInputProductPrice = document.getElementById('productPrice');
const elInputProductType = document.getElementById('productType');
const elBtnSubmit = document.getElementById('btnSubmit');
const elBtnSaveProduct = document.getElementById('btnSaveProduct');
const productFormModal = new bootstrap.Modal('#productFormModal');

elBtnSearchInput.addEventListener('input', function () {
  const searchItem = elBtnSearchInput.value.trim().toLowerCase();
  const filteredList = products.filter(function (item) {
    return item.name.toLowerCase().includes(searchItem);
  });
  renderList(filteredList);
});

elBtnSaveProduct.addEventListener('click', function () {
  const productId = document.getElementById('productId').value;
  if (productId) {
    updateProduct(productId);
  } else {
    addProduct();
  }

  productFormModal.hide();
});

function openUpdateModal(productId) {
  productFormModal.show();
  const product = products.find(item => item.id === productId);
  if (product) {
    elInputProductName.value = product.name;
    elInputProductImage.value = product.url;
    elInputProductPrice.value = product.price;
    elInputProductType.value = product.type;
    document.getElementById('productId').value = productId;
    
  }
}
function deleteProduct(productId) {
  const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
  if (confirmDelete) {
    products = products.filter(item => item.id !== productId);
    saveProductsToLocalStorage();
    renderList(products);
  }
}
function addProduct() {
  const newItem = {
    id: crypto.randomUUID(),
    name: elInputProductName.value,
    url: elInputProductImage.value,
    price: elInputProductPrice.value,
    type: elInputProductType.value,
  };
  products.push(newItem);
  saveProductsToLocalStorage();
  renderList(products);
}

function updateProduct(productId) {
  const productIndex = products.findIndex(item => item.id === productId);
  if (productIndex) {
    products[productIndex].name = elInputProductName.value;
    products[productIndex].url = elInputProductImage.value;
    products[productIndex].price = elInputProductPrice.value;
    products[productIndex].type = elInputProductType.value;
    saveProductsToLocalStorage();
    renderList(products);
  }
}

function saveProductsToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}

function loadProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }
}

elBtnFilterCategory.addEventListener('change', function () {
  const arrElCheckbox = document.getElementsByClassName('checkbox-category');
  const selectedValue = [];
  for (let i = 0; i < arrElCheckbox.length; i++) {
    if (arrElCheckbox[i].checked) {
      selectedValue.push(arrElCheckbox[i].value);
    }
  }
  if (selectedValue.length > 0) {
    const filteredList = products.filter((item) => {
      return selectedValue.includes(item.type);
    })
    renderList(filteredList);
  } else {
    renderList(products);
  }
});

loadProductsFromLocalStorage();
renderList(products);

function renderList(product) {
  let html = "";
  for (let i = 0; i < product.length; i++) {
    let item = product[i];
    html += /*html*/ `
      <div class="col-md-4 col-6 mb-3">
        <div class="thumb bg-white rounded overflow-hidden">
          <img src="${item.url}" alt="..." class="img-fluid"/>
        </div>
        <div class="info mt-2">
          <h5>${item.name}</h5>
          <p>${item.price}</p>
          <button type="button" class="btn btn-primary" onclick="addToCart('${item.id}')" >Add to cart</button>
          <button type="button" class="btn btn-sm btn-success" onclick="openUpdateModal('${item.id}')">Cập nhật</button>
          <button type="button" class="btn btn-sm btn-danger" onclick="deleteProduct('${item.id}')">Xóa</button>
        </div>
      </div>`;
  }
  elProductList.innerHTML = html;
}

function addToCart(productId) {
  const existingProduct = carts.find(product => product.productId === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    carts.push({ productId: productId, quantity: 1 });
  }

  updateCartCount();
  renderCartList();
}

function updateCartCount() {
  const totalQuantity = carts.reduce((total, product) => total + product.quantity, 0);
  elCartCount.textContent = totalQuantity;
}

function renderCartList() {
  let html = "";
  for (let i = 0; i < carts.length; i++) {
    let cartItem = carts[i];
    let product = products.find(item => item.id === cartItem.productId);
    if (product) {
      html += /*html*/`<li><button class="dropdown-item" type="button">${product.name} (${cartItem.quantity})</button></li>`;
    }
  }
  elcartList.innerHTML = html;
}
