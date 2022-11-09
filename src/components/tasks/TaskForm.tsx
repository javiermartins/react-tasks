import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../../interfaces/Task.interface";
import { Toast, Button } from "react-bootstrap";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialTask = {
  title: "",
  description: "",
  completed: false
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialTask);
  const [showToast, setToast] = useState(false)
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
      setToast(true)
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

          <Toast
            style={{ marginBottom: "1rem" }}
            onClose={() => setToast(false)}
            autohide
            show={showToast}
            delay={2200}
          >
            <Toast.Body>Add a title or description</Toast.Body>
          </Toast>

          <button className="btn btn-primary text-light">
            <AiOutlinePlus />
            <span>Add</span>
          </button>
        </form>
      </div>
    </>
  );
}