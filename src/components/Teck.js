import React, { useEffect, useState } from "react";

const Teck = () => {
  const [task, setTask] = useState("");
  const [newtask, setNewtask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewtask([
      ...newtask,
      { text: task, isCompleted: false, id: Date.now() },
    ]);
    setTask("");
  };

  const handleSubmition = (id) => {
    const updatedTask = newtask.map((update) =>
      update.id === id
        ? { ...update, isCompleted: !update.isCompleted }
        : update
    );
    setTask(updatedTask);
    console.log("updatedtask", updatedTask);
  };
  const handleUpdate = (id, updatedText) => {
    const updatedTask = newtask.map(
      (task) => (task.id = id ? { ...task, text: updatedText } : task)
    );
    setNewtask(updatedTask);
  };
  const handleDelete = (id) => {
    const filteredTask = newtask.filter((task) => task.id !== id);
    setNewtask(filteredTask);
  };
  console.log("task", task);
  console.log("newtask", newtask);

  return (
    <>
      <div>
        <h1>Task Management</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task.text}
            onChange={(e) => setTask(e.target.value)}
            placeholder="enter ur task"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div>
        <ul>
          {newtask.map((tasks) => (
            <div key={tasks.id} style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={tasks.isCompleted}
                onChange={() => handleSubmition(tasks.id)}
              />
              <li
                style={{
                  textDecoration: tasks.isCompleted ? "line-through" : "none",
                }}
              >
                {tasks.text}
              </li>
              <button
                onClick={() => {
                  const updatedTask = prompt("Edit ur task:", tasks.text);
                  if (updatedTask && updatedTask !== tasks.text) {
                    handleUpdate(tasks.id, updatedTask);
                  }
                }}
              >
                Update
              </button>

              <button
                onClick={() => {
                  handleDelete(tasks.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Teck;
