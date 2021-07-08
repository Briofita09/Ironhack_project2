import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      id="navbarToggleExternalContent"
    >
      <div className="container-fluid">
        <Link className="navbar-brand nAvbar" to="/">
          Chem Lab
        </Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/singup"
              >
                <i class="fas fa-user-plus"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/solucoes`}
              >
                <i class="fas fa-vials"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/create`}
              >
                <i class="fas fa-plus"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/calculadora`}
              >
                <i class="fas fa-calculator"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
