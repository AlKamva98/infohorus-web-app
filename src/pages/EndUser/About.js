import React from 'react';
import { Container, Col,Row, Image } from 'react-bootstrap';
import {Header} from '../../components/index/Header';
import Footer from '../../components/index/Footer';
import "./body.css"


export function About(){
 return(<>
   <Header/>
  <section className="px-2 py-4 bg-white md:px-0">
   <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
   <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Our Mission</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">We reduce the vulnerability that critical infrastructure faces in cyberspace by implementing combined technical and non-technical interventions that neutralize advanced threats, thereby contributing to the improvement of security for all.</p>
                 <h5 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">Our Vision</h5>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">We are developing as a reputable cyberdefense technology lab that deploys advanced tecnology to mitigate and manage the risk of hostile attacks from bad actors.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                </div>
              </div>
            </div>
    <div className="w-full md:w-1/2 ">
    <Image className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" alt="about us image" src="../../images/jumbobg.png" width="450" height="450"/>
   </div>
  </div>
  </div>
  </section>
  <Container>
  <Row>
   <Col className="w-full md:w-1/2 ">
    <Image className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" alt="about us image" src="../../images/jumbobg.png" width="450" height="450"/>
   </Col>
   <Col className="w-full md:w-1/2 px-3">
    <h5 className="display-4 text-center">Goals</h5>
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
    <Image className="mx-auto" alt="about us image" src="../../images/aboutimg.png" width="450" height="450"/>
   </Col>
   
  </Row>

  </Container>
  <Footer/>
  </>
 );
}