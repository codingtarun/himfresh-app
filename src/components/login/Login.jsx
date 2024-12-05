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
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-regular fa-envelope text-muted"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
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
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="fa-solid fa-ellipsis text-muted"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">
                  <i class="fa-solid fa-eye-slash text-muted"></i>
                </span>
              </div>
            </div>
            <a href="http://" className="d-block text-reset text-end">
              Forgot your password
            </a>
            <button
              type="submit"
              className="btn btn-primary my-3 w-100 fw-bold"
            >
              Sign in
            </button>
          </form>
          <hr />
          <div className="d-flex justify-content-center align-items-center mb-3">
            <button className="btn btn-primary text-dark fw-bold mx-1">
              <i class="fa-brands fa-google"></i>
            </button>
            <button className="btn btn-primary text-dark fw-bold mx-1">
              <i class="fa-brands fa-facebook"></i>
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
