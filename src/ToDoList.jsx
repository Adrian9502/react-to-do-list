import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container main bg-primary w-50 p-4 rounded">
      <h1 className="text-center text-warning fw-bold">To-Do List</h1>
      <div className="d-flex gap-3">
        <input
          className="form-control fs-5"
          type="text"
          placeholder="Enter task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="d-flex justify-content-center align-items-center btn btn-success"
          onClick={addTask}
        >
          <i className="bi bi-check-lg"></i>
          Add
        </button>
      </div>

      {/* Conditionally render tasks or a message if tasks is empty */}
      {tasks.length === 0 ? (
        <p className="text-center mt-5 text-white">No tasks added yet.</p>
      ) : (
        <div className="d-flex row mt-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-light d-flex text-wrap mh-auto justify-content-between align-items-center mb-2 p-2 rounded"
            >
              <span className="text-start fs-5 text-wrap ">{task}</span>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(index)}
                >
                  <i className="bi bi-x"></i>
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => moveTaskUp(index)}
                >
                  <i className="bi bi-arrow-up"></i>
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => moveTaskDown(index)}
                >
                  <i className="bi bi-arrow-down"></i>
                </button>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default ToDoList;
