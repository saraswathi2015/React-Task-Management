import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [job, setJob] = useState("");

  const Task = ({ tasks, toggleComplete, deleteTask }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={tasks.isCompleted}
          onChange={() => toggleComplete(tasks.id)}
        />
        <span
          style={{
            textDecoration: tasks.isCompleted ? "line-through" : "none",
          }}
        >
          {tasks.text}
        </span>
        <button onClick={() => deleteTask(tasks.id)}>Delete</button>
      </div>
    );
  };
  const addTask = (e) => {
    e.preventDefault();
    if (job.trim() === "") return;
    const newTaskobj = {
      id: Date.now(),
      text: job,
      isCompleted: false,
    };
    setTasks([...tasks, newTaskobj]);
    setJob("");
  };
  console.log("job", job);
  console.log("tasks", tasks);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          (task.id = id ? { ...tasks, isCompleted: !task.isCompleted } : task)
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id = !id)));
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="enter your job"
          style={{ width: "25%", height: "50px" }}
        />
        <button type="submit">Add task</button>
      </form>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            tasks={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
