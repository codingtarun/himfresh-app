import { Link, useNavigate } from "react-router";
import { Button } from "../../components/button/Button";
import { useEffect, useState } from "react";

export const Login = () => {
  const loginLink = "http://127.0.0.1:8000/api/login";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const navigate = useNavigate();
  // if user is already logged in then redirect
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  });

  async function login(e) {
    // prevent default fonr submit action
    e.preventDefault();
    // Collect data
    const data = {
      email: email,
      password: password,
    };

    let result = await fetch(loginLink, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "appliation/vnd.api+json",
      },
    });

    result = await result.json();
    if (result.status && result.token) {
      // If user is found and has a token then access is granted
      console.log(result);
      // Store the response to local storage from where we'll access the user info and token.
      localStorage.setItem("user", JSON.stringify(result));
      // redirect to the dashboard.
      navigate("/dashboard");
    } else {
      // If status is false store and show errors
      console.log(result.message);
      if (result.message.email !== undefined) {
        setErrorEmail(result.message.email[0]);
      }
      if (result.message.password !== undefined) {
        setErrorPassword(result.message.password[0]);
      }
    }
  }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 login">
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h2>Login</h2>
          <form action="" onSubmit={(e) => login(e)}>
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
              <small className="text-danger m-0 p-0">{errorEmail}</small>
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
                  aria-label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small className="text-danger m-0 p-0">{errorPassword}</small>
            </div>
            <a href="http://" className="d-block text-reset text-end">
              Forgot your password
            </a>
            <Button>Sign in</Button>
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
            Didn't have an accoount ?
            <Link to="/register" className="text-reset">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
