export const Navbar = () => {
  const companyList = ["Himfresh", "BIJA", "Adani"];
  const title = companyList[Math.floor(Math.random() * companyList.length)];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Components
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/taskmanager">
                    Taskmanager
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/users">
                    Users
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/register">
                    Register
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/tic-tac-toe">
                    Tic-tac-toe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/timer">
                    Timer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/project-manager">
                    Project Manager
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
