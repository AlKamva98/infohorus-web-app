import React, {useEffect, useState, useRef} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import {Prompt} from 'react-router-dom'
import {SurveyJSON,surveyCss} from './survey.js'
import {create_UUID} from '../../utils/utils.js'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import * as Survey from 'survey-react';
import { PopUp } from '../Modal.js';
import configData from '../../config/config.json';


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
  const toggle = () => {setModal(!modal);
  handleSurveyState()}
  Survey.StylesManager.applyTheme("modern");
  let survey = new Survey.Model(SurveyJSON);
  const [authus, setAuthus] = useState();
  const questionaireId = survey.surveyId;
  survey.firstPageIsStarted = true;
  const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true)
  const [documentUrl, setDocUrl] = useState(null);
  const [loading, setLoading] = useState(false);
 const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [isDisabled,setIsDisabled] = useState(false);
  var currentQNaireId = qnaireUUID;
  const msg = "You are not authorized to view questions unless you register. Please register to complete questionnaire."
  const emailContainer = useRef(null);

  /**===============================================================================
   *                              Custom Functions
   * ===============================================================================
   */

  useEffect(() => {
    survey.storeDataAsText = false;
    checkUser()
    //indow.localStorage.removeItem(questionaireId)
    handleSurveyState()
  }, [])

  async function checkUser(){
    try{
    const authus = await Auth.currentAuthenticatedUser()
    setAuthus(authus);
    }catch(err){

    }
  }
  function handleQuestionaireState(data){
    if(!(data.qmain1 === "" || data.qmain2 === ""|| data.qmain3 === ""|| data.qmain4 === ""|| data.qmain5 === ""|| data.qmain6 === ""|| data.qmain7 === ""|| data.qmain8 === ""|| data.qmain9 === ""|| data.qmain10 === ""|| data.qmain11 === ""|| data.qmain12 === ""|| data.qmain13 === ""|| data.qmain14 === ""|| data.qmain15 === ""|| data.qmain16 === ""|| data.qmain17 === "")){
      //setQuestionnaireState(true);
    }
  }
  function handleSurveyState(){
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

      console.log('USERS:::: ',authus);
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
          Source: authus.attributes.email, /* required */
          ReplyToAddresses: [
              authus.attributes.email,
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
    var data= result.data;
    data.pageNo = result.currentPageNo;
    data.uuid = uuid;
    var ansperpage= survey.getPlainData();
    console.log(data);
    //console.log(ansperpage);

    window.localStorage.setItem(questionaireId, JSON.stringify(data))
  }
function getAnswerPerPage(data){
  try{
    var ans;
    var pageNo = data.pageNo;
    if (data.qmain1 !==undefined && (data.pageNo === 0)) {
      ans = {qmain1: data.qmain1}
      if(data.followupQ1a || data.followupQ1b || data.followupQ1c){
        ans.followupQ1a = data.followupQ1a;
        ans.followupQ1b = data.followupQ1b;
        ans.followupQ1c = data.followupQ1c;
        ans.page = 1;
      }
      console.log("Qmain 1 answers sent:", ans);
    }else if(data.qmain2 !==undefined && (data.pageNo === 1)){
       ans = {qmain2: data.qmain2}
       if(data.followupQ2a || data.followupQ2b||data.followupQ2c ){
        ans.followupQ2a = data.followupQ2a;
        ans.followupQ2b = data.followupQ2b;
        ans.followupQ2c = data.followupQ2c;

        ans.page = 2;
      }
       console.log("Qmain 2 answers sent:", ans);
    }else if(data.qmain3 !==undefined && (data.pageNo === 2)){
      ans = {qmain3:data.qmain3}
      if(data.followupQ3a || data.followupQ3b ){
        ans.followupQ3a = data.followupQ3a;
        ans.followupQ3b = data.followupQ3b;
        ans.page = 3;
      }
      console.log("Qmain 3 answers sent:", ans);
    }else if(data.qmain4 !==undefined && (data.pageNo == 3)){
      ans = {qmain4: data.qmain4}
      if(data.followupQ4a || data.followupQ4b || data.followupQ4c|| data.followupQ4d){
        ans.followupQ4a = data.followupQ4a;
        ans.followupQ4b = data.followupQ4b;
        ans.followupQ4c = data.followupQ4c;
        ans.followupQ4d = data.followupQ4d;

        ans.page = 4;
      }
       console.log("Qmain 4 answers sent:");
    }else if(data.qmain5 !==undefined && (data.pageNo == 4)){
      ans = {qmain5: data.qmain5}
      if(data.followupQ5a || data.followupQ5b){
        ans.followupQ5a = data.followupQ5a;
        ans.followupQ5b = data.followupQ5b;

        ans.page = 5;
      }
       console.log("Qmain 5 answers sent:");
    }else if(data.qmain6 !==undefined && (data.pageNo == 5)){
      ans = {qmain6: data.qmain6}
      if(data.followupQ6a || data.followupQ6b || data.followupQ6c){
        ans.followupQ6a = data.followupQ6a;
        ans.followupQ6b = data.followupQ6b;
        ans.followupQ6c = data.followupQ6c;

        ans.page = 6;
      }
       console.log("Qmain 6 answers sent:");
    }else if(data.qmain7 !==undefined && (data.pageNo == 6)){
      ans = {qmain7: data.qmain7}
      if(data.followupQ7a || data.followupQ7b || data.followupQ7c|| data.followupQ7d||data.followupQ7e){
        ans.followupQ7a = data.followupQ7a;
        ans.followupQ7b = data.followupQ7b;
        ans.followupQ7c = data.followupQ7c;
        ans.followupQ7d = data.followupQ7d;
        ans.followupQ7e = data.followupQ7e;

        ans.page = 7;
      }
       console.log("Qmain 7 answers sent:");
    }else if(data.qmain8 !==undefined && (data.pageNo == 7)){
      ans = {qmain8: data.qmain8}
      if(data.followupQ8a || data.followupQ8b || data.followupQ8c|| data.followupQ8d||data.followupQ8e||data.followupQ8f||data.followupQ8g||data.followupQ8h||data.followupQ8i){
        ans.followupQ8a = data.followupQ8a;
        ans.followupQ8b = data.followupQ8b;
        ans.followupQ8c = data.followupQ8c;
        ans.followupQ8d = data.followupQ8d;
        ans.followupQ8e = data.followupQ8e;
        ans.followupQ8f = data.followupQ8f;
        ans.followupQ8g = data.followupQ8g;
        ans.followupQ8h = data.followupQ8h;
        ans.followupQ8i = data.followupQ8i;

        ans.page = 8;
      }
       console.log("Qmain 8 answers sent:");
    }else if(data.qmain9 !==undefined && (data.pageNo == 8)){
      ans = {qmain9: data.qmain9}
      if(data.followupQ9a || data.followupQ9b ){
        ans.followupQ9a = data.followupQ9a;
        ans.followupQ9b = data.followupQ9b;

        ans.page = 9;
      }
       console.log("Qmain 9 answers sent:");
    }else if(data.qmain10 !==undefined && (data.pageNo == 9)){
      ans = {qmain10: data.qmain10}
      if(data.followupQ10a || data.followupQ10b ){
        ans.followupQ10a = data.followupQ10a;
        ans.followupQ10b = data.followupQ10b;

        ans.page = 10;
      }
       console.log("Qmain 10 answers sent:");
    }else if(data.qmain11 !==undefined && (data.pageNo == 10)){
      ans = {qmain11: data.qmain11}
      if(data.followupQ11a || data.followupQ11b){
        ans.followupQ11a = data.followupQ11a;
        ans.followupQ11b = data.followupQ11b;

        ans.page = 11;
      }
       console.log("Qmain 11 answers sent:");
    }else if(data.qmain12 !==undefined && (data.pageNo == 11)){
      ans = {qmain12: data.qmain12}
      if(data.followupQ12a || data.followupQ12b || data.followupQ12c){
        ans.followupQ12a = data.followupQ12a;
        ans.followupQ12b = data.followupQ12b;
        ans.followupQ12c = data.followupQ12c;

        ans.page = 12;
      }
       console.log("Qmain 12 answers sent:");
    }else if(data.qmain13 !==undefined && (data.pageNo == 12)){
      ans = {qmain13: data.qmain13}
      if(data.followupQ13a || data.followupQ13b){
        ans.followupQ13a = data.followupQ13a;
        ans.followupQ13b = data.followupQ13b;

        ans.page = 13;
      }
       console.log("Qmain 13 answers sent:");
    }else if(data.qmain14 !==undefined && (data.pageNo == 13)){
      ans = {qmain14: data.qmain14}
      if(data.followupQ14a || data.followupQ14b || data.followupQ14c){
        ans.followupQ14a = data.followupQ14a;
        ans.followupQ14b = data.followupQ14b;
        ans.followupQ14c = data.followupQ14c;

        ans.page = 14;
      }
       console.log("Qmain 14 answers sent:");
    }else if(data.qmain15 !==undefined && (data.pageNo == 14)){
      ans = {qmain14: data.qmain14}
      if(data.followupQ15a || data.followupQ15b || data.followupQ15c){
        ans.followupQ15a = data.followupQ15a;
        ans.followupQ15b = data.followupQ15b;
        ans.followupQ15c = data.followupQ15c;

        ans.page = 15;
      }
       console.log("Qmain 14 answers sent:");
    }else if(data.qmain16 !==undefined && (data.pageNo == 15)){
      ans = {qmain16: data.qmain16}
      if(data.followupQ16a || data.followupQ16b || data.followupQ16c|| data.followupQ16d){
        ans.followupQ16a = data.followupQ16a;
        ans.followupQ16b = data.followupQ16b;
        ans.followupQ16c = data.followupQ16c;
        ans.followupQ16d = data.followupQ16d;

        ans.page = 16;
      }
       console.log("Qmain 16 answers sent:");
    }

    return ans;
  }catch(err){
    console.log("Get Answer per page Error: ",err);
  }
}

function getDocAnswers(data){
  try
{var ans;
var doc;
var qname;
  if(data.followupQ11a!== undefined && (data.pageNo === 9)){
    console.log("Follow up 11 a",data.followupQ11a[0])
  doc = data.followupQ11a[0]
  qname=0
  }else if(data.followupQ8a!== undefined && (data.pageNo === 6)){
    console.log("Follow up 8a",data.followupQ8a[0])
  doc = data.followupQ8a[0]
  qname=1
  console.log("answers recieved")
  }else if(data.followupQ8c!== undefined && (data.pageNo === 7)){
    console.log("Follow up 8c",data.followupQ8c[0])
  doc = data.followupQ8c[0]
  qname=2
  }else if(data.followupQ14c!== undefined && (data.pageNo === 12)){
    console.log("Follow up 14c",data.followupQ14c[0])
  doc = data.followupQ14c[0]
  qname=3
  }else if(data.followupQ15b!== undefined && (data.pageNo === 13)){
    console.log("Follow up 15b",data.followupQ15b[0])
  doc = data.followupQ15b[0]
  qname=4
  }else if(data.followupQ16b!== undefined && (data.pageNo === 14)){
    console.log("Follow up 16b",data.followupQ16b[0])
  doc = data.followupQ16b[0]
  qname=5
  }
  var text ={ docObj : doc , quesname: qname };
ans = text
  console.log("answers stored and returned", doc)
  return ans;
}catch(err){
                console.log("ans return error: ",err);
}
}

async function uploadAnswersPerPage(ans){
  if(ans){
    console.log(ans);
    switch (ans.page) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        var anspq;
        for( anspq in ans ) {
          if(ans[anspq]!== undefined && anspq !== "page"){
          console.log("Answer is: ", ans[anspq]);
        await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: ans[anspq],
                  }
                }
                ))
        }
      }
        break;

      default:
        console.log("Nothing happened!!!");
        break;
    }
    try{

    }catch(err){
      console.log("Answer per page upload Error: ",err);
    }
  }
}
async function uploadDocuments(ans, data){
  if(data.followupQ11a||data.followupQ8a||data.followupQ14c||data.followupQ15b){
var doc = ans.docObj
var qname = ans.quesname


 if (doc){

          try{
            console.log("Uploading document to S3 Bucket...")
              await Storage.put(doc.name, doc.content, {
                  level: 'protected',
                  contentType: doc.type
                });
                //setLoading(true);
                console.log("Document uploaded to S3 Bucket...")

              // Retrieve the uploaded file to display
               console.log("Getting the s3 bucket url...")
               const url = await Storage.get(doc.name, { level: 'protected' })
               //setDocUrl(url);
              switch (qname) {
                case 0:
               data.followupQ11a[0] = url;
               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ11a,
                  }
                }
                ))

                break;
              case 1:
               data.followupQ8a[0] = url;

               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ8a,
                  }
                }
                ))
                break;
                case 2:
               data.followupQ8c[0] = url;

               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ8c,
                  }
                }
                ))
                break;
                case 3:
               data.followupQ14c[0] = url;
               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ14c,
                  }
                }
                ))

                break;
                case 4:
               data.followupQ15b[0] = url;
               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ15b,
                  }
                }
                ))
               console.log("Document url: ",data.followupQ15b[0]);
                break;
                case 5:
               data.followupQ16b[0] = url;
               await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: data.followupQ16a,
                  }
                }
                ))
               console.log("Document url: ",data.followupQ16b[0]);
                break;
                default:
               console.log("Nothing happened");
                  break;
              }
              //setLoading(false);
              } catch (err) {
                console.log("upload error: ",err);
              }


                    }
          }     }


  async function getQuestions(){
    try{
      var qArr =await API.graphql({query: queries.listQuestions});
      return qArr;
    }catch(err){
      console.log('Err :>> ', err);
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
    var doc = getDocAnswers(result.data);
    var ans = getAnswerPerPage(result.data)
    uploadDocuments(doc, result.data)
    uploadAnswersPerPage(ans)
    handleSurveyState()

})

