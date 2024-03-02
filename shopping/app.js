const products = [
  {
    id: self.crypto.randomUUID(),
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'games',
    price: 499.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'smartphones',
    price: 399.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'cameras',
    price: 749.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Sony A7 Camera',
    url: 'images/sony_a7_camera.png',
    type: 'cameras',
    price: 1999.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'LG TV',
    url: 'images/lg_tv.png',
    type: 'televisions',
    price: 799.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Nintendo Switch',
    url: 'images/nintendo_switch.png',
    type: 'games',
    price: 299.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Xbox Series X',
    url: 'images/xbox_series_x.png',
    type: 'games',
    price: 499.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Samsung TV',
    url: 'images/samsung_tv.png',
    type: 'televisions',
    price: 1099.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Google Pixel',
    url: 'images/google_pixel.png',
    type: 'smartphones',
    price: 499.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Sony ZV1F Camera',
    url: 'images/sony_zv1f_camera.png',
    type: 'cameras',
    price: 799.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Toshiba TV',
    url: 'images/toshiba_tv.png',
    type: 'televisions',
    price: 499.99,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'iPhone 14',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
];
const carts = [];
const elProductList = document.getElementById('productList');
const elBtnSearchInput = document.getElementById('searchInput');
const elBtnFilterCategory = document.getElementById('filterCategory');
const elCartCount = document.getElementById('cartCount');
const elcartList = document.getElementById('cartList');

elBtnSearchInput.addEventListener('input', function () {
  const searchItem = elBtnSearchInput.value.trim().toLowerCase();
  const filteredList = products.filter(function (item) {
    return item.name.toLowerCase().includes(searchItem);
  });
  renderList(filteredList);
})
//filtera
elBtnFilterCategory.addEventListener('change', function () {
  const arrElCheckbox = document.getElementsByClassName('checkbox-category');
  const selectedValue = [];
  for (let i = 0; i < arrElCheckbox.length; i++) {
    if (arrElCheckbox[i].checked) {
      selectedValue.push(arrElCheckbox[i].value);
    }
  }
  if(selectedValue.length>0){
    const filteredList = products.filter((item) => {
      return selectedValue.includes(item.type);
    })
    renderList(filteredList);
  }else{
    renderList(products);
  }
})


renderList(products);
function renderList(product) {
  let html = "";
  for (let i = 0; i < product.length; i++) {
    let item = product[i];
    html += /*html*/`
    <div class="col-md-4 col-6 mb-3">
      <div class="thumb bg-white rounded overflow-hidden">
      <img src="${item.url}" alt="..." class="img-fluid"/>
    </div>
    <div class="info mt-2">
      <h5>${item.name}</h5>
      <p>${item.price}</p>
      <button type="button" class="btn btn-primary"onclick="addToCart('${item.id}')" >Add to cart</button>
    </div>
    </div>
    `
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
      html += /*html*/`
        <li><button class="dropdown-item" type="button">${product.name} (${cartItem.quantity})</button></li>
      `;
    }
  }
  elcartList.innerHTML = html;
}