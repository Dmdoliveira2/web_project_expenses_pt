let budgetValue = 0; // variável para armazenar o valor do orçamento
let totalExpensesValue = 0; // variável para armazenar o valor total das despesas
let balanceColor; // variável para armazenar a cor do saldo

//array com as despesas iniciais
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

//função para calcular o total das despesas
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    total += expenseEntries[i][1];
  }
  const average = total / expenseEntries.length;
  return average;
}

//função para calcular o saldo
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

//função para atualizar a cor do saldo
function updateBalanceColor() {
  const balance = budgetValue - totalExpensesValue;

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }

  return balanceColor;
}

//função para calcular o total das despesas por categoria
function calculateCategoryExpenses(category) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    const categoryName = expenseEntries[i][0];
    const amount = expenseEntries[i][1];

    if (categoryName === category) {
      total += amount;
    }
  }

  return total;
}

//função para calcular a categoria com maior despesa
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];
  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    const total = calculateCategoryExpenses(categoryName);
    categoriesTotals.push([categoryName, total]);
  }
  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }
  return largestCategory;
}

//função para adicionar uma nova despesa
function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
  return totalExpensesValue;
}
