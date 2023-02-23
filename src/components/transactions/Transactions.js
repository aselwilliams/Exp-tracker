import React, {useEffect} from 'react';
import classes from './Transactions.module.css';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import DataTable from '../dataTable/DataTable';
import { useGlobalContext } from '../../store/globalContext';
import Header from '../Header';

const Transactions = () => {
  const { getAllTransactions, list } = useGlobalContext();
  useEffect(()=> {
   getAllTransactions()
  },[])
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "amount", headerName: "Amount", width: 90 },
  {field:"t_date", headerName: "Date", width:180},
  { field: "category", headerName: "Category", width: 150 },
  { field: "description", headerName: "Description", width: 200 },
  {
    field: "type",
    headerName: "Trans. type",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`classes.${params.row.type}`}>{params.row.type}</div>
      );
    },
  },
]

  return (
    <div className={classes.transactions}>
      <Sidebar />
      <div className={classes.listWrapper}>
        <Navbar />
        <Header title={'All Transactions'} />
        <DataTable rows={list} columns={columns}/>
      </div>
    </div>
  )
}

export default Transactions