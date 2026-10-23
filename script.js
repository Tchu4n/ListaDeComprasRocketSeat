const form = document.getElementById("add-item-form");
const input = document.getElementById("item-input");
const errorMessage = form.querySelector(".input-error");
const list = document.getElementById("item-list");
const alertBox = document.getElementById("alert");
const alertClose = alertBox.querySelector(".alert-close");

// Guardado no carregamento: se o usuário apagar todos os itens, ainda temos o ícone para clonar
const trashIcon = list.querySelector(".item-remove svg").cloneNode(true);

const ALERT_DURATION = 3000;
let alertTimer;

function createItem(name) {
  const li = document.createElement("li");
  li.className = "item";

  const label = document.createElement("label");
  label.className = "item-label";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "item-checkbox";

  const span = document.createElement("span");
  span.className = "item-name";
  span.textContent = name;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "item-remove";
  removeButton.setAttribute("aria-label", `Remover ${name}`);
  removeButton.append(trashIcon.cloneNode(true));

  label.append(checkbox, span);
  li.append(label, removeButton);
  return li;
}

function addItem() {
  const name = input.value.trim();

  if (!name) {
    showError("Digite o nome de um item para adicionar");
    input.focus();
    return;
  }

  list.append(createItem(name));
  input.value = "";
  input.focus();
}

function removeItem(li) {
  li.remove();
  showAlert();
}

function toggleItem(checkbox) {
  checkbox.closest(".item").classList.toggle("item--completed", checkbox.checked);
}

function showAlert() {
  alertBox.hidden = false;
  clearTimeout(alertTimer);
  alertTimer = setTimeout(hideAlert, ALERT_DURATION);
}

function hideAlert() {
  clearTimeout(alertTimer);
  alertBox.hidden = true;
}

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.hidden = false;
  input.classList.add("input--error");
  input.setAttribute("aria-invalid", "true");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.hidden = true;
  input.classList.remove("input--error");
  input.removeAttribute("aria-invalid");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem();
});

input.addEventListener("input", clearError);

list.addEventListener("change", (event) => {
  if (event.target.matches(".item-checkbox")) {
    toggleItem(event.target);
  }
});

list.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".item-remove");
  if (removeButton) {
    removeItem(removeButton.closest(".item"));
  }
});

alertClose.addEventListener("click", hideAlert);
