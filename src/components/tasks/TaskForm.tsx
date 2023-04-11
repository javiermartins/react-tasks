import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../interfaces/Task.interface";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialTask = {
  title: "",
  description: "",
  completed: false,
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialTask);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.title || task.description) {
      addNewTask(task);
      setTask(initialTask);
      inputTitle.current?.focus();
    } else {
      toast.warning("Add a title or description");
    }
  };

  return (
    <>
      <div className="card card-body bg-secondary text-dark">
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="form-control mb-3 rounded-3 shadow-none border-0"
            onChange={handleInputChange}
            value={task.title}
            autoFocus
            ref={inputTitle}
          />

          <textarea
            name="description"
            rows={2}
            placeholder="Description"
            className="form-control mb-3 rounded-3 shadow-none border-0"
            onChange={handleInputChange}
            value={task.description}
          ></textarea>

          <button className="btn btn-primary text-light rounded-button">
            <FontAwesomeIcon icon={faAdd} className="mr-icon" />
            <span>Add</span>
          </button>
        </form>
      </div>
    </>
  );
}
