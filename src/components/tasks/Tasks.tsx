import { useState } from "react";
import { Task } from "../../interfaces/Task.interface";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

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
  return (
    <main className="container p-4">
      <div className="row">
        <div className="col-md-4">
          <TaskForm addNewTask={addNewTask} />
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </main>
  );
}