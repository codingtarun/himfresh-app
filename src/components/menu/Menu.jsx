import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";

import "./menu.scss";

export const Menu = () => {
  // Loading Hook
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);

  function toggleMenu() {
    const previousValue = showMenu;
    setShowMenu(!previousValue);
  }
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
    <div id="menu" className="menu">
      <nav className="menu__nav">
        <button className="menu__btn" onClick={() => toggleMenu()}>
          {showMenu ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
        <ul className={`menu__list ${showMenu ? "show" : "hide"}`}>
          {menuItems.map((menu) => (
            <li className="menu__item">
              <NavLink to={menu.url} className="menu__link">
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="menu__btn" onClick={() => logout()}>
          Logout
          <i className="fa-solid fa-arrow-right logout-icon ms-1 fw-bold"></i>
        </button>
      </nav>
    </div>
  );
};
