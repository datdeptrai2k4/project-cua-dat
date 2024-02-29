// CRUD
// c - create
// r - read
// u - update
// d - delete
// r -> d -> c -> u

let NEW_TODO_LIST = [
  {
    id: self.crypto.randomUUID(),
    name: 'Reading',
    completed: true,
    level: 1,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'CODING',
    completed: false,
    level: 3,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Record video',
    completed: false,
    level: 2,
  },
  {
    id: self.crypto.randomUUID(),
    name: 'Learning',
    completed: true,
    level: 1,
  },
];



const elTodoList = document.getElementById('todoList');
const elBtnSubmit = document.getElementById('btnSubmit');
const elInputName = document.getElementById('inputName');
const elInputSearch = document.getElementById('inputSearch');
const elBtnUp = document.getElementById('btnUp');
const elBtnDown = document.getElementById('btnDown');
const elBtnUpLevel = document.getElementById('btnUpLevel');
const elBtnDownLevel = document.getElementById('btnDownLevel');
const elBtnDefault = document.getElementById('btnDefault');
const elBtnSearch = document.getElementById('btnSearch');
const elBtnClear = document.getElementById('btnClear');
let idxEdit = null;

renderList(NEW_TODO_LIST);

elBtnUp.addEventListener('click', function () {
  const sortedArr = NEW_TODO_LIST.sort((a, b) => a.name.localeCompare(b.name));
  renderList(sortedArr);
});

elBtnDown.addEventListener('click', function () {
  const sortedArr = NEW_TODO_LIST.sort((a, b) => b.name.localeCompare(a.name));
  renderList(sortedArr);
});

elBtnUpLevel.addEventListener('click', function () {
  const sortedArr = NEW_TODO_LIST.sort((a, b) => a.level - b.level);
  renderList(sortedArr);
});

elBtnDownLevel.addEventListener('click', function () {
  const sortedArr = NEW_TODO_LIST.sort((a, b) => b.level - a.level);
  renderList(sortedArr);
});

elBtnDefault.addEventListener('click', function () {
  renderList(NEW_TODO_LIST);
});
elBtnClear.addEventListener('click', function () {
  elInputSearch.value='';
});


elBtnSubmit.addEventListener('click', function () {
  const itemName = elInputName.value.trim();
  if (itemName) {
    if (idxEdit !== null) {
      NEW_TODO_LIST[idxEdit].name = itemName;
    } else {
      const newItem = {
        id: self.crypto.randomUUID(),
        name: itemName,
        completed: false, 
        level: 1, 
      };
      NEW_TODO_LIST.push(newItem);
    }
  } else {
    alert('vui long ghi item name');
  }
  elInputName.value = '';
  idxEdit = null;
  renderList(NEW_TODO_LIST);
});

elBtnSearch.addEventListener('click', function () {
  const searchItem = elInputSearch.value.trim().toLowerCase();
  const filteredList = NEW_TODO_LIST.filter(function (item) {
    return item.name.toLowerCase().includes(searchItem);
  });
  renderList(filteredList);
});

function deleteTodo(idx) {
  if (confirm('Chac ko?')) {
    NEW_TODO_LIST = NEW_TODO_LIST.filter(function (_, index) {
      return index !== idx;
    });
    renderList(NEW_TODO_LIST);
  }
}

function editTodo(idx) {
  elInputName.value = NEW_TODO_LIST[idx].name;
  idxEdit = idx;
}

function renderList(todoList) {
  let html = '';
  const searchItem = elInputSearch.value.trim().toLowerCase();

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i];
    let displayName = item.name;

    let levelColor;
    switch (item.level) {
      case 1:
        levelColor = 'green';
        break;
      case 2:
        levelColor = 'yellow';
        break;
      case 3:
        levelColor = 'red';
        break;
      default:
        levelColor = 'black';
    }

    if (displayName.toLowerCase().includes(searchItem)) {
      displayName = displayName.replace(new RegExp(searchItem, 'gi'), match => `<span class="highlight">${match}</span>`);
    }
    let levelHTML='';
    levelHTML += /* html */`
      <span style="color: ${levelColor};">${item.level}</span>`;

    html += /* html */ `
    <li class="todoItem">
      <span>${displayName}</span>
      <span>||Completed: ${item.completed}|| Level: ${levelHTML}</span>
      <div class="action">
        <i class="fa-solid fa-pencil btnAction btnEdit" onclick="editTodo(${i})"></i>
        <i class="fa-solid fa-trash-can btnAction btnDelete" onclick="deleteTodo(${i})"></i>
      </div>
    </li>`;
  }

  elTodoList.innerHTML = html;
}




