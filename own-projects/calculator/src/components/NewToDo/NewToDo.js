import { useState } from "react";

const NewToDo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const enteredToDoHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTodo(event.target.value);
  };
  const addItHandler = (event) => {
    event.preventDefault();
    // console.log(enteredTodo);
    const todo = {
      title: enteredTodo,
      description: "Lorum ipsum ...",
      status: "To Do",
    };

    props.addToToDoList(todo);

    setEnteredTodo("");
  };

  return (
    <form>
      <input type="text" value={enteredTodo} onChange={enteredToDoHandler} />
      <button type="submit" onClick={addItHandler}>
        Add It
      </button>
    </form>
  );
};

export default NewToDo;
