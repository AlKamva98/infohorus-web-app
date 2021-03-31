import React,{useState} from 'react';
import{Container, Col, ProgressBar} from 'react-bootstrap'
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import QAccordion from './QAccordion'
import {SurveyJS} from './SurveyJS';
import Header from '../Header';
import './questions.css';

 function QuestionsComp(props){
   const {
    buttonLabel,
    className
  } = props;
    const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
 return(<>
 <Header/>
      <Container className =" overflow-hidden p-5  bg-light">
        <Col className="col-md-12">
        <h3>Please fill in the following questionnaire</h3><br/>
        </Col>
        <SurveyJS/>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">New message</h5></ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </FormGroup>
          <FormGroup>
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button className="btn btn-outline-secondary" onClick={toggle} >Close</Button>
        <Button className="btn btn-success">Send message</Button>
        </ModalFooter>
      </Modal>
        <span className="fw-bold fs-2">Need to consult a colleague on this answer?<p className="btn-link d-none d-md-inline-block pointer" onClick={toggle}> Send an internal message</p> directly to them for a quick response.</span>
    
    </Container>
    </>
 )
}

export default QuestionsComp;