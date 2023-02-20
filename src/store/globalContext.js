import React, {useState, useContext} from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:4444';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [incomeList, setIncomeList] = useState([])
    const [expenseList, setExpenseList] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async(income)=> {
        const res = await axios.post(`${baseURL}/add-income`, income)
        .catch((err)=> {
            setError(err.res.data.message)
        })
    }

    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}