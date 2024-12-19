import "./menu.scss";

import { Link, NavLink } from "react-router";

export const Menu = () => {
  const menuItems = [
    {
      title: "Task",
      url: "/taskmanager",
    },
    {
      title: "Game",
      url: "/tic-tac-toe",
    },
    {
      title: "Users",
      url: "/users",
    },
    {
      title: "Timer",
      url: "/timer",
    },
  ];
  return (
    <div id="menu">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__list-item">
            <NavLink to="/" className="main-nav-list-item-link">
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          {menuItems.map((menu) => (
            <li className="main-nav__list-item">
              <NavLink to={menu.url} className="main-nav-list-item-link">
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="main-nav__link link-logout">
          <Link to="/register" className="d-block">
            Logout{" "}
            <i className="fa-solid fa-arrow-right logout-icon ms-1 fw-bold"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};
