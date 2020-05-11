const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoFormId = document.getElementById("todoForm"),
  today = document.getElementById("today");

const TODOS_LS = "toDos";
const TODOS_CK = "toDosCheck";
const cboxBorder = document.createElement("div");
const delBtn = document.createElement("i");
let loadedToDosCheck = "";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  localStorage.setItem(TODOS_CK, "");
  today.style.display = "none";
  toDoFormId.style.display = "flex";
  toDoFormId.style.flexDirection = "column";
  setTimeout(function () {
    toDoFormId.style.opacity = 1;
  }, 300);
}

function checkToDo() {
  loadedToDosCheck = localStorage.getItem(TODOS_CK);
  if (loadedToDosCheck === "checked") {
    localStorage.setItem(TODOS_CK, "");
  } else {
    localStorage.setItem(TODOS_CK, "checked");
    cboxBorder.style.opacity = 1;
    const compliment = document.getElementById("compliment");
    compliment.style.opacity = 1;
    setTimeout(function () {
      compliment.style.opacity = 0;
    }, 600);
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  const cboxDiv = document.createElement("div");
  const cbox = document.createElement("input");
  const check = document.createElement("i");
  loadedToDosCheck = localStorage.getItem(TODOS_CK);
  cboxDiv.classList.add("cbox-column");
  cboxBorder.classList.add("cbox-border");
  cbox.type = "checkbox";
  cbox.classList.add("checkbox");
  cbox.addEventListener("click", checkToDo);
  check.classList.add("fas");
  check.classList.add("fa-check");
  check.classList.add("check");
  delBtn.classList.add("delBtn");
  delBtn.classList.add("fas");
  delBtn.classList.add("fa-times");
  delBtn.addEventListener("click", deleteToDo);
  span.classList.add("todo");
  span.innerText = text;
  li.classList.add("doList");
  cboxBorder.style.opacity = 0;
  delBtn.style.opacity = 0;
  li.addEventListener("mouseover", function () {
    cboxBorder.style.opacity = 1;
    delBtn.style.opacity = 1;
  });
  li.addEventListener("mouseout", function () {
    loadedToDosCheck = localStorage.getItem(TODOS_CK);
    if (loadedToDosCheck !== "checked") {
      cboxBorder.style.opacity = 0;
      delBtn.style.opacity = 0;
    }
  });
  cboxDiv.appendChild(cboxBorder);
  cboxDiv.appendChild(cbox);
  cboxDiv.appendChild(check);
  cboxDiv.appendChild(span);
  li.appendChild(cboxDiv);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  if (loadedToDosCheck === "checked") {
    cbox.checked = "true";
    cboxBorder.style.opacity = 1;
    delBtn.style.opacity = 1;
  }
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  toDoFormId.style.opacity = 0;
  setTimeout(function () {
    toDoFormId.style.display = "none";
    today.style.display = "block";
    paintToDo(currentValue);
  }, 1000);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null && loadedToDos.length !== 2) {
    today.style.display = "block";
    toDoFormId.style.display = "none";
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
