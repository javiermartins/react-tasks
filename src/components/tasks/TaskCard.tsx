import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../../interfaces/Task.interface";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.id} {task.title}</h2>
      <p>{task.description}</p>
      <div className="row d-flex justify-content-end">
        <button className="btn btn-danger col-md-2" onClick={() => task.id && deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="btn btn-primary col-md-2">
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </div>
    </div>
  );
}