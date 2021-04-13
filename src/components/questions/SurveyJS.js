import React, {useState} from 'react';
import ReactDom from 'react-dom';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {SurveyJSON} from './survey.js'
import * as mutations from '../../graphql/mutations'
import * as Survey from 'survey-react';

export function SurveyJS(props) {
 const {
    buttonLabel,
    className
  } = props;

  Survey.Survey.cssType = "bootstrap";

    var myCss = {
      	"navigationButton": "btn btn-green",
       "navigation": {
	 	"complete": "btn sv_complete_btn btn-primary float-right",
	 	"prev": "btn sv_prev_btn btn-outline-secondary",
	 	"next": "btn sv_next_btn btn-primary float-right",
	 	"start": "btn sv_start_btn btn-primary",
	 	"preview": "btn sv_preview_btn btn-primary float-right",
	 	"edit": "btn sv_edit_btn btn-primary "
	 }
    }
  var addAns = mutations.createAnswer;
  Survey
    .StylesManager
    .applyTheme("modern");
let survey = new Survey.Model(SurveyJSON);

survey.onComplete.add(async function (result) {
 console.log("Answers are: "+JSON.stringify(result.data, null, 3))  ;
 var answers = JSON.stringify(result.data, null, 3)
  
 try{
   const user = await Auth.currentCredentials();
 console.log("Sending to the api...")
 var ansInput =result.data;
 await API.graphql(graphqlOperation(
   addAns, {
    input: {
     username:"Stefano", 
     answers: answers,
     documents: "https://www.example.com/doc",
     completed: true,
     questionID: "001",
     reportID:"12345",
    }
  }
));    
console.log("Answer sent to the api!");
 }catch(err){
console.log(err);
 }  

    });
    const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    return(<>
<Survey.Survey model={survey} css={myCss} />
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
      <hr className="bg-secondary" />
        <span className="fw-bold fs-2 m-4">Need to consult a colleague on this answer? <p className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}> Send an internal message</p> directly to them for a quick response.</span>
</>
);

}