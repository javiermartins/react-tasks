import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Task } from "../../interfaces/Task.interface";
import DeleteModal from "./DeleteModal";
import "./Tasks.scss";

interface Props {
  task: Task;
  show: boolean;
  handleClose: any;
  editTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskModal({
  task,
  editTask,
  deleteTask,
  show,
  handleClose,
}: Props) {
  const [editedTask, setEditedTask] = useState(task);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);

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
            className="border-0 title-input"
            defaultValue={task.title}
            onChange={handleInputChange}
          />
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Description"
            className="border-0 description-text"
            defaultValue={task.description}
            onChange={handleInputChange}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <button
            className="btn btn-danger col-md-2 circle-button text-light"
            onClick={() => setShowDelete(true)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Modal.Footer>
      </Modal>

      <DeleteModal
        task={task}
        deleteTask={deleteTask}
        show={showDelete}
        handleClose={handleCloseDelete}
      />
    </>
  );
}
