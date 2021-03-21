import React from 'react';
import { Container, Col,Row, Image } from 'react-bootstrap';
import Header from '../../components/Header';


export function About(){
 return(<>
   <Header/>
  <Container>
   <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Our Mission</h1>
    <p className="lead">This is where we tell the users about our mission and then</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit laudantium qui dignissimos porro id! Autem esse veniam quis.</p>
  </div>
  <Row>
   <Col className="col-md-6 ">
    <Image className="mx-auto" alt="about us image" src="../../images/vector.png" width="450" height="450"/>
   </Col>
   <Col className="col-md-6 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h4 className="display-4">Our Story</h4>
    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit laudantium qui dignissimos porro id! Autem esse veniam quis. Eius excepturi facilis pariatur molestiae labore officia asperiores, sit fuga perspiciatis.</p>
   </Col>
  </Row>

  <Row>
   <Col className="col-md-8 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h4 className="display-4">How it works</h4>
    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit laudantium qui dignissimos porro id! Autem esse veniam quis. Eius excepturi facilis pariatur molestiae labore officia asperiores, sit fuga perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit laudantium qui dignissimos porro id! Autem esse veniam quis. Eius excepturi facilis pariatur molestiae labore officia asperiores, sit fuga perspiciatis.</p>
   </Col>
   <Col className="col-md-4 ">
    <Image className="mx-auto" alt="about us image" src="../../images/vector.png" width="450" height="450"/>
   </Col>
   
  </Row>

  </Container>
  </>
 );
}