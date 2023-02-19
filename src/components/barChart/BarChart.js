import React from 'react';
import classes from './BarChart.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Saturday',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'Sunday',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];


const BarChartOne = () => {
  return (
    <div className={classes.barChart}>
        <h3 className={classes.title}>Transactions breakdown (last week)</h3>
         <BarChart
          width={800}
          height={350}
          data={data}
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
          <Bar dataKey="expense" fill="rgba(255,0,165,0.6)" />
          <Bar dataKey="income" fill="#333" />
        </BarChart>
    </div>
  )
}

export default BarChartOne