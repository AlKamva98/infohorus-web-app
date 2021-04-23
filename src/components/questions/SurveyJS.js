import React, {useState} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {Prompt} from 'react-router-dom'
import {SurveyJSON,surveyCss} from './survey.js'
import {create_UUID} from '../../utils/utils.js'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import * as Survey from 'survey-react';


export function SurveyJS(props) {
  const {
    buttonLabel,
    className
  } = props;
  /**===========================================================================================
   *                                Global Variables
   * =========================================================================================== 
   */
  Survey.Survey.cssType = "bootstrap";
  var myCss = surveyCss;
  var addAns = mutations.createAnswer;
  var addQuestionnaire = mutations.createQuestionnaire;
  const [questionnaireState, setQuestionnaireState] = useState(false)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  Survey.StylesManager.applyTheme("modern");
  let survey = new Survey.Model(SurveyJSON);
  const questionaireId = survey.surveyId;
  const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true)
  var currentQNaireId = qnaireUUID;
  
  
  /**===============================================================================
   *                              Custom Functions 
   * ===============================================================================
   */
  
  function handleQuestionaireState(data){
    if(!(data.qmain1 === "" || data.qmain2 === ""|| data.qmain3 === ""|| data.qmain4 === ""|| data.qmain5 === ""|| data.qmain6 === ""|| data.qmain7 === ""|| data.qmain8 === ""|| data.qmain9 === ""|| data.qmain10 === ""|| data.qmain11 === ""|| data.qmain12 === ""|| data.qmain13 === ""|| data.qmain14 === ""|| data.qmain15 === ""|| data.qmain16 === ""|| data.qmain17 === "")){
      setQuestionnaireState(true);
    }
  }
  
  
  survey.sendResultOnPageNext = true;
  function saveSurveyData(result, uuid){
    var ans = result.data;
    var data = ans;
    data.pageNo = result.currentPageNo;
    data.uuid = uuid;
    console.log(data.uuid);
    window.localStorage.setItem(questionaireId, JSON.stringify(data))
  }
  async function getQuestions(){
    try{ 
      var qArr =await API.graphql({query: queries.listQuestions});
      return qArr;  
    }catch(err){
      console.log('Err :>> ', err);
    }
  }
  async function getQuestionnaire(){
    try{ 
      var qn =await API.graphql({query: queries.getQuestionnaire, variables: {id:currentQNaireId}});
      return qn;  
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
  /**================================================================================================
  * End of Custom Functions
  * ================================================================================================
  *  */ 
 /**================================================================================================
  * Survey Functions
  * ================================================================================================
  */
  survey.onPartialSend.add(function (result){
    saveSurveyData(result, qnaireUUID)
})
survey.onUploadFiles.add(async function(){

});
survey.onComplete.add(async function (result) {
  
  var answers = JSON.stringify(result.data, null, 3) 
  try{
   const user = await Auth.currentAuthenticatedUser();
   var userEmail = user.attributes.email
   handleQuestionaireState(answers);
   console.log("Sending to the api...")
   
   
   const userData = getUserByEmail();
   const questions = getQuestions();
   
   console.log(userData)
   console.log(questions)
   console.log(questionnaireState)
   //if questionnaire is not in the database, create a new questionnaire
     await API.graphql(graphqlOperation(
       addQuestionnaire, {
         input: {
           id: currentQNaireId,
           questionaireCompleted: questionnaireState,
           //userQuestionnaire: userData,
           //questions: questions,
           
          }
        }
        ));
        
        await API.graphql(graphqlOperation(
          addAns, {
            input: { 
              answer: answers,
            }
          }
          ))
          
console.log("Answer sent to the api!");
 }catch(err){
console.log("This is the Error:",err);

 }  

    });
/**================================================================================================
  * End of Survey Functions
  * ================================================================================================
  */

 var prevData = window.localStorage.getItem(questionaireId)||null;
 if(prevData){
   var data = JSON.parse(prevData)
   survey.data = data;
  //  
  currentQNaireId = data.uuid;
   if(data.pageNo){
   survey.currentPageNo = data.pageNo;
 }
 console.log("ID set: ",qnaireUUID);
 console.log("Current ID:",currentQNaireId);
 
 }

 if(questionnaireState){
   setShouldBlockNavigation(false)
 }

    return(<>
    <Prompt 
    when={shouldBlockNavigation}
    message="Are you sure you want to leave?" />
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
            <textarea className="form-control" id="message-text">Text Here </textarea>
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