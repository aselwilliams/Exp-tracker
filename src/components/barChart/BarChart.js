import React, {useState, useEffect} from 'react';
import classes from './BarChart.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useGlobalContext} from '../../store/globalContext';
// import data from './data';
import generateBarChartData from './index';
import axios from 'axios';


let daysObj = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
  }
  
const BarChartOne = () => {
  const userId= localStorage.getItem('userId')
  const [barChart, setBarChart] = useState([])
    const { incomeList, expenseList}= useGlobalContext();
    
    const getBarChartData=()=> {
      axios
      .get(`http://localhost:4444/barchart/${userId}`)
      .then((res)=> {
          console.log(res.data, 'BAR CHART')
          setBarChart(res.data)
      }).catch((err)=> console.log(err))
    }
   useEffect(()=> {
    getBarChartData()
   },[])


    let Arr = new Array(7).fill({ name: '', income: 0, expense: 0}).map((el, i) => {
        return {...el,
           name:daysObj[i]
         }
     })
    // generateBarChartData(expenseList, Arr,'expense')
    // generateBarChartData(incomeList, Arr, 'income')
  return (
    <div className={classes.barChart}>
        <h3 className={classes.title}>Transactions breakdown (last week)</h3>
         <BarChart
          width={800}
          height={350}
          data={barChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="blue" />
          <Bar dataKey="income" fill="#ffd700" />
        </BarChart>
    </div>
  )
}

export default BarChartOne
// fill="rgba(255,0,165,0.6)" 