import React from 'react'
import { Card,Button, Form, Col, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import "./body.css"

export const Recomendations = () => {
 return (
  <div>
   <Header/>
   <div className="main">
   <h4 className="text-center display-4 bdy">Recomendations</h4>
   <p className="mx-5 px-3 fs-2 mb-3 mt-3">Click onx the Recomendations you think would work for your company</p>
    <Form className="col-md-11 border bg-white border-secondary mt-3 pt-3 mx-auto px-3 pb-5 mb-4 rounded">
    <Col>
    <Row>
    <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 1: train employees on how to deal with ransomware</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 btn-outline-primary">Assign and Schedule tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 2: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 btn-outline-primary">Assign and Schedule tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   
     <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 3: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 btn-outline-primary">Assign and Schedule tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">No Thanks</p>
   </Card.Body>
  </Card>
   </Row>
   <Row>

   </Row>
   </Col>
   </Form>
   </div>
   <Sidebar/>

  </div>
 )
}
