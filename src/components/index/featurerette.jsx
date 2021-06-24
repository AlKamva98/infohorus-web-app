import React from "react";
import { Row, Col} from 'react-bootstrap';
import './index.css'

export function Featurerette (){
 return(
  <div className= " featurette bg-primary mx-0" >
  <Row>
    <Col className="order-md-2 col-md-8 mt-5 pt-4 my-auto text-white ">
      
      <h2 className="featurette-heading text-center mb-5">Why choose us?<span className="text-muted"></span></h2>
      <p className="lead px-5">Faced with the seriousness of growing co-ordinated and well-financed cyber extortion threats, conventional cybersecurity systems are not sufficient. Infohorus presents a combination of specific systems and services to change the landscape.</p>
    </Col>
    
    <Col className="order-md-1 col-md-4 d-flex justify-content-center text-center px-0 ">
      
    </Col>
  </Row>
  </div>
 )
}