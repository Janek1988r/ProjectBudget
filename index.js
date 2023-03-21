const incomeName = document.querySelector("#incomes-name");
const incomeValue = document.querySelector("#incomes-value");

const incomesSubmit = document.querySelector("#incomes-form");

const outgoName = document.querySelector("#outgoes-name");
const outgoValue = document.querySelector("#outgoes-value");

const btnIncomeSubmit = document.querySelector("#form-in-submit");
const btnOutgoeSubmit = document.querySelector("#form-out-submit");

const incomesSum = document.querySelector("#sum-of-incomes");
const outgoesSum = document.querySelector("#sum-of-outgoes");
let sumOfMoney = document.querySelector("#sum-of-all");

const incomesList = document.querySelector("#income-list");
const outgoesList = document.querySelector("#outgoe-list");

const incomeNameColumn = document.querySelector("#inc-name-col");
const incomeValueColumn = document.querySelector("#inc-value-col");
const incomeEditColumn = document.querySelector("#inc-edit-col");
const incomeRemoveColumn = document.querySelector("#inc-remove-col");

const outgoNameColumn = document.querySelector("#inc-name-col");
const outgoValueColumn = document.querySelector("#inc-value-col");
const outgoEditColumn = document.querySelector("#inc-edit-col");
const outgoRemoveColumn = document.querySelector("#inc-remove-col");

let incomes = [];

const removeIncome = (e) => {
  const incomeElement = e.currentTarget;
  const incomeElementParten = incomeElement.closest("div");
  incomeElementParten.remove();

  const removedId = incomeElementParten.id;
  console.log(removedId);
  /* incomes = incomes.filter((item) => item.id !== removedId);*/
  incomes = incomes.filter((v) => !removedId.includes(v));
  /*let removeIncomeByID = () => {
    let incomes = incomes.findIndex((obj) => obj.id === removedId);
    if (incomes > -1) {
      incomes.splice(incomes, 1);
    }
    return incomes;
  };*/

  let sumOfIncomes = calculateSum(incomes, "iValue");
  incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
  console.log(incomes);
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

  const newIncome = document.createElement("div");
  newIncome.id = `${income.id}`;

  const incomeTitle = document.createElement("span");
  incomeTitle.innerHTML = `${income.title}: `;

  const incomeValue = document.createElement("span");
  incomeValue.innerHTML = `${income.iValue} złotych`;

  newIncome.appendChild(incomeTitle);
  newIncome.appendChild(incomeValue);
  newIncome.appendChild(buttonEdit);
  newIncome.appendChild(buttonRemove);
  incomesList.appendChild(newIncome);

  buttonRemove.addEventListener("click", removeIncome);
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
    console.log(incomes);
  }
};

incomesSubmit.addEventListener("submit", addIncome);

function calculateSum(array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property];
  }, 0);
  return total;
}
