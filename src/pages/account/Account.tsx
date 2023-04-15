import { faPencil, faSave, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import userImg from "../../assets/img/user.png";
import Layout from "../../components/Layout/Layout";
import "./Account.scss";

export default function Account() {
  const [user, setUser] = useState(getUser());
  const [editing, setEditing] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);

  const cancelSave = (e: any) => {
    e.preventDefault();
    setUser(getUser());
    setEditing(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
    toast.success("Data successfully saved");
  };

  const changeForm = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const changeImage = (e: any) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUser({ ...user, photo: reader.result as string });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, photo: reader.result })
      );
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
    console.log(user);
  };

  const selectImage = () => {
    if (inputFile.current != null) {
      inputFile.current.click();
    }
  };

  return (
    <Layout>
      <main className="container p-4">
        <Form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 mb-2 text-end">
              {editing ? (
                <div>
                  <Button
                    className="btn-submit text-light rounded-button me-2"
                    variant="danger"
                    onClick={(e) => cancelSave(e)}
                  >
                    <FontAwesomeIcon icon={faClose} className="mr-icon" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="btn-submit text-light rounded-button"
                    variant="primary"
                    onClick={() => onSubmit}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-icon" />
                    Save
                  </Button>
                </div>
              ) : (
                <Button
                  className="text-light rounded-button"
                  variant="primary"
                  onClick={() => setEditing(true)}
                >
                  <FontAwesomeIcon icon={faPencil} className="mr-icon" />
                  Edit
                </Button>
              )}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-md-10 col-lg-9 mb-4">
              <div className="card card-body bg-secondary text-dark">
                <div className="row justify-content-center">
                  <div className="col-sm-auto">
                    <div
                      className="container-image"
                      onClick={() => selectImage()}
                    >
                      <img
                        src={user.photo ? user.photo : userImg}
                        alt="User image"
                        className="user-image"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={inputFile}
                        onChange={changeImage}
                      />
                      <div className="image-hover">
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="mr-icon fa-xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Row>
                        <Col xs={12} sm={12} md lg className="mt-2">
                          <Form.Label className="text-primary">Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={user.name}
                            disabled={!editing}
                            onChange={changeForm}
                          />
                        </Col>
                        <Col xs={12} sm={12} md lg className="mt-2">
                          <Form.Label className="text-primary">
                            Surnames
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="surnames"
                            value={user.surnames}
                            disabled={!editing}
                            onChange={changeForm}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </main>
    </Layout>
  );
}

function getUser() {
  const userLS = localStorage.getItem("user");
  let user = {
    id: null,
    name: "",
    surnames: "",
    photo: "",
  };

  if (userLS) {
    user = JSON.parse(userLS);
  }
  return user;
}
