import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Widget from "../widget/Widget";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.widgets}>
          <Widget type="income" />
          <Widget type="expenses" />
          <Widget type="balance" />
          <Widget type="today" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;