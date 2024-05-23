import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  // const [task, setTask] = useState([]);
  const [editMode, setEditMode] = useState({});

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const selectedTask = todos.find((todo) => todo.id === id);
    setEditMode(selectedTask);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(todos);
    try {
      const res = await axios.post("api/todo", todos);
      console.log(res.data);
      setTodos([getTodo()]);
      setTodos({
        id: "",
        title: "",
        description: "",
      });
    } catch (error) {
      console.log.error("Error:", error.response.data);
    }
  };

  const getTodo = async () => {
    const data = await axios.get("/api/todo");
    setTodos(data.data);
  };
  useEffect(() => {
    getTodo();
  }, []);

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   if (editMode.id) {
  //     const updatedTodos = todos.map((todo) =>
  //       todo.id === editMode.id
  //         ? {
  //             ...todo,
  //             title: editMode.title,
  //             description: editMode.description,
  //           }
  //         : todo
  //     );
  //     setTodos(updatedTodos);
  //     setEditMode({});
  //   } else {
  //     const newTodoItem = {
  //       id: Math.random(),
  //       title: editMode.title,
  //       description: editMode.description,
  //     };
  //     setTodos([...todos, newTodoItem]);
  //     setEditMode({ title: "", description: "" });
  //   }
  // };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="cc">
        <input
          className="li"
          type="text"
          value={editMode.title || ""}
          name="tasks"
          onChange={(e) => setEditMode({ ...editMode, title: e.target.value })}
          placeholder="Add new todo"
        />
        <input
          className="li"
          type="text"
          value={editMode.description || ""}
          name="taskss"
          onChange={(e) =>
            setEditMode({ ...editMode, description: e.target.value })
          }
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
