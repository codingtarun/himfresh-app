import {
  PieChart,
  Pie,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Alert } from "../../components/alert/Alert";
import { Row } from "../../components/grid/Row";
import "./dashboard.scss";
import { useEffect } from "react";

const productSale = [
  {
    id: 1,
    title: "Product One",
    product1: 2390,
    product2: 1000,
  },
  {
    id: 2,
    title: "Product Two",
    product1: 3090,
    product2: 1300,
  },
  {
    id: 3,
    title: "Product Three",
    product1: 1090,
    product2: 900,
  },
  {
    id: 4,
    title: "Product Four",
    product1: 4090,
    product2: 900,
  },
  {
    id: 5,
    title: "Product Five",
    product1: 4109,
    product2: 1900,
  },
  {
    id: 6,
    title: "Product Six",
    product1: 6090,
    product2: 1500,
  },
];

const pieChartDataOne = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const pieChartDataTwo = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];
export const Dashboard = ({ ...props }) => {
  useEffect(() => {
    document.title = `Himfresh | ${props.title}`;
  });
  return (
    <div className="container-fluid dashboard py-3">
      <div className="main-content">
        <Row>
          <div className="col-sm-3 border" style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart width={500} height={400} data={productSale}>
                <XAxis />
                <YAxis />
                <CartesianGrid strokeDasharray="5 5" />
                <Legend />
                <Tooltip />
                <Area type="monotone" dataKey="product1"></Area>
                <Area type="monotone" dataKey="product2"></Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="col-sm-3 border" style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartDataOne}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={pieChartDataTwo}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="col-sm-6 border" style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={pieChartDataOne}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Pie
                  dataKey="value"
                  data={pieChartDataTwo}
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#82ca9d"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Row>
        <Row>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
        </Row>
      </div>
    </div>
  );
};
