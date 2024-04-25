import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="manufacturers"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manufacturers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="manufacturers/">
                  Manufacturers List
                  </NavLink>
                </li>
              </ul>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="manufacturers/new">
                    Register a Manufacturer
                  </NavLink>
                </li>
              </ul>
            </li>
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="models"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Models
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="models/">
                    Vehicle Models List
                  </NavLink>
                </li>
              </ul>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="models/new">
                    Register a Vehicle Model
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="automobiles"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Automobiles
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="automobiles/new">
                    Register a New Automobile
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="technicians"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technicians
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="technicians/">
                    Technicians List
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="technicians/new">
                    Register a New Technician
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="appointments"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appointments
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="appointments/">
                    Appointments List
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="appointments/new">
                    Create an Appointment
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
