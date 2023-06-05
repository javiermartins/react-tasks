import { faPencil, faSave, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import userImg from "../../assets/img/user.png";
import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import locales from "../../assets/translations/languages.json";
import { useTranslation } from "react-i18next";

const version = "1.0.0"

export default function Account() {
  const [user, setUser] = useState(getUser());
  const [editing, setEditing] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);
  const [t, i18n] = useTranslation("global");

  const cancelSave = (e: any) => {
    e.preventDefault();
    setUser(getUser());
    setEditing(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
    toast.success(t("account.dataSaved"));
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
  };

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    setUser({ ...user, language: locale });
    localStorage.setItem("user", JSON.stringify({ ...user, language: locale }));
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
                    {t("general.cancel")}
                  </Button>
                  <Button
                    type="submit"
                    className="btn-submit text-light rounded-button"
                    variant="primary"
                    onClick={() => onSubmit}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-icon" />
                    {t("general.save")}
                  </Button>
                </div>
              ) : (
                <Button
                  className="text-light rounded-button"
                  variant="primary"
                  onClick={() => setEditing(true)}
                >
                  <FontAwesomeIcon icon={faPencil} className="mr-icon" />
                  {t("general.edit")}
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
                          <Form.Label className="text-primary">
                            {t("account.name")}
                          </Form.Label>
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
                            {t("account.surnames")}
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
                      <Row>
                        <Col className="mt-2">
                          <Form.Label className="text-primary">
                            {t("account.language")}
                          </Form.Label>
                          <Form.Select
                            aria-label="Select for language"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={user.language}
                          >
                            {Object.keys(locales).map((locale: any) => (
                              <option key={locale} value={locale}>
                                {locales[locale].title}
                              </option>
                            ))}
                          </Form.Select>
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
      <div className="footer-account bg-primary">
        <span className="version-tag">{t("general.version")} {version}</span>
      </div>
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
    language: "",
  };

  if (userLS) {
    user = JSON.parse(userLS);
  }
  return user;
}
