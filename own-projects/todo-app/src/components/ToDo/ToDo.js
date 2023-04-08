const ToDo = (props) => {
  return (
    <div>
      <form>
        {/* <input type="radio" /> */}
        <p>{props.toDoData.title}</p>
      </form>
    </div>
  );
};

export default ToDo;
