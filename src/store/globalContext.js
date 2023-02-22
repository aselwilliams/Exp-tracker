import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from './authContext';
const baseURL = "http://localhost:4444";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const addIncome = async (income) => {
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
      value={{ addIncome, getAllTransactions, list,showModal, setShowModal, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
