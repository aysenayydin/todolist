// add butonuna tıklanıp tıklanmadıgını dınle
// tıklandıgında input bossa alert
//git yeni bir tane to do item elementi olustur
// ve git bunu domun icine koy

const buttonEl = document.querySelector(".addTask");
const inputEl = document.querySelector(".todoInput");
const ulEl = document.querySelector(".todos");

const toggleComplete = (event) => {
    const { parentElement } = event.currentTarget;

    const isCompleted = parentElement.classList.contains("completed");

    if (isCompleted) {
        event.currentTarget.innerText = "Complete";
        parentElement.classList.remove("completed");
    } else {
        event.currentTarget.innerText = "Todo";
        parentElement.classList.add("completed");
    }
};

const removeItem=(event)=>{
 ulEl.removeChild(event.currentTarget.parentElement)
}

function rendertoItem(todoText) {
  const todoItemEl = document.createElement("li");
  todoItemEl.classList.add("todoItem");

  const pEl = document.createElement("p");
  pEl.innerText = todoText;
  pEl.classList.add("todoText");
  todoItemEl.appendChild(pEl);

  const completeEl = document.createElement("button");
  completeEl.classList.add("completeButton");
  completeEl.innerText = "Complete";
  completeEl.addEventListener("click", toggleComplete);
  todoItemEl.appendChild(completeEl);

  const deleteEl = document.createElement("button");
  deleteEl.classList.add("deleteButton");
  deleteEl.innerText = "Delete";
  deleteEl.addEventListener("click", removeItem);
  todoItemEl.appendChild(deleteEl);

  ulEl.appendChild(todoItemEl);
  inputEl.value = "";
  inputEl.focus();
}

function addTask() {
  if (inputEl.value === "") {
    alert("Boş olamaz deger girin!");
  } else {
    rendertoItem(inputEl.value);
  }
}

buttonEl.addEventListener("click", addTask);
