import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Navigate</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                Home
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="manufacturers/new">
                Create a Manufacturer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="manufacturers/">
                Manufacturers List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="models/new">
                Register a Vehicle Model
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="models/">
                Vehicle Models List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="technicians/new">
                Register a New Technician
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="appointments/new">
                Create an Appointment
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="automobiles/new">
                Register a New Automobile
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" to="technicians/">
                Technicians List
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
