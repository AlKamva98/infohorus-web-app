import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../../components/Header';
import './body.css';


export function Payment(){
 return(
   <>
   <Header/>
<Container className="containterpr">
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Pricing</h1>
    <p className="lead">This is where we tell the users about the great deals we offer</p>
  </div>

  <Row className="row-cols-1 row-cols-md-3 mb-3 text-center">
    <Col>
      <Card className="mb-4 shadow-sm">
      <Card.Header>
        <h4 className="my-0 fw-normal">Free</h4>
      </Card.Header>
      <Card.Body>
        <Card.Title><h1 class="card-title pricing-card-title">R0 <small className="text-muted">/ mo</small></h1></Card.Title>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card class="mb-4 shadow-sm">
      <Card.Header>
        <h4 class="my-0 fw-normal">Pro</h4>
      </Card.Header>
      <Card.Body>
        <Card.Title><h1 className="card-title pricing-card-title">R150 <small className="text-muted">/ mo</small></h1></Card.Title>
        <ul className="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card className="mb-4 shadow-sm">
      <Card.Header>
        <h4 class="my-0 fw-normal">Enterprise</h4>
      </Card.Header>
      <Card.Body>
        <h1 class="pricing-card-title" as={Card.Header}>R229 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>

</>
 )
}