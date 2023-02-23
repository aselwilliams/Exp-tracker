import React, { useEffect, useState } from "react";
import classes from "./Income.module.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useGlobalContext } from "../../store/globalContext";
import Form from "../form/Form";
import DataTable from "../dataTable/DataTable";
import { columns } from "../transactions/Transactions";
import AddIcon from '@mui/icons-material/Add';

const Income = () => {
  const { list, showModal, setShowModal, incomeList, expenseList} = useGlobalContext();

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
  ];

  return (
    <div className={classes.income}>
      <Sidebar />
      <div className={classes.incomeWrapper}>
        <Navbar />
        <h1>Income / Expense</h1>
        <div className={classes.content}>
          <button className={classes.addBtn} onClick={()=>setShowModal(!showModal)}>
            < AddIcon /> Add Transaction
          </button>
          <div className={classes.formWrapper}>
            <Form />
          </div>
        </div>
        <section className={classes.lists}>
          <div className={classes.incomeList}>
            <h1>Income List</h1>
            <DataTable columns={columns} rows={incomeList} />
          </div>
          <div className={classes.expenseList}>
            <h1>Expense List</h1>
            <DataTable columns={columns} rows={expenseList} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Income;
