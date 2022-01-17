import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Recommendations(props) {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const { assess, client, userId } = props.location;
  const tasks = [];
  
console.log("This the assessor's data", assess)
console.log("This the client's data", client)
console.log("This the client's id", userId)


// function addRec(id){
//  let assForm = assess.assessForm[id];
//  toggle();
 
// }

for (const key in assess.assessForm) {
  for(let i in client){

    if (assess.assessForm[key].qName === client[i].qname  ) {
      assess.assessForm[key].client=(client[i]);
  console.log("this is the new array:", assess.assessForm[key])
}
}
}
 return (
  <div>
    <h4 className="text-xl fw-bold">This is the Recommendations screen</h4>
    {assess && assess.assessForm.map((val, index)=>{
      return(<>
            <div key={index} className="flex flex-col mb-4">
            <p className="text-xl font-semibold text-gray-900">Question number: {val.client.qname}</p>
            <p className="text-xl font-semibold text-gray-900">Question: {val.client.question}</p>
            <span className="text-xl font-semibold text-gray-900">Client Answer: {val.client.answer}</span>
            <p className="text-xl font-semibold text-gray-900">Assesor Answer: {val.assessAns}</p>
            <p className="text-xl font-semibold text-gray- 900">Assesor Comment: {val.assessComment}</p>
            </div>
        
    </>
    )
  })
}
<div className="relative mb-4"><Link to={{pathname: "/dash/assignRec" ,tasks: tasks, userId: userId, assess: assess}}> <Button className="btn"  >Add recommendation</Button></Link></div>
 <div className="relative mb-4"><Link to="/dash/theme/colors"><Button className="btn"  >View user recommendations</Button></Link></div>
  </div>
 )
}
export default Recommendations;   