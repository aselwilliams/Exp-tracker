import React from 'react';
import classes from './Widget.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import moment from "moment";


const Widget = ({type}) => {
    let date_create =moment().format("MM-DD-YYYY HH:mm:ss")
    let data;
    //temporary
    let amount=100
    let diff=20

    switch (type) {
        case 'income':
            data={
                title:'Total Income',
                isMoney: true,
                link:'See income list',
                icon: <MonetizationOnOutlinedIcon className={classes.icon} style={{color:'green',backgroundColor:'rgba(0,128,0,0.2)'}} />,
            };
            break;
        case 'expenses':
            data={
                title:'Total Expenses',
                isMoney: true,
                link: 'View all expenses',
                icon: <ProductionQuantityLimitsIcon className={classes.icon} style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)'}}/>,
            };
            break;
        case 'balance':
            data={
                title:'Total Balance',
                isMoney: true,
                link: 'See all transactions',
                icon: <BalanceOutlinedIcon className={classes.icon} style={{color:'goldenrod', backgroundColor:'rgba(218,165,32,0.2)'}} />,
            };
            break;
        case 'today':
            data={
                title:'Today',
                isMoney: false,
                // date: new Date().now(),
                icon: <CalendarMonthOutlinedIcon className={classes.icon} style={{color:'purple',backgroundColor:'rgba(128,0,128,0.2)'}} />,
            };
            break;
        default:
            break;
    }
  return (
    <div className={classes.widget}>
        <div className={classes.left}>
            <span className={classes.title}>{data.title}</span>
            <span className={classes.counter}>{data.isMoney ? `$ ${amount}` : `${date_create}`} </span>
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