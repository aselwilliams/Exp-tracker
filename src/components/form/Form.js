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

  const { title, amount, createdAt, category, description, type } = inputVal;

  const handleInput = (name, e) => {
    setInputVal({ ...inputVal, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputVal);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputControl">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Paycheck"
          onChange={() => handleInput("title")}
        />
      </div>
      <div className="inputControl">
        <input
          type="number"
          value={amount}
          name={"amount"}
          placeholder="Amount"
          onChange={() => handleInput("amount")}
        />
      </div>
      <div className="inputControl">
        <DatePicker
          id="createdAt"
          placeholderText="Date"
          selected={createdAt}
          dateFormat="MM/dd/yyyy"
          onChange={(createdAt) => {
            setInputVal({ ...inputVal, createdAt: createdAt });
          }}
        />
      </div>
      <div className="inputControl select">
        <select
          required
          value={category}
          name={"category"}
          id="category"
          onChange={() => handleInput("category")}
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
      <div className="inputControl">
        <input
          type="text"
          value={description}
          name={"description"}
          placeholder="Description"
          onChange={() => handleInput("description")}
        />
      </div>
      <div className="inputControl">
        <select
          required
          value={type}
          name={"type"}
          id="type"
          onChange={() => handleInput("type")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
      </div>
      <button className={classes.btn}>Add Income</button>
    </form>
  );
};

export default Form;
