import React, { useState, useEffect } from "react";
import classes from "./BarChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import moment from "moment";
import { useGlobalContext } from "../../store/globalContext";
import data from './data'

const BarChartOne = () => {
  const userId = localStorage.getItem("userId");
  const [barChart, setBarChart] = useState([]);
  const [result, setResult] = useState([]);
  const { list } = useGlobalContext();

  const getBarChartData = () => {
    axios
      .get(`http://localhost:4444/barchart/${userId}`)
      .then((res) => {
        console.log(res.data, "BAR CHART");
        setBarChart(res.data);
      })
      .then(()=>{
        makeDataArr()
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBarChartData();
  }, [list]);

  const makeDataArr = () => {
    let resultArr=[]
    if(barChart.length>0){
      const newArr = barChart.map((el,arr)=>{
        el.t_date=moment(el.t_date).format("DD-MMM-YY (ddd)")
        return {...el}})
      console.log(newArr, 'newArr')

      for(let i=0; i<newArr.length; i++){
        if(newArr[i].expense){
          let obj = {
            name: newArr[i].t_date,
            income: null,
            expense: +(newArr[i].expense),
          };
        resultArr.push(obj)
        } 
        if(newArr[i].income){
            let found=resultArr.find((el)=> el.name===newArr[i].t_date)
            found.income= newArr[i]?.income
            console.log(found,'found')
            console.log(resultArr, 'resultArr')
          console.log('hit!',newArr[i])
        }
      }
      setResult(resultArr.reverse())
    }
  };
  
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
        <Bar dataKey="expense" fill="blue" />
        <Bar dataKey="income" fill="#ffd700" />
      </BarChart>
    </div>
  );
};

export default BarChartOne;

