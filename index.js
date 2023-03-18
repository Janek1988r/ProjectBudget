const incomeName = document.querySelector("#incomes-name");
const incomeValue = document.querySelector("#incomes-value");

const incomesSubmit = document.querySelector("#incomes-form");

const outgoName = document.querySelector("#outgoes-name");
const outgoValue = document.querySelector("#outgoes-value");

const btnIncomeSubmit = document.querySelector("#form-in-submit");
const btnOutgoeSubmit = document.querySelector("#form-out-submit");

const incomesSum = document.querySelector("#sum-of-incomes");
const outgoesSum = document.querySelector("#sum-of-outgoes");
const sumOfMoney = document.querySelector("#sum-of-all");

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

const incomeID = Date.now();

const renderIncome = (income) => {
  const newIncome = document.createElement("div");
  newIncome.id = `income:${income.id}`;

  const incomeTitle = document.createElement("span");
  incomeTitle.innerHTML = `${income.title}: `;

  const incomeValue = document.createElement("span");
  incomeValue.innerHTML = `${income.iValue} złotych`;

  newIncome.appendChild(incomeTitle);
  newIncome.appendChild(incomeValue);
  incomesList.appendChild(newIncome);
};

const addIncome = (e) => {
  e.preventDefault();
  const incVal = incomeValue.value;
  const incName = incomeName.value;
  const income = {
    id: incomeID,
    title: incName,
    iValue: incVal,
  };
  incomes.push(income);
  incomeName.value = "";
  incomeValue.value = "";
  renderIncome(income);
  let incomeValueTable = incomes.map(({ iValue }) => iValue);
  console.log(incomeValueTable);
  /*let sumOfIncomes = incomes.reduce(
    (accumulator, currentValue) => accumulator + currentValue.iValue,
    0
  );*/
  let sumOfIncomes = incomeValueTable.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sumOfIncomes);
  console.log(typeof incomes.iValue);
};

incomesSubmit.addEventListener("submit", addIncome);

let sumOfIncomes = incomes.reduce((accumulator, object) => {
  return accumulator + object.iValue;
}, 0);

incomesSum.innerHTML = `${sumOfIncomes}`;

console.log(incomes);
