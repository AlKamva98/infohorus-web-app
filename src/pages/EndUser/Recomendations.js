import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Header from '../../components/Header'
import "./body.css"

export const Recomendations = () => {
 return (
  <div>
   <Header/>
   <h4 className="text-center display-4 bdy">Recomendations</h4>
   <span>Click on the Recomendations you think would work for your company</span>
    <Form>
     <div className="mx-3 mt-5 mb-3 rec shadow-sm ">
       
    <ul>
     <li><input type="checkbox" name="recSelected"/>Recomendation 1</li>
     <li><input type="checkbox" name="recSelected2"/>Recomendation 2</li>
     <li><input type="checkbox" name="recSelected3"/>Recomendation 3</li>
     <li><input type="checkbox" name="recSelected4"/>Recomendation 4</li>
     <li><input type="checkbox" name="recSelected5"/>Recomendation 5</li>
     <li><input type="checkbox" name="recSelected6"/>Recomendation 6</li>
    </ul>
   </div>
   <Button className="bg-secondary ">Reject</Button>
   <Button className="">Accept</Button>
   </Form>
  </div>
 )
}
