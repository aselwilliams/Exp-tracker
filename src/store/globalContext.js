import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from './authContext';
const baseURL = "http://localhost:4444";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const listCopy = list.map((el) => ({ ...el }));
  
    const allIncome = listCopy.filter((item) => item.type === "income");
    setIncomeList(allIncome);
    const allExpenses = listCopy.filter((item) => item.type === "expense");
    setExpenseList(allExpenses);
  }, [list]);

  const userId = localStorage.getItem("userId");
  const {token} = useContext(AuthContext)

  useEffect(() => {
    getAllTransactions();
  }, []);

  const getAllTransactions = () => {
    axios
      .get(`${baseURL}/transactions/${userId}`)
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        setError(err.res.data.message);
      });
  };

  const addTransaction = async (income) => {
    const body = { ...income, userId };
    const res = await axios
      .post(`${baseURL}/transactions`, body)
      .catch((err) => {
        setError(err.res.data);
      });
  };
  const deleteTransaction = (id) => {
    console.log(id,'id')
    axios.delete(`http://localhost:4444/transactions/${id}`,{
        header:{
            authorization: token
        }
    }).then(()=> {
        getAllTransactions()
    }).catch((err)=> {
        console.log(err)
      
    })
  }

  return (
    <GlobalContext.Provider
      value={{ addTransaction, getAllTransactions, list, showModal, setShowModal, deleteTransaction, incomeList, expenseList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
