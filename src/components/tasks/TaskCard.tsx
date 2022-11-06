import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../../interfaces/Task.interface";
import TaskModal from "./TaskModal";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

export default function TaskCard({ task, editTask, deleteTask }: Props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="card card-body bg-secondary text-dark rounded-2">
      <div>
        <div className="fs-3 mb-2">{task.id} {task.title}</div>
        <p>{task.description}</p>
        <div className="row d-flex justify-content-end">
          <button className="btn btn-danger col-md-2 circle-button text-light"
            onClick={() => task.id && deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="btn btn-primary col-md-2 circle-button text-light"
            onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
      </div>

      <TaskModal task={task} editTask={editTask}
        show={show} handleClose={handleClose} />    
    </div>
  );
}