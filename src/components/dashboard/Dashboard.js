import React from 'react';
import classes from './Dashboard.module.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';


const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
       <Sidebar />
       <div className={classes.container}>
        <Navbar />
          Container
       </div>
    </div>
  )
}

export default Dashboard