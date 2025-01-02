import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router";
export const Navbar = ({ theme, setTheme }) => {
  console.log(theme, setTheme);

  // Get user information from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Getting the user image from the API server
  const userPlaceholder = `http://127.0.0.1:8000/storage/images/${user?.data.image}`;
  // Using state to toggle card
  const [userCard, setUserCard] = useState("d-none");
  return (
    <div
      className={`bg-${theme} text-${
        theme === "dark" ? "light" : "dark"
      } d-flex navbar align-items-center w-100 border-bottom border-${theme} py-3 px-2`}
      id="navbar"
    >
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar__logo d-flex flex-column align-items-center">
          <NavLink
            to="/"
            className="text-reset fw-bold fs-2 text-decoration-none border-bottom border-dark border-3 px-2"
          >
            Himfresh
          </NavLink>
          <small className="text-muted fw-bold text-uppercase">Dashboard</small>
        </div>
        <div className="navbar__info d-flex justify-content-between align-items-center gap-4">
          <div
            className="position-relative"
            onMouseEnter={() => setUserCard("d-block")}
            onMouseLeave={() => setUserCard("d-none")}
          >
            <img
              src={userPlaceholder}
              alt="User Placeholder"
              className="img-fluid rounded-circle"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
            />
            <div
              className={`${userCard} position-absolute translate-middle-x border shadow rounded`}
              style={{ zIndex: "1000", transition: "all 4s ease-in" }}
            >
              <div
                class={`card bg-${theme} text-${
                  theme === "dark" ? "light" : "dark"
                }`}
                style={{ width: "12rem" }}
              >
                <img src={userPlaceholder} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    {user?.data.f_name} {user?.data.l_name}
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="switchTheme"
              onClick={() =>
                setTheme((theme) => (theme === "light" ? "dark" : "light"))
              }
            />
            <label class="form-check-label" for="switchTheme">
              {theme === "light" ? (
                <i class="fa-regular fa-sun"></i>
              ) : (
                <i class="fa-regular fa-moon"></i>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
