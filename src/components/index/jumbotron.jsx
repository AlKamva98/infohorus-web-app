import Auth from "@aws-amplify/auth";
import React, { useEffect, useState } from "react";
import {Button, Image,Container, Card, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './index.css'

export function Jumbotron(props){
  const {jumboType, head, body, btn1Link,btn1Text ,btn2Link,btn2Text} = props;
const [signedIn, setSignedIn] = useState(false);

useEffect(()=>{
    checkUserSignedIn();
    },[])

async function checkUserSignedIn(){
 const user = await Auth.currentAuthenticatedUser();
  if(user !== undefined){
    setSignedIn(true);
  }
}
 return(
<Container className="jumbotron overflow-hidden d-flex justify-content-center text-center mb-5 mt-4 " >
 <Row>
  <Col className=" py-5 px-5 mx-auto my-auto order-md-1 mb-3 shadow-sm bgtxt">
   <h1 className="display-4 fw-normal d-md-block text-center text-white">{head}</h1>
    <div className="col-md-12 ">
      <p className="lead fw-normal text-white text-center ">{body}</p>
      
      <div className="d-flex justify-content-between" >
      <Link to={btn1Link}><Button className="mx-4 shadow-sm">{btn1Text}</Button></Link>
      { jumboType==="two-btns" ? <Link to={btn2Link}><Button className="mx-4 shadow-sm">{btn2Text}</Button></Link> : null}      
      </div>

</div>
  </Col>
  <Col className="mx-auto order-md-2 px-0 ">
  <Image className="px-1 img-fluid w-100 imgjmb" src="./images/featurette.png" />
  </Col>
 </Row>
</Container>) 
}