survey.onStarted.add(async function(){

  let email = authus.attributes.email;
  console.log(email)

  const questions = getQuestions();


  console.log(questions)
  try{
    var us = await API.graphql(graphqlOperation(queries.listUsers))
    let userId
    us.data.listUsers.items.map(function (user){
      console.log("The user is: ", user.email)
      console.log("The current user is: ", email)
      if(user.email === email){
        userId = String(user.id);
      }
    })
    console.log(userId)
  const QQ =await API.graphql(graphqlOperation(mutations.createQuestionnaireQuestion, {
  input:{
    questionnaireId: currentQNaireId,
  }
}))
console.log("Questionnaire Question: ",QQ)
var qqId = String(QQ.data.createQuestionnaireQuestion.id);
console.log("Questionnaire Question: ",qqId)

    const qn= await API.graphql(graphqlOperation(
       addQuestionnaire, {
         input: {
           id: currentQNaireId,
           questionaireCompleted: questionnaireState,
           userId: userId,
           questionnaireQuestionId:qqId,

          }
        }
        ));
        console.log("Questionnaire: ",qn)

      }catch(err){
        console.log("On Start Error:", err)
      }
})
  survey.onComplete.add(async function (result) {
  
  var answers = JSON.stringify(result.data, null, 3) 
  try{
   const user = await Auth.currentAuthenticatedUser();
   var userEmail = user.attributes.email
   handleQuestionaireState(answers);
   console.log("Sending to the api...")
   
   
    //     console.log("These are the answer 11a: ", answers.followupQ11a)
    //     await API.graphql(graphqlOperation(
    //       addAns, {
    //         input: {
    //           answer: answers,
    //         }
    //       }
    //       ))
          
console.log("Answer sent to the api!");
 }catch(err){
console.log("This is the Error:",err);

 }  

    });
/**================================================================================================
  * End of Survey Functions
  * ================================================================================================
  */






 if(questionnaireState){
   setShouldBlockNavigation(false)
 }

    return(<>
    {authus !== undefined &&(
    <>
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
)}
{authus === undefined &&
<PopUp isOpen={modal} btnTxtPositive="Retry" btnTxtNegative="Return to Home"
               btnNegativeLink="/"
               popupType="two-btns"
               title="User is not registered"
               body={msg}
               toggle={toggle} className={className}/>
}
</>
);

}

