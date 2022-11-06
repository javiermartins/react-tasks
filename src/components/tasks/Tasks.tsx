import { useState } from "react";
import { Task } from "../../interfaces/Task.interface";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./Tasks.scss";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn react",
      description: "Learn more",
      completed: false,
    },
  ]);

  const addNewTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task: Task) => {
    var index = tasks.findIndex(x => x.id == task.id);
    tasks[index] = task;    
    setTasks([...tasks]);
  };

  return (
    <main className="container p-4">
      <div className="row">
        <div className="col-md-4">
          <TaskForm addNewTask={addNewTask} />
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </main>
  );
}