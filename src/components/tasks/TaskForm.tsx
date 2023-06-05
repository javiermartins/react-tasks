import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../interfaces/Task.interface";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialTask = {
  title: "",
  description: "",
  completed: false,
  color: "#ffffff",
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialTask);
  const inputTitle = useRef<HTMLInputElement>(null);
  const [t] = useTranslation("global");

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
      toast.warning(t("task.addDataInfo"));
    }
  };

  return (
    <>
      <div className="card card-body bg-secondary text-dark">
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder={t("task.title") || ""}
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
            placeholder={t("task.description") || ""}
            className="form-control mb-3 rounded-3 shadow-none border-0"
            onChange={handleInputChange}
            value={task.description}
          ></textarea>

          <button className="btn btn-primary text-light rounded-button">
            <FontAwesomeIcon icon={faAdd} className="mr-icon" />
            <span>{t("task.add")}</span>
          </button>
        </form>
      </div>
    </>
  );
}
