import { ChangeEvent, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Task } from "../../interfaces/Task.interface";
import "./Tasks.scss";

interface Props {
  task: Task;
  show: boolean;
  handleClose: any;
  editTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskModal({
  task,
  editTask,
  show,
  handleClose,
}: Props) {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    editTask(editedTask);
  }, [editedTask]);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <>
      <Modal dialogClassName="task-modal" show={show} onHide={handleClose}>
        <Modal.Header
          className="border-0 pb-0 modal-header"
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            className="no-border title-input"
            defaultValue={task.title}
            onChange={handleInputChange}
          />
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Description"
            className="no-border description-text"
            defaultValue={task.description}
            onChange={handleInputChange}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
