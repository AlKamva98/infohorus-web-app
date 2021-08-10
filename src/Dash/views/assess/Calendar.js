import React from 'react'
import Calendar from 'react-awesome-calendar'
const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-08-07T18:00:00+00:00',
    to: '2021-08-14T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-08-03T13:00:00+00:00',
    to: '2021-08-11T14:00:00+00:00',
    title: 'Employee training'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-08-10T13:00:00+00:00',
    to: '2021-08-10T20:00:00+00:00',
    title: 'This is also another event'
}];
function CalendarEvents() {
 return (
  <div>
   <Calendar 
   events={events}
   />
  </div>
 )
}
export default CalendarEvents;