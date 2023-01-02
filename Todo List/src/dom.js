import Masonry from 'masonry-layout';
import { todos } from './data';
import { addTodo, deleteTodo, changeDone } from './functions';
import { openModal, closeModal, setModalOkButton } from './modal';

export function setMasonry() {
  var elem = document.querySelector('.container');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.box'
  });
}

function domTree(todo) {
  return {
    tag: "div",
    classList: [
      "flex", "gap-5", "todo-item",
      todo.priority && "priority",
      todo.done && "done",
    ],
    dataset: [
      ['id', todo.id],
    ],
    children: [
      {
        tag: "span",
        classList: ["material-symbols-outlined", "hover-cursor-pointer", "fs-22", "checkbox"],
        textContent: todo.done ? "check_box" : "check_box_outline_blank",
      },
      {
        tag: "details",
        classList: ["width-full"],
        children: [
          {
            tag: "summary",
            classList: ["flex", "hover-cursor-pointer"],
            children: [
              {
                tag: "div",
                textContent: todo.title,
              },
              {
                tag: "span",
                classList: ["material-symbols-outlined", "icon-summary", "fs-18"],
                textContent: "expand_more",
              },
            ],
          },
          {
            tag: "div",
            classList: ["fs-15", "mt-10", "mb-5"],
            children: [
              {
                tag: "div",
                classList: ["fw-300"],
                textContent: todo.description,
              },
              {
                tag: "div",
                classList: ["flex", "space-between", "align-items-center", "mt-5"],
                children: [
                  {
                    tag: "div",
                    textContent: todo.dueDate,
                  },
                  {
                    tag: "div",
                    classList: ["mr-10"],
                    children: [
                      {
                        tag: "span",
                        classList: ["material-symbols-outlined", "icon-delete", "hover-darkgrey", "hover-cursor-pointer", "grey", "fs-22"],
                        textContent: "delete",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  }
}

function createElements(node) {
  let element = document.createElement(node.tag);

  if (node.classList) {
    element.classList.add(...node.classList.filter(className => className));
  }
  
  element.textContent = node.textContent;

  if (node.dataset) {
    node.dataset.forEach(([key, value]) => {
      element.dataset[key] = value;
    });
  }

  if (node.children) {
    node.children.forEach(child => {
      element.appendChild(createElements(child));
    });
  }

  return element;
}

function findSuperParent(element, target) {
  // base case
  if (!element.parentNode) {
    return false;
  }

  if (element.classList.contains(target)) {
    return element;
  } else {
    return findSuperParent(element.parentNode, target);
  }
}

function changeModalContent(func, todoTitle=0) {
  let header = document.querySelector(".modal-header");
  let content = document.querySelector(".modal-content");

  if (func == "delete-todo") {
    header.textContent = `Delete Todo`;
    content.textContent = `Do you want to delete "${todoTitle}"?`;
  } 
  else if (func == "add-todo") {
    header.textContent = `Add Todo`;
    content.innerHTML = `
      <form class="flex justify-content-center mb-10">
        <div class="flex flex-direction-col">
          <label class="mt-10" for="title">Title:</label>
          <label class="mt-10" for="dueDate">Due date:</label>
          <label class="mt-10" for="prior">Prior:</label>
          <label class="mt-10" for="description">Description:</label>
        </div>
        <div class="flex flex-direction-col flex-grow my-10">
          <input class="mt-10" type="text" id="title" name="title">
          <input class="mt-10" type="text" id="dueDate" name="dueDate">
          <input class="align-self-start mt-10" type="checkbox" id="prior" name="prior">
          <textarea class="mt-10" id="description" name="description"></textarea>
        </div>
      </form>
    `;
  } else if (func == "add-todobox") {
    header.textContent = `Create New Todo Box`;
    content.innerHTML = `
      <form class="flex justify-content-center mb-10">
        <div class="flex flex-direction-col">
          <label class="mt-10" for="todoboxHeader">Header:</label>
        </div>
        <div class="flex flex-direction-col flex-grow my-10">
          <input class="mt-10" type="text" id="todoboxHeader" name="todoboxHeader">
        </div>
      </form>
    `;
  } else if (func == "delete-todobox") {
    header.textContent = `Delete Todo Box`;
    content.innerHTML = `Do you want to delete Todo Box and all of it's content?`;
  }
}

export function displayTodos(todos) {
  todos.forEach((todo) => {
    addTodoToDom(todo);
  });
}

function addTodoToDom(todo) {
  let box = document.querySelector(".box");
  let element = createElements(domTree(todo));
  box.appendChild(element);
  // If we don't add that, newly created todos will not have a event listener for icon-delete
  addTodoEventListeners(element);
}

function addTodoEventListeners(element) {
  // Handle delete
  element.querySelector(".icon-delete").addEventListener("click", (event) => {
    let superParent = findSuperParent(event.target, "todo-item");
    const id = superParent.dataset.id;
    const todo = todos.find((todo) => todo.id == id);

    changeModalContent("delete-todo", todo.title);

    setModalOkButton("Delete", (event) => {
      deleteTodo(id);
      document.querySelector(".box").removeChild(element);
      closeModal();
    });

    openModal();
  });

  // Handle done
  element.querySelector(".checkbox").addEventListener("click", (event) => {
    let superParent = findSuperParent(event.target, "todo-item");
    const id = superParent.dataset.id;
    const todo = todos.find((todo) => todo.id == id);

    element.classList.toggle("done");

    if (todo.done) {
      element.firstChild.textContent = "check_box_outline_blank";
    } else {
      element.firstChild.textContent = "check_box";
    }

    changeDone(id);
  });
}

// Change later to querySelectorAll, get box info and add to box which todo belongs to
document.querySelector(".icon-add-todo").addEventListener("click", (event) => {
  changeModalContent("add-todo");

  setModalOkButton("Add", (event) => {
    let form = document.querySelector('.modal form');
    let data = new FormData(form);
    let todo = addTodo(data);
    addTodoToDom(todo);
    closeModal();
  });

  openModal();
});

// Boxes
document.querySelector(".icon-add-todobox").addEventListener("click", (event) => {
  changeModalContent("add-todobox");
  setModalOkButton("Create", (event) => {
    // functions.js
    closeModal();
  });

  openModal();
});

document.querySelectorAll(".icon-delete-todobox").forEach((icon) => {
  icon.addEventListener("click", (event) => {

  changeModalContent("delete-todobox");
  setModalOkButton("Delete", (event) => {
    // functions.js
    closeModal();
  });

  openModal();
  }); 
});


