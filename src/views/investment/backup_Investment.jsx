import { useState } from "react";

export const Investment = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const result = calculateResults({ ...userInput });
  function handleInputChange(inputIdentifier, value) {
    console.log(userInput);
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: Number(value),
      };
    });
  }

  function calculateResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, // year identifier
        interest: interestEarnedInYear, // the amount of interest earned in this year
        valueEndOfYear: investmentValue, // investment value at end of year
        annualInvestment: annualInvestment, // investment added in this year
      });
    }
    return annualData;
  }
  return (
    <div
      id="investment"
      className="d-flex align-items-center flex-column min-vh-100 w-100 py-4"
    >
      <h2 className="text-center mb-3">Investment Calculator</h2>
      <div
        className="card border-0 shadow mb-4 py-2 px-1"
        style={{ width: "60rem", backgroundColor: "#191919", color: "#fff" }}
      >
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputInitialInvestment">Initial Investment</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputInitialInvestment"
                    required
                    onChange={(event) =>
                      handleInputChange("initialInvestment", event.target.value)
                    }
                    value={userInput.initialInvestment}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputAnnualInvestment">Annual Investment</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAnnualInvestment"
                    required
                    onChange={(event) =>
                      handleInputChange("annualInvestment", event.target.value)
                    }
                    value={userInput.annualInvestment}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-3">
                  <label for="inputExpectedReturn">Expected Return</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputExpectedReturn"
                    required
                    onChange={(event) =>
                      handleInputChange("expectedReturn", event.target.value)
                    }
                    value={userInput.expectedReturn}
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
                    onChange={(event) =>
                      handleInputChange("duration", event.target.value)
                    }
                    value={userInput.duration}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="card border-0 shadow mb-3"
        style={{ width: "60rem", backgroundColor: "#191919", color: "#fff" }}
      >
        <div className="card-body">
          <table className="table table-sm" style={{ color: "#fff" }}>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Plants</th>
                <th scope="col">Fruits</th>
                <th scope="col">Weight</th>
                <th scope="col">Boxes</th>
              </tr>
            </thead>
            <tbody>
              {result.map((yearData) => {
                return (
                  <tr key={yearData.year}>
                    <th scope="row">{yearData.year}</th>
                    <td>{yearData.initialInvestment}</td>
                    <td>{yearData.interest}</td>
                    <td>{yearData.annualInvestment}</td>
                    <td>{yearData.valueEndOfYear}</td>
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
