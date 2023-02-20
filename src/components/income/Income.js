import React from 'react';
import classes from './Income.module.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { useGlobalContext } from '../../store/globalContext';
import Form from '../form/Form';

const Income = () => {
  const {addIncome} = useGlobalContext();

  return (
    <div className={classes.income}>
      <Sidebar />
      <div className={classes.incomeWrapper}>
        <Navbar />
        <h1>Income</h1>
        <div className={classes.content}>
          <div className={classes.formWrapper}>
            <Form />
          </div>
          <div className={classes.incomeList}>
              income list
          </div>
        </div>
      </div>
    </div>
  )
}

export default Income