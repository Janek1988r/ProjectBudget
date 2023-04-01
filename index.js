const incomeName = document.querySelector("#incomes-name");
const outgoName = document.querySelector("#outgoes-name");

const incomeValue = document.querySelector("#incomes-value");
const outgoValue = document.querySelector("#outgoes-value");

const incomesSubmit = document.querySelector("#incomes-form");
const outgoesSubmit = document.querySelector("#outgoes-form");

const btnIncomeSubmit = document.querySelector("#form-in-submit");
const btnOutgoSubmit = document.querySelector("#form-out-submit");

const incomesSum = document.querySelector("#sum-of-incomes");
const outgoesSum = document.querySelector("#sum-of-outgoes");

let sumOfMoney = document.querySelector("#sum-of-all");

const incomesList = document.querySelector("#income-list");
const outgoesList = document.querySelector("#outgo-list");

let incomes = [];
let outgoes = [];
let sumOfIncomes = 0;
let sumOfOutgoes = 0;

/*INCOMES*/

const removeIncome = (e) => {
  const incomeElement = e.currentTarget;
  const incomeElementParten = incomeElement.closest(".budget-element");
  incomeElementParten.remove();

  const removedId = incomeElementParten.id;
  console.log(removedId);
  incomes = incomes.filter((item) => item.id != removedId);

  let sumOfIncomes = calculateSum(incomes, "iValue");
  incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
};

const getEditedValues = () => {
  const getEditedName = document.querySelector("#edited-name");
  const getEditedValue = document.querySelector("#edited-value");
  const getEditedId = editedButton.closest(".budget-element");

  const editedId = getEditedId.id;
  const editedName = getEditedName.value;
  const editedValue = getEditedValue.value;

  console.log(editedName);
  console.log(editedValue);
  console.log(editedId);
};

/*{
  const index = array.findIndex((item) => item.id === szukaneId);
  array[index].amount = 123;
}*/

const createEditForm = (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  const elementParten = element.closest(".budget-element");

  const divForEdit = document.createElement("div");
  divForEdit.classList.add("editing");

  const formForEdit = document.createElement("form");
  formForEdit.setAttribute = ("id", "form-for-edit");

  const editedName = document.createElement("input");
  editedName.setAttribute("id", "edited-name");
  editedName.setAttribute("type", "text");
  editedName.setAttribute("placeholder", "Nowa Nazwa");

  const editedValue = document.createElement("input");
  editedValue.setAttribute("id", "edited-value");
  editedValue.setAttribute("type", "number");
  editedValue.setAttribute("ster", "0.01");
  editedValue.setAttribute("placeholder", "Nowa kwota");

  const editedButton = document.createElement("button");
  editedButton.innerHTML = "Zmień";
  editedButton.setAttribute("id", "form-edit-button");
  editedButton.setAttribute("type", "submit");
  editedButton.classList.add("button");

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Anuluj";
  cancelButton.setAttribute("id", "cancel-button");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("button");

  formForEdit.appendChild(editedName);
  formForEdit.appendChild(editedValue);
  formForEdit.appendChild(editedButton);
  formForEdit.appendChild(cancelButton);
  divForEdit.appendChild(formForEdit);
  elementParten.appendChild(divForEdit);

  cancelButton.addEventListener("click", () => {
    const canceledList = cancelButton.closest(".editing");
    canceledList.remove();
  });

  editedButton.addEventListener("click", function (event) {
    getEditedValues, event.preventDefault();
  });

  let sumOfIncomes = calculateSum(incomes, "iValue");
  incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
};

const renderIncome = (income) => {
  const buttonEdit = document.createElement("button");
  buttonEdit.type = "button";
  buttonEdit.name = "buttonEdit";
  buttonEdit.innerText = "Edytuj";
  buttonEdit.classList.add("button");

  const buttonRemove = document.createElement("button");
  buttonRemove.type = "button";
  buttonRemove.name = "buttonRemove";
  buttonRemove.innerText = "Usuń";
  buttonRemove.classList.add("button");

  const budgetElement = document.createElement("div");
  budgetElement.classList.add("budget-element");
  budgetElement.id = `${income.id}`;

  const newIncome = document.createElement("div");
  newIncome.classList.add("budget-position");

  const newIncomeButtons = document.createElement("div");
  newIncomeButtons.classList.add("budget-buttons");

  const incomeTitle = document.createElement("span");
  incomeTitle.innerHTML = `${income.title}: `;

  const incomeValue = document.createElement("span");
  incomeValue.innerHTML = `${income.iValue} złotych`;

  newIncome.appendChild(incomeTitle);
  newIncome.appendChild(incomeValue);
  newIncomeButtons.appendChild(buttonEdit);
  newIncomeButtons.appendChild(buttonRemove);
  budgetElement.appendChild(newIncome);
  budgetElement.appendChild(newIncomeButtons);
  incomesList.appendChild(budgetElement);

  buttonRemove.addEventListener("click", removeIncome);
  buttonEdit.addEventListener("click", createEditForm);
};

