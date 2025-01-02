import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

import "./menu.scss";

export const Menu = () => {
  // Loading Hook
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Route list
  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
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
    {
      title: "Mobi",
      url: "/mobi",
    },
  ];

  // Functions
  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div id="menu">
      <nav className="main-nav">
        <button className="menu__toggle" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
        <ul
          className={`${showMenu ? "show-menu" : "hide-menu"} main-nav__list`}
        >
          {menuItems.map((menu) => (
            <li className="main-nav__list-item">
              <NavLink to={menu.url} className="main-nav-list-item-link">
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="main-nav__link link-logout">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
            <i className="fa-solid fa-arrow-right logout-icon ms-1 fw-bold"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};
