import { useState, useEffect } from "react";
import { Task } from "../../interfaces/Task.interface";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./Tasks.scss";
import { v4 as uuidv4 } from 'uuid';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    let tasksLS = localStorage.getItem('tasks');
    if(tasksLS) {
      var parsedTasks = JSON.parse(tasksLS);
      setTasks(parsedTasks);
    }
  }, [])

  const addNewTask = (task: Task) => {
    const newTasks = [...tasks, { ...task, id: uuidv4() }];
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const deleteTask = (id: string) => {
    const validTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(validTasks));
    setTasks(validTasks);
  };

  const editTask = (task: Task) => {
    var index = tasks.findIndex(x => x.id == task.id);
    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTasks([...tasks]);
  };

  return (
    <main className="container p-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mb-4">
          <TaskForm addNewTask={addNewTask} />
        </div>
        <div className="col-md-12">
          <div className="row">
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </main>
  );
}