import classes from "./Chart.module.css";
import React,{useState, useEffect} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import axios from 'axios'

const Chart = () => {
    const userId= localStorage.getItem('userId')
    const[areaChart, setAreaChart]= useState([])

    const getAreaChartData=()=> {
      axios
      .get(`http://localhost:4444/areachart/${userId}`)
      .then((res)=> {
          console.log(res.data, 'AREA CHART')
          setAreaChart(res.data)
      }).catch((err)=> console.log(err))
    }
   useEffect(()=> {
    getAreaChartData()
   },[])
   
  return (
    <div className={classes.chart}>
      <h3 className={classes.title}>Monthly total balance (last 12 months)</h3>
        <AreaChart
          width={730}
          height={250}
          data={areaChart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="expenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
              <stop offset="95%" stopColor="blue" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="yellow" stopOpacity={0.8} />
              <stop offset="95%" stopColor="yellow" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="blue"
            fillOpacity={1}
            fill="url(#expenses)"
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="goldenrod"
            fillOpacity={1}
            fill="url(#income)"
          />
        </AreaChart>
    </div>
  );
};

export default Chart;
