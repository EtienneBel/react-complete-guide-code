import { useState } from "react";
import NewToDo from "../NewToDo/NewToDo";
import ToDo from "../ToDo/ToDo";

const ToDoList = (props) => {
  const [updatedToDoList, setUpdatedToDoList] = useState(props.data);

  const addToToDoListHandler = (newToDo) => {
    setUpdatedToDoList((previousToDoList) => {
      return [newToDo, ...previousToDoList];
    });
  };

  return (
    <div>
      <NewToDo addToToDoList={addToToDoListHandler} />

      {updatedToDoList.map((item, index) => {
        return <ToDo key={index} toDoData={item} />;
      })}
    </div>
  );
};

export default ToDoList;
