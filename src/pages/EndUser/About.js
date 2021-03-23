import React from 'react';
import { Container, Col,Row, Image } from 'react-bootstrap';
import Header from '../../components/Header';


export function About(){
 return(<>
   <Header/>
  <Container>
   <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Our Mission</h1>
    <p className="lead">We reduce the vulnerability that critical infrastructure faces in cyberspace by implementing combined technical and non-technical interventions that neutralize advanced threats, thereby contributing to the improvement of security for all.</p>
   
  </div>
  <Row>
   <Col className="col-md-6 ">
    <Image className="mx-auto" alt="about us image" src="../../images/vector1.png" width="450" height="450"/>
   </Col>
   <Col className="col-md-6 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h5 className="display-4">Our Vision</h5>
    <p className="lead">We are developing as a reputable cyberdefense technology lab that deploys advanced tecnology to mitigate and manage the risk of hostile attacks from bad actors.</p>
    <h5 className="display-4">Goals</h5>
    <p className="lead">Create a safe cyberspace for our clients by helping them grow cybersecurity culture that improves their security posture and increases their strategic and competitive advantage.</p>
   </Col>
  </Row>
  <Row>
   <Col className="col-md-8 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
     <h4 className="display-4">What is Infohorus?</h4>
    <p className="lead">Infohorus is a Critical Infrastructure Cybersecurity Management platform that helps organizations enhance their cyber resilience.</p>
    <h4 className="display-4">What does Infohorus do?</h4>
    <p className="lead">We help organizations to prepare for attacks on critical infrastructure to minimize the occurrence of service disruption due to cyberattacks and extortion. Launch your risk assessment project across your organization. Our platform allows you to collaborate with your colleagues across multiple business units in your organization to measure the levels of security and state of security culture. Our online assessment will produce a recommendations report with actionable steps for simple implementation</p>
   </Col>
  </Row>
  <Row>
   <Col className="col-md-8 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h4 className="display-4">How does Infohorus work?</h4>
    <p className="lead">Infohorus launches an online assessment that you can complete based on your organizations' policies and security implementation. You are able to include your relevant colleagues in the assessment at various levels. Once the assessment is completed the system will produce a recommendations report to be adopted by your organization. When the recommendations have been adopted, action steps will be published against the recommendations to facilitate the implementation. Each action is assigned and tracked to completion.</p>
   </Col>
   <Col className="col-md-4 ">
    <Image className="mx-auto" alt="about us image" src="../../images/vector1.png" width="450" height="450"/>
   </Col>
   
  </Row>

  </Container>
  </>
 );
}