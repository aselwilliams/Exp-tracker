import React from "react";
import classes from "./DataTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import {useGlobalContext} from '../../store/globalContext'

const DataTable = ({rows, columns}) => {
    const {deleteTransaction, darkMode} = useGlobalContext()
      
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className={classes.cellAction}>
                {/* <button className={classes.viewBtn}>View</button> */}
                <button className={classes.deleteBtn} onClick={()=>deleteTransaction(params.row.id)}>Delete</button>
              </div>
            );
          },
        },
      ];

const themeClass = darkMode ? classes.dark : classes.light;
  return (
    <div className={classes.datatable}  id={darkMode ? 'dark' : 'light'} >
      <DataGrid
        // className={`${themeClass}`}
        sx={{  height:'700px', color:'grey'}}
        rows={rows}
        columns={columns?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
