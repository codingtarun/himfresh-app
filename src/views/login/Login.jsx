import { Button } from "../../components/button/Button";

export const Login = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center min-vh-100 login">
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h2>Login</h2>
          <form action="">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label fs-6">
                Email
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-regular fa-envelope text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label fs-6"
              >
                Password
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-ellipsis text-muted"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
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
            <a href="http://" className="text-reset">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};