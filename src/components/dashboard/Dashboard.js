import React,{useEffect} from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Widget from "../widget/Widget";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import BarChart from "../barChart/BarChart";
import Calculator from "../calculator/Calculator";
import Carousel from '../carousel/Carousel';
import HackerNews from '../hackerNews/HackerNews';
import {useGlobalContext} from '../../store/globalContext'

const Dashboard = () => {
  const { getAllTransactions } = useGlobalContext();
  useEffect(()=> {
   getAllTransactions()
  },[])
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
        <div className={classes.charts}>
          <Chart />
          <Featured />
        </div>
        <div className={classes.coins}>
          <Carousel />
        </div>
        <div className={classes.mixed}>
          <BarChart />
          <Calculator />
        </div>
        <div className={classes.news}>
          <HackerNews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
