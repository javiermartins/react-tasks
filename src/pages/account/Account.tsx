import { faPencil, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import userImg from "../../assets/img/user.png";
import Layout from "../../components/Layout/Layout";
import "./Account.scss";

export default function Account() {
  const [user, setUser] = useState(getUser());
  const [editing, setEditing] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Data successfully saved");
  };

  //TODO: add photo

  return (
    <Layout>
      <main className="container p-4">
        <Form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 mb-2 text-end">
              {editing ? (
                <Button
                  className="btn-submit text-light rounded-button"
                  variant="primary"
                  onClick={() => setEditing(false)}
                >
                  <FontAwesomeIcon icon={faSave} className="mr-icon" />
                  Save
                </Button>
              ) : (
                <Button
                  className="text-light rounded-button"
                  variant="primary"
                  onClick={() => setEditing(true)}
                  type="submit"
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
                  <div className="col-sm-auto text-center">
                    <img
                      src={userImg}
                      alt="User image"
                      className="user-image"
                    />
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Row>
                        <Col xs={12} sm={12} md lg className="mt-2">
                          <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            defaultValue={user.name}
                            disabled={!editing}
                          />
                        </Col>
                        <Col xs={12} sm={12} md lg className="mt-2">
                          <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            name="surnames"
                            defaultValue={user.surnames}
                            disabled={!editing}
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
  };

  if (userLS) {
    user = JSON.parse(userLS);
  }
  return user;
}
