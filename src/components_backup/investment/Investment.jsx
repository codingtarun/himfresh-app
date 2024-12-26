import { useState } from "react";

export const Investment = () => {
  const [userInput, setUserInput] = useState({
    year: 1,
    plants: 50,
    fruits: 30,
    weight: 10,
    boxes: 1,
    totalInvestment: 10000,
    perPlantCost: 2000,
  });

  const result = calculateResult({ ...userInput });

  function handleUserInput(inputIdentifier, value) {
    setUserInput((oldData) => {
      return {
        ...oldData,
        [inputIdentifier]: Number(value),
      };
    });
  }

  function calculateResult({ year, plants, totalInvestment }) {
    const finalData = [];
    for (let i = 1; i <= year; i++) {
      const p = plants * i; // Define variables for reusable values
      const f = 30 * plants * i;
      const totalInvestment = 10000 * i;

      finalData.push({
        year: i,
        plants: p,
        fruits: f,
        weight: 30 * 1.5,
        boxes: f / 50, // Use the variable here
        totalInvestment: totalInvestment,
        perPlantCost: totalInvestment / plants, // Use variables for clarity
      });
    }
    return finalData;
  }
  return (
    <div
      id="investment"
      className="d-flex align-items-center flex-column min-vh-100 py-4"
    >
      <h2 className="text-center mb-3">Investment Calculator</h2>
      <div
        className="card border-0 shadow mb-4 py-2 px-1"
        style={{ backgroundColor: "#191919", color: "#fff" }}
      >
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputNoOfYears">
                    No of Years(Start from plantation year)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputNumberOfYears"
                    required
                    value={userInput.year}
                    onChange={(event) =>
                      handleUserInput("year", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputNoOfPlants">No. of plants</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputNoOfPlants"
                    required
                    value={userInput.plants}
                    onChange={(event) =>
                      handleUserInput("plants", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputTotalInvestment">Total Investment</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputTotalInvestment"
                    required
                    value={userInput.totalInvestment}
                    onChange={(event) =>
                      handleUserInput("totalInvestment", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputDuration">Duration</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputDuration"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="card border-0 shadow mb-3"
        style={{ backgroundColor: "#191919", color: "#fff" }}
      >
        <div className="card-body">
          <table className="table table-sm" style={{ color: "#fff" }}>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Plants</th>
                <th scope="col">Total Project Cost</th>
                <th scope="col">Per Plant Cost</th>
                <th scope="col">Fruits</th>
                <th scope="col">Weight</th>
                <th scope="col">Boxes</th>
              </tr>
            </thead>
            <tbody>
              {result.map((plant) => {
                return (
                  <tr key={plant.year}>
                    <th scope="row">{plant.year}</th>
                    <th>{plant.plants}</th>
                    <th>{plant.totalInvestment}</th>
                    <th>{plant.perPlantCost}</th>
                    <td>{plant.fruits}</td>
                    <td>{plant.weight}</td>
                    <td>{plant.boxes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
