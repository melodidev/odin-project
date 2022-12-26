import Masonry from 'masonry-layout';

export function setMasonry() {
  var elem = document.querySelector('.container');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.box'
  });
}

export function editTodoModal(button) {
  document.querySelectorAll(".icon-edit").forEach((button) => {
    button.addEventListener("click", () => {

      let modal = document.querySelector(".modal");
      modal.style.display = "block";
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    });
  });
}

export function displayTodos(todos) {
    todos.forEach((todo) => {
      let div = document.createElement("div");
      div.classList.add("flex", "gap-5");
      let span = document.createElement("span");
      span.classList.add("material-symbols-outlined", "hover-cursor-pointer", "fs-22");
      span.textContent = "check_box_outline_blank";
      
      let details = document.createElement("details");
      details.classList.add("width-full");
      let summary = document.createElement("summary");
      summary.classList.add("flex", "hover-cursor-pointer");
      let div1 = document.createElement("div");
      div1.textContent = todo.title;
      summary.appendChild(div1);
      let span1 = document.createElement("span");
      span1.classList.add("material-symbols-outlined", "icon-summary", "fs-18");
      span1.textContent = "expand_more";
      summary.appendChild(span1);
      details.appendChild(summary);

      let div2 = document.createElement("div");
      div2.classList.add("fs-15", "mt-10", "mb-5");
      let div3 = document.createElement("div");
      div3.classList.add("fw-300");
      div3.textContent = todo.description;
      div2.appendChild(div3);
      let div4 = document.createElement("div");
      div4.classList.add("flex", "space-between", "align-items-center", "mt-5");
      let div5 = document.createElement("div");
      div5.textContent = todo.dueDate;
      div4.appendChild(div5);
      let div6 = document.createElement("div");
      div6.classList.add("mr-10");
      let span2 = document.createElement("span");
      span2.classList.add("material-symbols-outlined", "icon-edit", "hover-darkgrey", "hover-cursor-pointer", "grey", "fs-22");
      span2.textContent = "edit_note";
      div6.appendChild(span2);
      let span3 = document.createElement("span");
      span3.classList.add("material-symbols-outlined", "icon-delete", "hover-darkgrey", "hover-cursor-pointer", "grey", "fs-22");
      span3.textContent = "delete";
      div6.appendChild(span3);

      div4.appendChild(div6);
      div2.appendChild(div4);
      details.appendChild(div2);
      div.appendChild(span);
      div.appendChild(details);
      document.querySelector(".box").appendChild(div);
  });
}