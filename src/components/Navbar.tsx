import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg w-100 navbar-dark custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">My Portfolio</a>

        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;