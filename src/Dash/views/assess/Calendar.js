import React,{useEffect} from 'react'
import Calendar from 'react-awesome-calendar'
const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-10-07T18:00:00+00:00',
    to: '2021-10-14T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: 'Wed Oct 25 2021 22:36:29',
    to: 'Wed Nov 01 2021 22:36:29',
    title: 'Employee training'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-10-10T13:00:00+00:00',
    to: '2021-10-10T20:00:00+00:00',
    title: 'This is also another event'
}];

function CalendarEvents(props) {
    var rectks = [];
    
    useEffect(()=>{
    // if(tasks){
    // for(let i in tasks){
    // let item ={
    // id: i,
    // color: tasks[i].color,
    // from: tasks[i].taskStart.toString().replace(" GMT+0200 (South Africa Standard Time)",""),
    // to: tasks[i].taskEnd.toString().replace(" GMT+0200 (South Africa Standard Time)",""),
    // title: tasks[i].taskDesc};
    // rectks.push(item)
    // }}
},[])

    return (
  <div>
   <Calendar 
   events={events}
   />
  </div>
 )
}
export default CalendarEvents;