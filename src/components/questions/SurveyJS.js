import React, {useState,useEffect} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
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
  const toggle = () => {setModal(!modal); 
  handleSurveyState()}
  Survey.StylesManager.applyTheme("modern");
  let survey = new Survey.Model(SurveyJSON);
  
  const questionaireId = survey.surveyId;
  survey.firstPageIsStarted = true;
  const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true)
  const [documentUrl, setDocUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  var currentQNaireId = qnaireUUID;
  
  
  /**===============================================================================
   *                              Custom Functions 
   * ===============================================================================
   */
 
  useEffect(() => {
    survey.storeDataAsText = false;
    //window.localStorage.removeItem(questionaireId)
    handleSurveyState()
  }, [])

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

async function uploadDocuments(ans, data){
  if(data.followupQ11a||data.followupQ8a||data.followupQ14c||data.followupQ15b){
var doc = ans.docObj
var qname = ans.quesname
  console.log(qname)

 if (doc){
    console.log("Name of doc: "+doc.name);
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
               console.log("Document url: ",url)
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
               console.log("Document url: ",data.followupQ11a[0]);
                break;
              case 1:
               data.followupQ8a[0] = url;
               console.log("Document url: ",data.followupQ8a);
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
               console.log("Document url: ",data.followupQ8c[0]);
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
               console.log("Document url: ",data.followupQ14c[0]);
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
  async function getQuestionnaire(){
    try{ 
      var qn =await API.graphql({query: queries.getQuestionnaire, variables: {id:currentQNaireId}});
      return qn;  
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
    var ans = getDocAnswers(result.data);
    uploadDocuments(ans, result.data)
    handleSurveyState()

})

survey.onStarted.add(async function(){
  let authus = await Auth.currentAuthenticatedUser();
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

