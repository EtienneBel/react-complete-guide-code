import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const data = [
    {
      title: "Learn Javascript",
      description: "Lorum ipsum ...",
      status: "Completed",
    },
    {
      title: "Learn React",
      description: "Lorum ipsum ...",
      status: "In Progress",
    },
    {
      title: "Build a React App",
      description: "Lorum ipsum ...",
      status: "To Do",
    },
  ];

  return (
    <div>
      <h1>THINGS TO DO</h1>
      <ToDoList data={data} />
    </div>
  );
}

export default App;
