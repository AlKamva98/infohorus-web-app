import React from 'react'
import {RecPopUp} from './Modal.js'
import {Button} from 'react-bootstrap'
import {API} from 'aws-amplify-react'
import * as mutations from '../../graphql/mutations'

function Recommendations(props) {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const { assess, client } = props.location;
  const recommendations = [];
  
console.log("This the assessor's data", assess)
console.log("This the client's data", client)
let newArr=[];
async function addRecommendations(){
  
}
function addRec(id){
 let assForm = assess.assessForm[id];
 toggle();
 
}

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
    {assess.assessForm.map((val, index)=>{
      return(<>
            <div key={index} className="flex flex-col mb-4">
            <p className="text-xl font-semibold text-gray-900">Question number: {val.client.qname}</p>
            <p className="text-xl font-semibold text-gray-900">Question: {val.client.question}</p>
            <span className="text-xl font-semibold text-gray-900">Client Answer: {val.client.answer}</span>
            <p className="text-xl font-semibold text-gray-900">Assesor Answer: {val.assessAns}</p>
            <p className="text-xl font-semibold text-gray-900">Assesor Comment: {val.assessComment}</p>
            </div>
            <div className="relative mb-4"><Button onClick={addRec} >Add recommendation</Button></div>
            <p>{}</p>
        
    </>
    )
    })
      }
 <RecPopUp
title="Recommendations"
body="Add a new Recommendation" 
btnTxtPositive="Cancel"
btnTxtNegative="Add"
btnNegOnClick={addRecommendations}
popupType="two-btns"
bg=""
toggle={toggle}
isOpen={modal}
/>
  </div>
 )
}
export default Recommendations;   