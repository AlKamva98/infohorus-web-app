import React from 'react'
import Calendar from 'react-awesome-calendar'
function CalendarEvents(props) {
    const {events} = props;
    return (
  <div>
   <Calendar 
   events={events}
   />
  </div>
 )
}
export default CalendarEvents;