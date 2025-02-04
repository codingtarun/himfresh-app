import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import http from "../../http";
import { useNavigate } from "react-router";

import { useCallback, useEffect, useState } from "react";
import { Row } from "../../components/grid/Row";
import { Col } from "../../components/grid/Col";

import "./taskmanager.scss";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const TaskManger = ({ theme }) => {
  // Loading required hooks
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState(null);

  // We require toke from local storage to generate a token base request.

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  // Check if user is logged in

  useEffect(() => {
    if (!user || !token) {
      navigate("/login");
    }
  });

  // FUNCTIONS
  // Using a callback hook to cache the function to fetch user details

  const fetchTasks = useCallback(async () => {
    // fetching the list using axios
    http.get("/task/get-all").then((response) => {
      setTaskList(response.data.data);
    });
  }, []);
  // Store function
  async function store(e) {
    // Prevent default form submit action
    e.preventDefault();
    // Create collection of data.
    const data = {
      title: task,
    };

    // Post data to server using axios
    http.post("/task/store", data).then((response) => {
      if (response.data.status) {
        setTask("");
        fetchTasks();
      } else {
        console.log(response.data.message);
      }
    });
  }
  //Edit function
  function edit(taskTitle) {
    setTask(taskTitle);
  }
  //Update function
  function update() {}
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const data = [
    { name: "Complete", value: taskList.length },
    { name: "Pending", value: 1 },
    { name: "Postponed", value: 1 },
  ];

  return (
    <div className="container-fluid dashboard py-3 main-content">
      <Row>
        <Col className="col-sm-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Col>
        <Col className="col-sm-8">
          <div
            class={`card bg-${theme} mb-4 ${
              theme === "dark" ? "border-light" : ""
            }`}
          >
            <div class="card-body">
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    placeholder="Add Task"
                    aria-label="Add Task"
                    aria-describedby="add-task"
                    value={task ?? null}
                    onChange={(e) => setTask(e.target.value)}
                    required
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      onClick={(e) => store(e)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class={`card bg-${theme} mb-4 ${
              theme === "dark" ? "border-light" : ""
            }`}
          >
            <div class="card-body">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {taskList.map((task) => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.title}</td>
                      <td>
                        <div className="btn-group btn-sm">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => edit(task.title)}
                          >
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