const addIncome = (e) => {
  e.preventDefault();
  if (incomeName.value == "" || incomeValue.value == "") {
    alert("Wprowadź poprawne dane!");
    return;
  } else {
    const incomeID = Date.now();
    const incVal = incomeValue.value;
    const incName = incomeName.value;

    const income = {
      id: incomeID,
      title: incName,
      iValue: parseFloat(incVal),
    };

    incomes.push(income);
    incomeName.value = "";
    incomeValue.value = "";

    renderIncome(income);
    let sumOfIncomes = calculateSum(incomes, "iValue");
    incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
    console.log("Przychody", sumOfIncomes);
  }
};

/*OUTGOES*/
const removeOutgo = (e) => {
  const outgoElement = e.currentTarget;
  const outgoElementParten = outgoElement.closest("div");
  outgoElementParten.remove();

  const removedId = outgoElementParten.id;
  console.log(removedId);
  outgoes = outgoes.filter((item) => item.id != removedId);

  let sumOfOutgoes = calculateSum(outgoes, "oValue");
  outgoesSum.innerHTML = `Suma wydatków: ${sumOfOutgoes} PLN`;
};

const renderOutgo = (outgo) => {
  const buttonEdit = document.createElement("button");
  buttonEdit.type = "button";
  buttonEdit.name = "buttonEdit";
  buttonEdit.innerText = "Edytuj";
  buttonEdit.classList.add("button");

  const buttonRemove = document.createElement("button");
  buttonRemove.type = "submit";
  buttonRemove.name = "buttonRemove";
  buttonRemove.innerText = "Usuń";
  buttonRemove.classList.add("button");

  const newOutgo = document.createElement("div");
  newOutgo.id = `${outgo.id}`;

  const outgoTitle = document.createElement("span");
  outgoTitle.innerHTML = `${outgo.title}: `;

  const outgoValue = document.createElement("span");
  outgoValue.innerHTML = `${outgo.oValue} złotych`;

  newOutgo.appendChild(outgoTitle);
  newOutgo.appendChild(outgoValue);
  newOutgo.appendChild(buttonEdit);
  newOutgo.appendChild(buttonRemove);
  outgoesList.appendChild(newOutgo);

  buttonRemove.addEventListener("click", removeOutgo);
};

const addOutgo = (e) => {
  e.preventDefault();
  if (outgoName.value == "" || outgoValue.value == "") {
    alert("Wprowadź poprawne dane!");
    return;
  } else {
    const outgoID = Date.now();
    const outVal = outgoValue.value;
    const outName = outgoName.value;

    const outgo = {
      id: outgoID,
      title: outName,
      oValue: parseFloat(outVal),
    };

    outgoes.push(outgo);
    outgoName.value = "";
    outgoValue.value = "";

    renderOutgo(outgo);
    let sumOfOutgoes = calculateSum(outgoes, "oValue");
    outgoesSum.innerHTML = `Suma wydatków: ${sumOfOutgoes} PLN`;
  }
};

function calculateSum(array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property];
  }, 0);
  return total;
}

function calculateTotalMoney() {
  const totalIncome = incomes.reduce((accumulator, object) => {
    return accumulator + object.iValue;
  }, 0);
  const totalOutgo = outgoes.reduce((accumulator, object) => {
    return accumulator + object.oValue;
  }, 0);
  const totalMoney = totalIncome - totalOutgo;
  console.log(totalMoney);
  sumOfMoney.innerHTML = `Stan Twojego konta wynosi ${totalMoney} PLN`;
  return totalMoney;
}

incomesSubmit.addEventListener("submit", addIncome);
outgoesSubmit.addEventListener("submit", addOutgo);

document.addEventListener("click", calculateTotalMoney);
document.addEventListener("submit", calculateTotalMoney);
