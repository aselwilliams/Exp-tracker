import React, {useState, useEffect} from 'react';
import classes from './BarChart.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import moment from 'moment';

const BarChartOne = () => {
  const userId= localStorage.getItem('userId')
  const [barChart, setBarChart] = useState([])

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

   let result=[]
   let incomeArr=[]
   const separateData=()=> {
    for(let i=0; i<barChart.length; i++){
      if(i%2!==0){
        incomeArr.push(barChart[i])
      } else {
        result.push(barChart[i])
      }
    }
    return incomeArr
   }
   separateData()
   for(let i=0; i<result.length; i++){
    result[i].income=incomeArr[i].name.rows[i].income
    result[i].name= moment(result[i].name).format('DD MMM YYYY (ddd)');
   }
   console.log(result.reverse(), 'result')

  return (
    <div className={classes.barChart}>
        <h3 className={classes.title}>Transactions breakdown (last week)</h3>
         <BarChart
          width={800}
          height={350}
          data={result}
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