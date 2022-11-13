import { ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Task } from "../../interfaces/Task.interface";
import "./Tasks.scss";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  show: boolean;
  handleClose: any;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function DeleteModal({
  task,
  deleteTask,
  show,
  handleClose,
}: Props) {
  return (
    <Modal dialogClassName="delete-modal" show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{task.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this task?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            className="text-light"
            onClick={() => task.id && deleteTask(task.id)}
          >
            Delete task
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
