import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    //   console.log("NewExpense");
    //   console.log(expenseData);
    props.OnAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
