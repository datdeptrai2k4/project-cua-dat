let TODO_LIST = ['reading', 'coding', 'record video', 'learning'];
const elTodoList = document.getElementById('item-list');
const elBtn = document.getElementById('submit');
let elAdd = document.getElementById('add-input');

console.log(elAdd);
renderList();
function renderList() {
    let html='' ;
    for (let index = 0; index < TODO_LIST.length; index++) {
        html += /*html*/` <li class="item"><span>${TODO_LIST[index]}</span> <i class="fa-solid fa-pen"onclick="editItem(${index})"></i><i class="fa-solid fa-trash" onclick="deleteItem(${index})"></i></li>`;
    }
    elTodoList.innerHTML =html;
}



elBtn.addEventListener('click', function () {
    localStorage.setItem("add-input", elAdd.value);
    let add=elAdd.value;
    TODO_LIST.push(`${add}`);
    renderList();
})

function deleteItem(index) {
    TODO_LIST.splice(index, 1);
    renderList();
}
function editItem(index) {
    let newItem = prompt("Edit item:", TODO_LIST[index]);
    if (newItem != null) {
        TODO_LIST[index] = newItem;
        renderList();
    }
}