import React from 'react';
import classes from './Widget.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useGlobalContext } from '../../store/globalContext';
import moment from "moment";

const Widget = ({type}) => {
    const {list, incomeList, expenseList} = useGlobalContext();

    let date_create =moment().format("MM-DD-YYYY HH:mm:ss")
    let data;
    //totals
    let incomes = incomeList.map((income)=> income.amount)
    console.log(incomes, 'incomes')
    let totalIncome = incomes.reduce((acc, curr)=> acc + curr, 0);
    console.log(totalIncome, 'totalIncome')
    let expenses = expenseList.map((expense)=> expense.amount)
    let totalExpense = expenses.reduce((acc, curr)=> acc + curr, 0);
  
    let totalBalance = totalIncome - totalExpense;
    let diff=20

    switch (type) {
        case 'income':
            data={
                title:'Total Income',
                amount: totalIncome,
                isMoney: true,
                link:'See income list',
                icon: <MonetizationOnOutlinedIcon className={classes.icon} style={{color:'green',backgroundColor:'rgba(0,128,0,0.2)', fontSize:'2.5rem'}} />,
            };
            break;
        case 'expenses':
            data={
                title:'Total Expenses',
                amount: totalExpense,
                isMoney: true,
                link: 'View all expenses',
                icon: <ProductionQuantityLimitsIcon className={classes.icon} style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)',fontSize:'2.5rem'}}/>,
            };
            break;
        case 'balance':
            data={
                title:'Total Balance',
                amount: totalBalance,
                isMoney: true,
                link: 'See all transactions',
                icon: <BalanceOutlinedIcon className={classes.icon} style={{color:'goldenrod', backgroundColor:'rgba(218,165,32,0.2)',fontSize:'2.5rem'}} />,
            };
            break;
        case 'today':
            data={
                title:'Today',
                isMoney: false,
                icon: <CalendarMonthOutlinedIcon className={classes.icon} style={{color:'purple',backgroundColor:'rgba(128,0,128,0.2)',fontSize:'2.5rem'}} />,
            };
            break;
        default:
            break;
    }
  return (
    <div className={classes.widget}>
        <div className={classes.left}>
            <span className={classes.title}>{data.title}</span>
            <span className={classes.counter}>{data.isMoney ? `$ ${data.amount}` : `${date_create}`} </span>
            <span className={classes.link}>{data.link}</span>
        </div>
        <div className={classes.right}>
            <div className={`${classes.percentage} ${classes.positive}`}>
                <KeyboardArrowUpIcon />
                {diff}%
            </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widget;