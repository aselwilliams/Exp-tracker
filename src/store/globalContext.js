import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from './authContext';
import { toast } from "react-toastify";
const baseURL = "http://localhost:4444";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listCopy = list.map((el) => ({ ...el }));
  
    const allIncome = listCopy.filter((item) => item.type === "income");
    setIncomeList(allIncome);
    const allExpenses = listCopy.filter((item) => item.type === "expense");
    setExpenseList(allExpenses);
  }, [list]);

  const userId = localStorage.getItem("userId");
  const {token} = useContext(AuthContext)

  const getAllTransactions = () => {
    axios
      .get(`${baseURL}/transactions/${userId}`)
      .then((res) => {
        setList(res.data);
        toast.success('All transactions are loaded', {
          position: 'bottom-left'
      });
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const addTransaction =(income) => {
    const body = { ...income, userId };
    axios
      .post(`${baseURL}/transactions`, body)
      .then((res)=> {
        toast.success('New transaction is added', {
            position: 'bottom-left'
        });
      })
 
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
        toast.error('Transaction is removed', {
            position: 'bottom-left'
        });
    }).catch((err)=> {
        console.log(err)
      
    })
  }

  return (
    <GlobalContext.Provider
      value={{ addTransaction, getAllTransactions, list, showModal, setShowModal, deleteTransaction, incomeList, expenseList, darkMode, setDarkMode, open, setOpen}}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
