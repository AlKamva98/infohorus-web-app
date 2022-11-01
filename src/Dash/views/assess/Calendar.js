import React from 'react'
import Calendar from 'react-awesome-calendar'
function CalendarEvents(props) {
    const {events} = props;
    console.log("These are events", events)
    return (
  <div>
   <Calendar 
   events={events}
   />
  </div>
 )
}
export default CalendarEvents;