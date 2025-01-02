import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
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
  const [url, setUrl] = useState("http://127.0.0.1:8000/api/task/get-all");
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
    // fetching the list
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        Referer: "http://localhost:3000",
      },
    });
    // Wait for response and then store data
    const data = await response.json();
    setTaskList(data.data);
  }, [url]);

  async function store(e) {
    e.preventDefault();
    const data = {
      title: task,
    };

    let result = await fetch("http://127.0.0.1:8000/api/task/store", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        Referer: "http://localhost:3000",
      },
    });

    result = await result.json();
    setTask("");
    fetchTasks();
  }

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
              <ul class="list-group">
                {taskList.map((task) => (
                  <li class="list-group-item disabled">{task.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
