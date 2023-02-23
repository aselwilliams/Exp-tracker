import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Form.module.css";
import { useGlobalContext } from "../../store/globalContext";

const Form = () => {
  const { addTransaction, showModal } = useGlobalContext();
  const [inputVal, setInputVal] = useState({
    title: "",
    amount: 0,
    t_date: "",
    category: "",
    description: "",
    type: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
  };

  const { title, amount, t_date, category, description, type } = inputVal;
  const handleSubmit = (e) => {
    e.preventDefault();
    let body={
        title, amount, t_date, category, description, type
    }
    addTransaction(body);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.formContainer} style={{display: showModal ? 'block' : 'none'}}>
      <div className={classes.inputControl}>
        <input
          type="text"
          value={inputVal.title}
          name='title'
          id='title'
          placeholder="Paycheck"
          onChange={handleInput}
        />
      </div>
      <div className={classes.inputControl}>
        <input
          type="number"
          value={inputVal.amount}
          name="amount"
          id='amount'
          placeholder="Amount"
          onChange={handleInput}
        />
      </div>
      <div className={classes.inputControl}>
        <DatePicker
          id="t_date"
          placeholderText="Date"
          selected={inputVal.t_date}
          dateFormat="yyyy-MM-dd"
          onChange={(t_date) => {
            setInputVal({ ...inputVal, t_date: t_date });
          }}
        />
      </div>
      <div className={`${classes.inputControl} ${classes.select}`}>
        <select
          required
          value={inputVal.category}
          name="category"
          id="category"
          onChange={handleInput}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="freelancing">Freelancing</option>
          <option value="education">Education</option>
          <option value="healthcare">Healthcare</option>
          <option value="mortgage">Mortgage/Rent</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={classes.inputControl}>
        <textarea
          type="text"
          value={inputVal.description}
          name="description"
          id='description'
          placeholder="Description"
          onChange={handleInput}
          cols='30'
          rows='5'
        ></textarea>
      </div>
      <div className={classes.inputControl}>
        <select
          required
          value={inputVal.type}
          name="type"
          id="type"
          onChange={handleInput}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="btnWrapper">
      <button className={classes.btn}>Add Transaction</button>
      </div>
    </form>
  );
};

export default Form;
