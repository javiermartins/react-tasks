import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Toolbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="React logo" style={{ width: "4rem" }} />
          <span>React tasks</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/account">
              <button className="btn text-light">
                <FontAwesomeIcon className="fa-2xl mr-icon" icon={faUser} />
                <span>Account</span>
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
