import { useState } from "react";
import { Task } from "../../interfaces/Task.interface";
import TaskModal from "./TaskModal";

interface Props {
  task: Task;
  editTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, editTask, deleteTask }: Props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="card card-body bg-secondary text-dark rounded-2 task-card">
      <div onClick={() => setShow(true)}>
        <div className="fs-3 mb-2">{task.id} {task.title}</div>
        <p>{task.description}</p>
      </div>

      <TaskModal task={task} editTask={editTask} 
      deleteTask={deleteTask} show={show} handleClose={handleClose} />    
    </div>
  );
}