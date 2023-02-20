import React from 'react';
import classes from './DataTable.module.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {field:'title', headerName: 'Title', width:150},
  {field: 'amount', headerName: 'Amount', width:90},
  {field: 'category', headerName: 'Category', width:150},
    {field: 'description', headerName: 'Description', width:200},
    {field: 'type', headerName: "Trans. type", width:100,
    renderCell:(params)=> {
        return(
            <div className={`classes.${params.row.type}`}>
                {params.row.type}
            </div>
        )
    }
}

//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
    // renderCell: (params) => {
    //     return (
    //         <>
    //         <span>{params.row.lastName}</span>&nbsp;
    //         <p>{params.row.age}</p>
    //         </>
    //     )
    // },
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];
const actionColumn = [
    {field:'action', headerName: 'Action', width:200,
        renderCell: ()=> {
            return (
                <div className={classes.cellAction}>
                    <button className={classes.viewBtn}>
                        View
                    </button>
                    <button className={classes.deleteBtn}>
                        Delete
                    </button>
                </div>
            )
        }
}
]
const rows = [
    {id:1, title: 'Rent', amount: 2200, createdAt: 'Mon 12-Feb-2022', category: 'Mortgage/Rent', description: 'Apt and garage rent', type: 'Credit'},
    {id:2, title: 'Education', amount: 200, createdAt: 'Mon 12-Dec-2022', category: 'Education', description: 'Certificate fee', type: 'Credit'},
    {id:3, title: 'Paycheck', amount: 4200, createdAt: 'Sun 1-Jan-2023', category: 'Salary', description: 'Salary', type: 'Debit'},
    {id:4, title: 'Groceries', amount: 500, createdAt: 'Sat 28-Jan-2023', category: 'Groceries', description: 'Kids snacks, dairy, meat, poultry', type: 'Credit'},

];

const DataTable = () => {
  return (
    <div className={classes.datatable}>
      <DataGrid
        sx={{backgroundColor:'white'}}
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable