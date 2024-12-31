import "./navbar.scss";
export const Navbar = () => {
  // Get user information from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const userPlaceholder = `http://127.0.0.1:8000/storage/images/${user?.message.image}`;
  return (
    <div
      className="d-flex align-items-center w-100 bg-light border-bottom py-3 px-2"
      id="navbar"
    >
      <div className="container-fluid d-flex justify-content-between">
        <div className="logo">
          <a href="/">Himfresh</a>
        </div>
        <div className="info d-flex justify-content-between align-items-center gap-4">
          <img
            src={userPlaceholder}
            alt="User Placeholder"
            className="img-fluid rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="datetime d-flex jusitfy-content-center align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary">
                {user?.message.f_name} {user?.message.l_name}
              </button>
              <button
                type="button"
                class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Roles & Permissions
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    APIs
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
