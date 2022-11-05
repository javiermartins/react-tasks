import logo from "../assets/img/logo.svg";

interface Props {
  title?: string;
}

export default function Toolbar({ title }: Props) {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="React logo" style={{ width: "4rem" }} />
          {title && <span>{title}</span>}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}