import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

export default function Toolbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="React logo" style={{ width: "4rem" }} />
          <span>React tasks</span>
        </Link>
        <Link to="/account">
          <button className="btn text-light">
            <FontAwesomeIcon className="fa-2xl" icon={faUser} />
          </button>
        </Link>
{/*         <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </div>
    </nav>
  );
}
