export const Investment = () => {
  return (
    <div
      id="investment"
      className="d-flex align-items-center flex-column min-vh-100 w-100 py-4"
    >
      <h2 className="text-center mb-3">Investment Calculator</h2>
      <div
        class="card border-0 shadow mb-4 py-2 px-1"
        style={{ width: "60rem", backgroundColor: "#191919", color: "#fff" }}
      >
        <div class="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div class="form-group mb-3">
                  <label for="inputInitialInvestment">Initial Investment</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputInitialInvestment"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="form-group mb-3">
                  <label for="inputAnnualInvestment">Annual Investment</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputAnnualInvestment"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="form-group mb-3">
                  <label for="inputExpectedReturn">Expected Return</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputExpectedReturn"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="form-group mb-3">
                  <label for="inputDuration">Duration</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputDuration"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="card border-0 shadow mb-3"
        style={{ width: "60rem", backgroundColor: "#191919", color: "#fff" }}
      >
        <div class="card-body">
          <table class="table table-sm" style={{ color: "#fff" }}>
            <thead>
              <tr>
                <th scope="col">Years</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Intrest(Year)</th>
                <th scope="col">Total Intrest</th>
                <th scope="col">Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
