import React from "react";
import classes from "./Featured.module.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "groceries",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "healthcare",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "utilities",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "mortgage/rent",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "transportation",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "entertainment",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "education",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
const Featured = () => {
  return (
    <div className={classes.featured}>
        <h3>Expenses by Categories</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Featured;
