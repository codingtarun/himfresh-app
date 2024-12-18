import "./menu.scss";
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
            <a href="/" className="main-nav-list-item-link">
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          {menuItems.map((menu) => (
            <li className="main-nav__list-item">
              <a href={menu.url} className="main-nav-list-item-link">
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="main-nav__link link-logout">
          <a href="http://" className="d-block">
            Logout{" "}
            <i className="fa-solid fa-arrow-right logout-icon ms-1 fw-bold"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};
