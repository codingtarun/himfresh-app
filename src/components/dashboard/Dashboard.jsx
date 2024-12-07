export const Dashboard = ({ ...props }) => {
  return (
    <div className="dashboard" {...props}>
      <div className="main-content min-vh-100">DASHBOARD</div>
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__list-item">
            <a href="http://" className="main-nav-list-item-link">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li className="main-nav__list-item">
            <a href="http://" className="main-nav-list-item-link">
              Staff
            </a>
          </li>
          <li className="main-nav__list-item">
            <a href="http://" className="main-nav-list-item-link">
              Reports
            </a>
          </li>
          <li className="main-nav__list-item">
            <a href="http://" className="main-nav-list-item-link">
              Samples
            </a>
          </li>
          <li className="main-nav__list-item">
            <a href="http://" className="main-nav-list-item-link">
              Machine
            </a>
          </li>
        </ul>
        <div className="main-nav__link link-logout">
          <a href="http://" className="d-block">
            Logout{" "}
            <i class="fa-solid fa-arrow-right logout-icon ms-1 fw-bold"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};
