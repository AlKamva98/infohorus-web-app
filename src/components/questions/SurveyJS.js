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
import { questionIDs } from './questionId.js';


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
 }
  Survey.StylesManager.applyTheme("modern");
  let survey = new Survey.Model(SurveyJSON);
  const [authus, setAuthus] = useState();
  const questionaireId = survey.surveyId;
  survey.firstPageIsStarted = true;
  survey.sendResultOnPageNext = true;
  const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true)
  const [documentUrl, setDocUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  let qids = questionIDs;
  var currentQNaireId;
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [isDisabled,setIsDisabled] = useState(false);
  const msg = "You are not authorized to view questions unless you register. Please register to complete questionnaire."
  const emailContainer = useRef(null);

  /**===============================================================================
   *                              Custom Functions
   * ===============================================================================
   */

  useEffect(() => {
    survey.storeDataAsText = false;
    checkUser()
    //window.localStorage.removeItem("questionaire_data")
  }, [])

  async function checkUser(){
    try{
    const authus = await Auth.currentAuthenticatedUser()
    setAuthus(authus);
    }catch(err){

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

var storageName = "questionaire_data"
  function saveSurveyData(result, uuid){
    var data= result.data;
    data.pageNo = result.currentPageNo;
    data.uuid = uuid;
    console.log("Saved data is",data);
    window.localStorage.setItem(storageName, JSON.stringify(data))
  }
  
function getAnswerPerPage(){//get answers from the page
  try{
    var ans = survey.currentPage.getValue();
    console.log("Answers on this screen are::::", ans);
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
  if(data.followupQ11a!== undefined){
    console.log("Follow up 11 a",data.followupQ11a[0])
  doc = data.followupQ11a[0]
  qname=0
  }else if(data.followupQ8a!== undefined ){
    console.log("Follow up 8a",data.followupQ8a[0])
  doc = data.followupQ8a[0]
  qname=1
  console.log("answers recieved")
  }else if(data.followupQ8c!== undefined ){
    console.log("Follow up 8c",data.followupQ8c[0])
  doc = data.followupQ8c[0]
  qname=2
  }else if(data.followupQ14c!== undefined ){
    console.log("Follow up 14c",data.followupQ14c[0])
  doc = data.followupQ14c[0]
  qname=3
  }else if(data.followupQ16b!== undefined ){
    console.log("Follow up 16b",data.followupQ16b[0])
  doc = data.followupQ16b[0]
  qname=4
  }else if(data.followupQ17a!== undefined ){
    console.log("Follow up 17a",data.followupQ17a[0])
  doc = data.followupQ17a[0]
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
     try{
        console.log(ans);
        var anspq;
        var questionID;
        for( anspq in ans ) {
          if(ans[anspq]!== undefined ){
            
            console.log("Answer is: ", ans[anspq]);
            qids.map(function (qid){
              let qname =String(qid.questionName)
              if(qname.valueOf()=== String(anspq).valueOf()){
                questionID = qid.id;
              }
          });


        var storedAns = await API.graphql(graphqlOperation(
                addAns, {
                  input: {
                    answer: ans[anspq],
                    questionnaireID: currentQNaireId,
                    questionID:questionID,
                  }
                }
                ))
        var said=String(storedAns.data.createAnswer.id);
        await API.graphql(graphqlOperation(
          mutations.createQuestionnaireQuestionAnswer,{
            input:{
              answerID: said,
              questionID: questionID,
              questionnaireID: currentQNaireId,
            }
          }
        ))
        } }
    }catch(err){
      console.log("Answer per page upload Error: ",err);
    }
  }
}


async function uploadDocuments(ans, data){
  if(data.followupQ11a||data.followupQ8a||data.followupQ14c||data.followupQ16b||data.followup17a){//checks if the answers are for document uploading questions
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
              console.log('URL:::: ', url);

              switch (qname) {
                case 0:
               data.followupQ11a = doc.name;
                break;
              case 1:
               data.followupQ8a = doc.name;
               console.log("Name of FollowupQ8a document", data.followupQ8a);
                break;
                case 2:
               data.followupQ8c = doc.name;
                break;
                case 3:
               data.followupQ14c = doc.name;
                break;
                case 4:
               data.followupQ16b = doc.name;
                break;
                case 5:
               data.followupQ17a = doc.name;
                break;
                default:
               console.log("Nothing happened");
                  break;
              }
              //setLoading(false);
              } catch (err) {
                console.log("upload error: ",err);
              }  }
          }  
        return data;//returns the answer as the document name
        }   



  
  /**================================================================================================
  * End of Custom Functions
  * ================================================================================================
  *  */ 
 /**================================================================================================
  * Survey Functions
  * ================================================================================================
  */
 
  //onPartialSend///
  survey.onPartialSend.add(function (result){
    saveSurveyData(result, qnaireUUID)
    var ans = getAnswerPerPage();
    var doc = getDocAnswers(ans);
    uploadDocuments(doc, ans).then(ans=>{
      uploadAnswersPerPage(ans)
    })
    })

    //onStarted//
  survey.onStarted.add(async function(){
    console.log("Current questionnaire ID",currentQNaireId)
    let email = authus.attributes.email;
    console.log(email)
    try{
    
    console.log("Current questionnaire ID",currentQNaireId)
    var us = await API.graphql(graphqlOperation(queries.listUsers))
    let userId
    var qUser
  
    us.data.listUsers.items.map(function (user){
      console.log("The user is: ", user.email)
      console.log("The current user is: ", email)
      if(user.email === email){
        userId = String(user.id);
         qUser = user;
      }
    })

    console.log("Current questionnaire ID",currentQNaireId)
    // const QQA =await API.graphql(graphqlOperation(mutations.createQuestionnaireQuestionAnswer, {
    // input:{questionnaireId: currentQNaireId,}
    // }))
    // console.log("Questionnaire Question: ",QQA)
    // var qqId = String(QQA.data.createQuestionnaireQuestionAnswer.id);
    // console.log("Questionnaire Question: ",qqId)

    const qn= await API.graphql(graphqlOperation(
       addQuestionnaire, {
         input: {
           id: currentQNaireId,
           questionaireCompleted: false,
           userId: userId,
          }
        }
        ));
        console.log("Questionnaire: ",qn)
        const updatedUserDetails = {
        id:userId,
        questionnaireID:qn.data.createQuestionnaire.id
      } 
      await API.graphql({query: mutations.updateUser, variables:{input:updatedUserDetails}})
      }catch(err){
        console.log("On Start Error:", err)
      }
})

  //onComplete//
  survey.onComplete.add(async function (result) {
  try{
    saveSurveyData(result, qnaireUUID)
    var ans = getAnswerPerPage();
    var doc = getDocAnswers(ans);
    uploadDocuments(doc, ans).then(ans=>{
      uploadAnswersPerPage(ans)
    })

    setQuestionnaireState(true);
    const updatedQNaire = {
      id: currentQNaireId,
      questionaireCompleted: questionnaireState,
      } 
    
    await API.graphql( {query: mutations.updateQuestionnaire, variables:{input: updatedQNaire }});      
    console.log("Questionnaire state upadated!");
 }catch(err){
    console.log("This is the Error:",err);
    }  
    });
    
  //
  var prevData = window.localStorage.getItem(storageName)||null;
  if(prevData){
   var data = JSON.parse(prevData)
   survey.data = data;
   console.log(survey.data)
   console.log(prevData)
   currentQNaireId=data.uuid;
   console.log("Current questionnaire ID",currentQNaireId)

   if(data.pageNo){
   survey.currentPageNo = data.pageNo;
   console.log("Page no is:",survey.currentPageNo)
   }
   console.log("ID set: ",qnaireUUID);
   console.log("Current ID:",currentQNaireId);
  }
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
        <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">Send Question to Colleague</h5></ModalHeader>
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
        <span className="fw-bold fs-2 m-4">Need to consult a colleague on this answer?<p className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}>Send an internal message</p>directly to them for a quick response.</span>
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