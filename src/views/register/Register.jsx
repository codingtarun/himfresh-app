import { useEffect, useState } from "react";
import { Button } from "../../components/button/Button";
import { Link, useNavigate } from "react-router";

export const Register = () => {
  // Register user API
  const link = "http://127.0.0.1:8000/api/register";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Check if user is already logged in then redirect
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/users");
    }
  });

  async function register(e) {
    e.preventDefault();
    const data = {
      f_name: firstName,
      l_name: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone_no: (
        Math.floor(Math.random() * 9000000000) + 10000000000
      ).toString(),
      status: "Active",
      date_of_birth: "1987-12-02",
      date_of_joining: "2020-12-02",
      date_of_resign: "",
      aadhar_no: (
        Math.floor(Math.random() * 90000000000) + 100000000000
      ).toString(),
      reset_password: true,
      role: "admin",
    };
    console.log(data);

    let result = await fetch(link, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });

    result = await result.json();

    console.log(result);

    localStorage.setItem("user", JSON.stringify(result));
    navigate("/users");
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 login">
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h2>Register</h2>
          <form action="" onSubmit={(e) => register(e)}>
            <div className="mb-3">
              <label for="f_name" className="form-label fs-6">
                First Name {firstName}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="f_name">
                  <i className="fa-solid fa-user text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  aria-label="f_name"
                  aria-describedby="f_name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="l_name" className="form-label fs-6">
                Last Name {lastName}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="l_name">
                  <i className="fa-solid fa-user text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  aria-label="l_name"
                  aria-describedby="l_name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label fs-6">
                Email {email}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="email">
                  <i className="fa-regular fa-envelope text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label fs-6">
                Password {password}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-ellipsis text-muted"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label fs-6">
                Confirm Password {confirmPassword}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-ellipsis text-muted"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="confirm_password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <Button>Sign up</Button>
          </form>
          <hr />
          <div className="d-flex justify-content-center align-items-center mb-3">
            <button className="btn btn-primary text-dark fw-bold mx-1">
              <i className="fa-brands fa-google"></i>
            </button>
            <button className="btn btn-primary text-dark fw-bold mx-1">
              <i className="fa-brands fa-facebook"></i>
            </button>
          </div>
          <span className="d-block text-center">
            Already have an accoount ?
            <Link to="/login" className="text-reset">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
