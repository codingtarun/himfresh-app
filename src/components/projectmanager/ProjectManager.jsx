export function ProjectManager() {
  return (
    <div className="row d-flex justify-content-center min-vh-100 pt-3 bg-dark">
      <div
        className="col-sm-3 d-flex flex-column align-items-center border-end"
        id="sidebar"
      >
        <div className="btn-group">
          <button className="btn btn-primary">Add Project</button>
        </div>
        <div class="list-group mt-4">
          <a
            href="htt"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Project One
          </a>
          <a href="htt" class="list-group-item list-group-item-action">
            Project Two
          </a>
          <a href="htt" class="list-group-item list-group-item-action">
            Project Three
          </a>
          <a href="htt" class="list-group-item list-group-item-action">
            Project Four
          </a>
        </div>
      </div>
      <div className="col-sm-9 d-flex flex-column justify-content-center align-items-center">
        <form action="" style={{ width: "60%" }} className="text-light">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary">Add project</button>
        </form>
      </div>
    </div>
  );
}
