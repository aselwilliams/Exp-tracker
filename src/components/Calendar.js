import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import {formatDate} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import Header from "./Header";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ flex: "6" }}>
        <Navbar />
        <Box m="20px" backgroundColor='white' p='20px' borderRadius='20px'>
          <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
          <Box display="flex" justifyContent="space-between" marginTop='1.5rem'>
            {/* Events start */}
            <Box flex="1 1 20%" backgroundColor='var(--dark)' p='15px' borderRadius='4px'>
                <Typography variant='h5' color='white'>Events</Typography>
                <List>
                    {currentEvents.map((event)=> (
                        <ListItem
                            key={event.id}
                            sx={{
                                backgroundColor:'white',
                                margin:'10px 0',
                                borderRadius: '2px'
                            }}>
                                <ListItemText primary={event.title} secondary={<Typography>{formatDate(event.start,
                                {
                                    year:'numeric',
                                    month:'short',
                                    day: 'numeric'
                                })}</Typography>} />
                        </ListItem>
                        ))}
                </List>
            </Box>
            {/* Calendar starts */}
            <Box flex="1 1 100%" ml="15px" >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-02-14",
              },
              {
                id: "5123",
                title: "Parent-teacher conference",
                date: "2023-02-27",
              },
              {
                id: "5893",
                title: "Dentist appointment",
                date: "2023-02-10",
              },
            ]}
          />
        </Box>

          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Calendar;
