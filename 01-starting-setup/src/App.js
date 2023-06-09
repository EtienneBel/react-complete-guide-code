import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(expensesData);
  const addExpenseHandler = (enteredExpense) => {
    // const expense = {
    //   ...enteredExpense,
    // };
    // console.log("App");
    // console.log(expense);

    setExpenses((prevExpenses) => {
      return [enteredExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense OnAddExpense={addExpenseHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
