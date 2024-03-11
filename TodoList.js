// import { Button } from "bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { MdAutoDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import "./Todo.css";

const TodoList = () => {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const fetchTodoList = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((response) => {
        console.log(response.data);
        setTodoList(response.data);
      })
      .catch((error) => console.log(error));
  };
  React.useEffect(() => {
    fetchTodoList();
  }, []);
  const handleData = (event) => {
    event.preventDefault();
    if (!todo) {
      alert("Please enter todo");
      return;
    }
  };
  return (
    <div className="divContainer">
      <h1>ToDoList</h1>
      <form className="formContainer" onSubmit={handleData()}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button>Add Todo</Button>
      </form>
      <Table striped bordered hover variant="dark">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Id</th>
            <th>Todo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map(({ id, todo }) => (
            <tr key={id} style={{ textAlign: "center" }}>
              <td>{id}</td>
              <td>{todo}</td>
              <td>
                <FaUserEdit size={30} />
              </td>
              <td>
                <MdAutoDelete size={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
