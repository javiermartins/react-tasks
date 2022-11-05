import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../../interfaces/Task.interface";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialTask = {
  title: '',
  description: '',
  completed: false
}

export default function TaskForm({addNewTask}: Props) {

  const [task, setTask] = useState(initialTask);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: {name, value}
  }: HandleInputChange) => {
    setTask({...task, [name]: value});
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialTask);
    inputTitle.current?.focus();
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          <AiOutlinePlus />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}