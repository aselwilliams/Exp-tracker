import classes from "./Chart.module.css";
import React,{useState, useEffect} from "react";
import { useGlobalContext } from "../../store/globalContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// import validateTransactions from './index';
import axios from 'axios'


// const data = [
//   { month: "January", income: 1300, expenses:2900 },
//   { month: "February", income: 1800, expenses:600 },
//   { month: "March", income: 2300, expenses:900 },
//   { month: "April", income: 6300, expenses:2300 },
//   { month: "May", income: 5800, expenses:3100 },
//   { month: "June", income: 4900, expenses:2700 },
//   { month: "July", income: 5500, expenses:1900 },
//   { month: "August", income: 2300, expenses:900 },
//   { month: "September", income: 3700, expenses:800 },
//   { month: "October", income: 5600,expenses:2400 },
//   { month: "November", income: 4400, expenses:1400 },
//   { month: "December", income: 3900,expenses:1800 },
// ];

let obj={'1':'January',
            '2':'Febuary',
            '3':'March',
            '4':'April',
            '5':'May',
            '6':'June',
            '7':'July',
            '8':'August',
            '9':'September',
            '10':'October',
            '11':'November',
            '12':'December',
        }
let arr = new Array(12).fill({month:'',income:0,expenses:0}).map((el,i)=>{
    return {...el,
      month:obj[i+1]
    }
  })
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
// validateTransactions('income',arr,incomeList)
// validateTransactions('expenses',arr,expenseList)
 console.log(arr,'testData')
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
