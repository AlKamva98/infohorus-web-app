import React, {useEffect, useState, useRef} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {Prompt} from 'react-router-dom'
import {SurveyJSON,surveyCss} from './survey.js'
import {create_UUID} from '../../utils/utils.js'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import * as Survey from 'survey-react';
import configData from '../../config/config.json';

// Load the AWS SDK for Node.js
//var AWS = require('aws-sdk');
// Set the region

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
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [isDisabled,setIsDisabled] = useState(false);
  var currentQNaireId = qnaireUUID;
  const emailContainer = useRef(null);

  useEffect(()=>{
        checkUser();
    },[])

    async function checkUser(){
    setLoginUser(await Auth.currentAuthenticatedUser());
  }

    /**===============================================================================
   *                              Custom Functions 
   * ===============================================================================
   */
  
  function handleQuestionaireState(data){
    if(!(data.qmain1 === "" || data.qmain2 === ""|| data.qmain3 === ""|| data.qmain4 === ""|| data.qmain5 === ""|| data.qmain6 === ""|| data.qmain7 === ""|| data.qmain8 === ""|| data.qmain9 === ""|| data.qmain10 === ""|| data.qmain11 === ""|| data.qmain12 === ""|| data.qmain13 === ""|| data.qmain14 === ""|| data.qmain15 === ""|| data.qmain16 === ""|| data.qmain17 === "")){
      setQuestionnaireState(true);
    }
  }


    function setName(event){
        setRecipientName(event.target.value);
    }

    function setEmail(event){
        setRecipientEmail(event.target.value);
    }

    //remove unwanted elements in the email body(ie progress-bar and footer)
    function removeElement(doc,classname){
        const newDoc = doc;
          newDoc.querySelectorAll("."+classname).forEach(el => el.remove())
        return newDoc;
    }

  function sendEmail(){
      setIsDisabled(true);
      const doc = (new DOMParser).parseFromString(emailContainer.current.innerHTML, 'text/html');
      const emailBodyWithremovedProgressText = removeElement(doc,'sv-progress__text');
      const emailBodyWithFooterRemoved = removeElement(emailBodyWithremovedProgressText,'sv-footer');

      const AWS = require("aws-sdk");
      console.log('CONFIGS:: ', configData );

      const cred = new AWS.Credentials({
          accessKeyId: configData.REACT_APP_ACCESS_KEY_ID, secretAccessKey: configData.REACT_APP_SECRET_ACCESS_KEY, sessionToken: null
      });

      AWS.config.update({
          credentials: cred,
          region: 'eu-west-1',
          endpoint: 'email.eu-west-1.amazonaws.com'
      });

      // Create sendEmail params
      var params = {
          Destination: {
              ToAddresses: [
                  recipientEmail,
                  /* more items */
              ]
          },
          Message: { /* required */
              Body: { /* required */
                  Html: {
                      Charset: "UTF-8",
                      Data: `<h3>Hi ${recipientName}!</h3><br/>\n` +
                          `<p>We are currently conducting an enterprise-wide cybersecurity risk assessment and need your input on the following:</p><br/>\n` +
                          `<p>Can you please assist me with the following question:</p><br/>\n` +
                          `<p>${emailBodyWithFooterRemoved.documentElement.innerHTML}</p><br/>\n` +
                          `<p>Kind Regards,</p>\n`
                  }
              },
              Subject: {
                  Charset: 'UTF-8',
                  Data: 'Questionnaire Help'
              }
          },
          Source: loginUser.attributes.email, /* required */
          ReplyToAddresses: [
              loginUser.attributes.email,
              /* more items */
          ],
      };

      const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
      sendPromise.then(
          function(data) {
              toggle();
          }).catch(
          function(err) {
              console.error(err, err.stack);
          });

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
});

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
    <div ref={emailContainer}><Survey.Survey model={survey} css={myCss} /></div>
<Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><label className="modal-title" id="exampleModalLabel">New message</label></ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
            <label id="recipient-name" className="col-form-label">Recipient Name:</label>
            <input type="text" className="form-control" id="recipient-name" value={recipientName} onChange={setName}/>
          </FormGroup>
          <FormGroup>
            <label id="recipient-email" className="col-form-label">Recipient Email:</label>
              <input type="text" className="form-control" id="recipient-email"  value={recipientEmail} onChange={setEmail}/>
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button className="btn btn-outline-secondary" onClick={toggle} >Close</Button>
        <Button className="btn btn-success" disabled={isDisabled} onClick={sendEmail}>Send message</Button>
        </ModalFooter>
      </Modal>
      <hr className="bg-secondary" />
        <span className="fw-bold fs-2 m-4">Need to consult a colleague on this answer? <p className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}> Send an internal message</p> directly to them for a quick response.</span>
</>
);

}