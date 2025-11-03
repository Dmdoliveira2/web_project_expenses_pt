# 💰 TripleTen web_project_expenses

Este é um projeto simples e interativo para **controle de despesas pessoais**, desenvolvido em **JavaScript, HTML e CSS**.  
O objetivo é praticar manipulação de arrays, funções, loops e condicionais no JavaScript — simulando um mini sistema de finanças pessoais.

🔗 **Acesse o projeto online:**  
👉 [https://dmdoliveira2.github.io/web_project_expenses_pt/](https://dmdoliveira2.github.io/web_project_expenses_pt/)

---

## 🧠 Objetivo do Projeto

O projeto permite:

- Adicionar novas despesas por categoria
- Calcular o **total geral** de gastos
- Calcular o **total por categoria específica**
- Identificar qual categoria teve o **maior total de despesas**

---

## ⚙️ Funcionalidades Principais

### 🧾 `addExpenseEntry()`

Adiciona uma nova despesa no sistema.

```js
function addExpenseEntry(expense) {
  // expense é um array: [categoria, valor]
  expenseEntries.push(expense); // adiciona no array principal
  totalExpensesValue += expense[1]; // soma o valor ao total geral
}


web_project_expenses_pt/
│
├── index.html          # Estrutura principal da página
├── style.css           # Estilos da aplicação
├── script.js           # Lógica principal em JavaScript
└── README.md           # Documentação do projeto

🖥️ Tecnologias Utilizadas

HTML5 → Estrutura e semântica da página
CSS3 → Estilos visuais e layout
JavaScript (ES6+) → Lógica de programação e manipulação do DOM




✨ Autor

Douglas Oliveira
💻 Desenvolvedor em formação | Foco em Web Full Stack
```
