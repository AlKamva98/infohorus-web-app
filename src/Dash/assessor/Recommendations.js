import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Recommendations(props) {
  // const [modal, setModal] = React.useState(false);
  // const toggle = () => setModal(!modal);
  console.log("Props", props);
  const { assess, client, userId } = props.location.state;
  const tasks = [];
  
console.log("This the assessor's data", assess)
console.log("This the client's data", client)
console.log("This the client's id", userId)

// function addRec(id){
//  let assForm = assess.assessForm[id];
//  toggle();
 
// }

// for (const key in assess.assessForm) {
//   for(let i in client){

//     if (assess.assessForm[key].qName === client[i].qname  ) {
//       assess.assessForm[key].client=(client[i]);
//   console.log("this is the new array:", assess.assessForm[key])
// }
// }
// }
 return (
  <div>
    <h4 className="text-xl fw-bold">This is the Recommendations screen</h4>
    {assess && assess.map((val, index)=>{
      console.log("This is the value from the form", val.Question_Number);
      return(<>{ val.Question_Number ?
        <div key={index} className="flex flex-col mb-4">
            <p className="text-xl font-semibold text-gray-900">Question number: {val.Question_Number}</p>
            <p className="text-xl font-semibold text-gray-900">Question: {val.Question}</p>
            <span className="text-xl font-semibold text-gray-900">Client Answer: {val.Answer}</span>
            <p className="text-xl font-semibold text-gray-900">Assesor Answer: {val.assessAns}</p>
            <p className="text-xl font-semibold text-gray- 900">Assesor Comment: {val.assessComment}</p>
            </div>: null
            }
        
    </>
    )
  })
}
<div className="relative mb-4"><Link to={{pathname: "/dash/assignRec" ,tasks: tasks, client:client, userId: userId, assess: assess}}> <Button className="btn"  >Add recommendation</Button></Link></div>
 <div className="relative mb-4"><Link to="/dash/theme/colors"><Button className="btn"  >View user recommendations</Button></Link></div>
  </div>
 )
}
export default Recommendations;   