import React, {useContext} from 'react';
import classes from './Sidebar.module.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {Link} from 'react-router-dom';
import AuthContext from '../../store/authContext';

const Sidebar = () => {
    const { logout} = useContext(AuthContext)
    // console.log(firstName, 'firstName')
    let username=localStorage.getItem('username')
    let firstName=localStorage.getItem('firstName')
    let lastName=localStorage.getItem('lastName')
    let image=localStorage.getItem('image')
    // src='https://images.pexels.com/photos/4921290/pexels-photo-4921290.jpeg?auto=compress&cs=tinysrgb&w=600'
  return (
    <div className={classes.sidebar}>
        <div className={classes.top}>
            <img className={classes['profile-img']} src={image} alt='profile picture' />
            <div className="info">
                <h3>{firstName} {lastName}</h3>
                <p>{username}</p>
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
                    Income/Expenses
                    </Link>
                <Link to='/calendar' className={classes.link}>
                    <CalendarMonthOutlinedIcon className={classes.icon} />
                    Calendar 
                </Link>
                <Link to='/login' className={classes.link} onClick={logout}>
                    <ExitToAppIcon className={classes.icon} />
                    Logout
                </Link>
            </ul>
        </div>
        {/* <div className={classes.bottom} >
            <div className={classes.colorOption} ></div>
            <div className={classes.colorOption} ></div>
            <div className={classes.colorOption} ></div>
        </div> */}
    </div>
  )
}

export default Sidebar