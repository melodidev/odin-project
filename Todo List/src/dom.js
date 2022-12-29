import Masonry from 'masonry-layout';
import { todos } from './data';
import { addTodo, deleteTodo } from './functions';
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
    classList: ["flex", "gap-5", "todo-item"],
    children: [
      {
        tag: "span",
        classList: ["material-symbols-outlined", "hover-cursor-pointer", "fs-22"],
        textContent: "check_box_outline_blank",
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
                        dataset: [
                          ['id', todo.id],
                        ],
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
    element.classList.add(...node.classList);
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

export function displayTodos(todos) {
  todos.forEach((todo) => {
    addTodoToDom(todo);
  });
}

function addTodoEventListeners(element) {
  // Handle delete
  element.querySelector(".icon-delete").addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    const todo = todos.find((todo) => todo.id == id);

    document.querySelector(".modal-header").textContent = `Delete Todo`;
    document.querySelector(".modal-content").textContent = `Do you want to delete "${todo.title}"?`;

    setModalOkButton("Delete", (event) => {
      deleteTodo(id);
      //let superParent = findSuperParent(event.target, "todo-item");
      document.querySelector(".box").removeChild(element);
      closeModal();
    });

    openModal();
  });
}

function addTodoToDom(todo) {
  let box = document.querySelector(".box");
  let element = createElements(domTree(todo));
  box.appendChild(element);
  addTodoEventListeners(element);
}

// Change later to querySelectorAll
document.querySelector(".icon-add-todo").addEventListener("click", (event) => {
  document.querySelector(".modal-header").textContent = `Add Todo`;
  document.querySelector(".modal-content").innerHTML = `
    <form class="flex justify-content-center mb-10">
      <div class="flex flex-direction-col">
        <label class="mt-10" for="title">Title:</label>
        <label class="mt-10" for="dueDate">Due date:</label>
        <label class="mt-10" for="prior">Prior:</label>
        <label class="mt-10" for="description">Description:</label>
      </div>
      <div class="flex flex-direction-col flex-grow my-10">
        <input class="mt-10" type="text" id="title" name="title" required>
        <input class="mt-10" type="text" id="dueDate" name="dueDate">
        <input class="align-self-start mt-10" type="checkbox" id="prior" name="prior">
        <textarea class="mt-10" id="description" name="description"></textarea>
      </div>
    </form>
  `;

    setModalOkButton("Add", (event) => {
      let form = document.querySelector('.modal form');
      let data = new FormData(form);
      let todo = addTodo(data);
      addTodoToDom(todo);
      closeModal();
    });

  openModal();
});


