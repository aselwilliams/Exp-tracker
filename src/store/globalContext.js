import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const baseURL = "http://localhost:4444";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getAllTransactions();
  }, []);

  const getAllTransactions = () => {
    axios
      .get(`${baseURL}/get-transactions/${userId}`)
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        setError(err.res.data.message);
      });
  };

  const addIncome = async (income) => {
    const body = { ...income, userId };
    const res = await axios
      .post(`${baseURL}/add-transaction`, body)
      .catch((err) => {
        setError(err.res.data);
      });
  };

  return (
    <GlobalContext.Provider
      value={{ addIncome, getAllTransactions, list,showModal, setShowModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
