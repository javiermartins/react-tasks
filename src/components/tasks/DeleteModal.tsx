import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Task } from "../../interfaces/Task.interface";
import "./Tasks.scss";
import { useTranslation } from "react-i18next";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  show: boolean;
  handleClose: any;
}

export default function DeleteModal({
  task,
  deleteTask,
  show,
  handleClose,
}: Props) {
  const [t] = useTranslation("global");

  return (
    <Modal dialogClassName="delete-modal" show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{task.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{t("task.infodeleteTask")}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("general.close")}
          </Button>
          <Button
            variant="danger"
            className="text-light"
            onClick={() => task.id && deleteTask(task.id)}
          >
            {t("task.deleteTask")}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
