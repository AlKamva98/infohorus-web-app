import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './index.css'

export function Featurerette (){
 return(
  <Container className= "cont featurette bg-light" height="1000">
  <Row >
    <Col className="order-md-2 mt-5 pt-4">
      <h2 className="featurette-heading">Why choose us?<span className="text-muted"></span></h2>
      <p className="lead">Faced with the seriousness of growing co-ordinated and well-financed cyber extortion threats, conventional cybersecurity systems are not sufficient. Infohorus presents a combination of specific systems and services to change the landscape.</p>
    </Col>
    <Col className="order-md-1">
      <img src="./images/featurette.png"  width="500" height="300"   focusable="false">
    </img>
  </Col>
  </Row>
  </Container>

 )
}