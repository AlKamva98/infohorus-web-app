import React, {useState} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {SurveyJSON} from './survey.js'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
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
  var addQuestionnaire = mutations.createQuestionnaire;
  
  var qnaireComplete = false;
  Survey
    .StylesManager
    .applyTheme("modern");
let survey = new Survey.Model(SurveyJSON);


survey.sendResultOnPageNext = true;
var questionaireId = survey.surveyId;
function saveSurveyData(result){
  var data = result.data;
  data.pageNo = result.currentPageNo;
  window.localStorage.setItem(questionaireId, JSON.stringify(data))
}

survey.onPartialSend.add(function (result){
saveSurveyData(result)
})
survey.onUploadFiles.add(async function(){

});
survey.onComplete.add(async function (result) {
 console.log("Answers are: "+JSON.stringify(result.data, null, 3))  ;
 var answers = JSON.stringify(result.data, null, 3) 
 try{
   const user = await Auth.currentAuthenticatedUser();
   var userEmail = user.attributes.email
   qnaireComplete= true;
 console.log("Sending to the api...")
 console.log("Email..."+userEmail)

const userData = getUserByEmail();
const questions = getQuestions();

 console.log(userData)
console.log(questions)

//  await API.graphql(graphqlOperation(
//    addQuestionnaire, {
//      input: {
//        id: questionaireId,
//        questionaireCompleted: qnaireComplete,
//        userQuestionnaire: userData,
//        questions: questions,

//      }
//    }
//  ));

//  await API.graphql(graphqlOperation(
//    addAns, {
//     input: { 
//      answer: answers,
//     }
//   }
//))
    
console.log("Answer sent to the api!");
 }catch(err){
console.log("This is the Error:"+err);
 }  

    });

 var prevData = window.localStorage.getItem(questionaireId)||null;
 if(prevData){
   var data = JSON.parse(prevData)
   survey.data = data;
   if(data.pageNo){
   survey.currentPageNo = data.pageNo;
 }
 
 }
 async function getQuestions(){
  try{ 
  var qArr =await API.graphql({query: queries.listQuestions});
   return qArr;  
  }catch(err){
    console.log('Err :>> ', err);
  }
 }
 async function getUserByEmail(){
   try {
   var us = await API.graphql(graphqlOperation(queries.getUser, {id:"9fe73673-6dcb-497e-be44-26f74cd3adef"}))
   return us
     
   } catch (err) {
     console.log('Err :>> ',err);
   }
 }
  var page = "The page is: ";
    const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    return(<>
<Survey.Survey model={survey} css={myCss} />
<Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">Send Question to Colleague</h5></ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"></input>
          </FormGroup>
          <FormGroup>
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text">Text Here{page} </textarea>
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button className="btn btn-outline-secondary" onClick={toggle} >Close</Button>
        <Button className="btn btn-success">Send message</Button>
        </ModalFooter>
      </Modal>
      <hr className="bg-secondary" />
        <span className="fw-bold fs-2 m-4">Need to consult a colleague on this answer?<p className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}>Send an internal message</p>directly to them for a quick response.</span>
</>
);

}