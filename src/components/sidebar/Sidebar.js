import React from 'react';
import classes from './Sidebar.module.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
        <div className={classes.top}>
            <img className={classes['profile-img']} src='https://images.pexels.com/photos/4921290/pexels-photo-4921290.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile picture' />
            <div className="info">
                <h3>Asel Williams</h3>
                <p>aselisa</p>
            </div>
        </div>
        <div className={classes.center}>
            <ul>
                <Link to='/dashboard' className={classes.link}>
                    <DashboardIcon className={classes.icon} />
                    <span>Dashboard</span>
                </Link>
                <Link to='/transactions' className={classes.link}>
                    <ReceiptLongIcon className={classes.icon} />
                    Transactions
                </Link>
                <Link to='/income' className={classes.link}>
                    <MonetizationOnOutlinedIcon className={classes.icon} />
                    Income
                    </Link>
                <Link to='/expenses' className={classes.link}>
                    <ProductionQuantityLimitsIcon className={classes.icon} />
                    Expenses 
                </Link>
                <Link to='/auth' className={classes.link}>
                    <ExitToAppIcon className={classes.icon} />
                    Logout
                </Link>
            </ul>
        </div>
        <div className={classes.bottom} >
            <div className={classes.colorOption} ></div>
            <div className={classes.colorOption} ></div>
            <div className={classes.colorOption} ></div>
        </div>
    </div>
  )
}

export default Sidebar