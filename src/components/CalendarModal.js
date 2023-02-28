import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useGlobalContext } from '../store/globalContext';
import {useState} from 'react'

export default function FormDialog({handleAddEvent, title,setTitle, handleDateClick}) {
//   const [open, setOpen] = React.useState(false);
const {setOpen, open} = useGlobalContext()
// const [eventList, setEventList]= useState([])

//   const handleAddEvent = () => {
//     setTitle('')
//     setEventList([...eventList, title])
//     setOpen(false);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please enter a new title for your event
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}