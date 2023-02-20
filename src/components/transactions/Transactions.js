import React from 'react';
import classes from './Transactions.module.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import DataTable from '../dataTable/DataTable';

const Transactions = () => {
  return (
    <div className={classes.transactions}>
      <Sidebar />
      <div className={classes.listWrapper}>
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default Transactions