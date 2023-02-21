import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Form.module.css";
import { useGlobalContext } from "../../store/globalContext";

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [inputVal, setInputVal] = useState({
    title: "",
    amount: 0,
    createdAt: "",
    category: "",
    description: "",
    type: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
  };

  const { title, amount, createdAt, category, description, type } = inputVal;
  const handleSubmit = (e) => {
    e.preventDefault();
    let body={
        title, amount, createdAt, category, description, type
    }
    addIncome(body);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
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
          id="createdAt"
          placeholderText="Date"
          selected={inputVal.createdAt}
          dateFormat="MM/dd/yyyy"
          onChange={(createdAt) => {
            setInputVal({ ...inputVal, createdAt: createdAt });
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
