import Layout from "../components/Layout/Layout";
import user from "../assets/img/user.png";
import "./Account.scss";

import { Button, Col, Form, Row } from "react-bootstrap";
import { FormEvent } from "react";
export default function Account() {

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Layout>
      <main className="container p-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10 mb-4">
            <div className="card card-body bg-secondary text-dark">
              <div className="row justify-content-center">
                <div className="col-sm-auto">
                  <img src={user} alt="User image" className="user-image" />
                </div>
                <div className="col">
                  <Form onSubmit={onSubmit}>
                    <Form.Group>
                      <Row>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            disabled
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            name="surnames"
                            disabled
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}