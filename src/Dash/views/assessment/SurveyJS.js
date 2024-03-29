import React, {useEffect, useState, useRef} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import {useForm, Controller } from "react-hook-form";
import { Prompt } from 'react-router';
import * as $AD from 'jquery';
import Select  from 'react-select';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {SurveyJSON,surveyCss} from './survey.js'
import {create_UUID} from '../../../Home/shared/utils/utils'
import * as mutations from '../../../graphql/mutations'
import * as queries from '../../../graphql/queries'
import * as Survey from 'survey-react';
import ReactTooltip from 'react-tooltip'
import { questionIDs, answersSaved, awqid } from './questionId.js';


export function SurveyJS(props) {
    const {
        className,
        teamList,
        userDetails,
        questionnaireData,
        hasQuestionnaireData,
        handleCreateQuestionnaire,
    } = props;
    /**===========================================================================================
     *                                Global Variables
     * ===========================================================================================
     */
    Survey.Survey.cssType = "bootstrap";
    var myCss = surveyCss;
    var addAns = mutations.createAnswer;
    window["$"] = window["jQuery"] = $AD;
    const aqID ={};
    const [answersWithQuestionID, setAnswersWithQuestionid] = useState(aqID)
    const [modal, setModal] = useState(false);
    const [emailBody, setEmailBody] = useState();
    const [savedAnswers, setSavedAnswers] = useState(null);
    let answersFromDB=[];
    const [afdb, setAfdb] = useState(answersFromDB)
    const [currentPageNo, setCurrentPageNo] = useState([null]);
    const toggle = () => {
        setModal(!modal);
        }
    Survey.StylesManager.applyTheme("modern");

    Survey.Serializer.addProperty("page", "sendEmailPopUp:text")
    
    const local = Survey.surveyLocalization.locales["en"];
    local.cleanCaption = "Delete";

    function showSendEmailPopUp(element){
        const currPageNo = survey.currentPageNo;

        const doc = (new DOMParser()).parseFromString(emailContainer.current.innerHTML, 'text/html');
        const emailBodyWithremovedProgressText = removeElement(doc, 'sv-progress__text');
        const emailBodyWithFooterRemoved = removeElement(emailBodyWithremovedProgressText, 'sv-footer');
        const emailBodyWithButtonRemoved = removeElement(emailBodyWithFooterRemoved, "btn_inf")
        setEmailBody(emailBodyWithButtonRemoved)
        setCurrentPageNo(currPageNo)
        toggle()
    }

    let survey = new Survey.Model(SurveyJSON);
  
    const { register, handleSubmit,formState: { errors }, control } = useForm();
    const handleError = () => { console.error("Form Errors: ",errors)};
    survey.firstPageIsStarted = true;
    survey.sendResultOnPageNext = true;
    const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
    const [recipientName, setRecipientName] = useState("");
    // const msg = "You are not authorized to view questions unless you register. Please register to complete questionnaire."
    const emailContainer = useRef(null);

    /**===============================================================================
     *                              Custom Functions
     * ===============================================================================
     */

    useEffect(() => {
        survey.storeDataAsText = false;
        if(hasQuestionnaireData){
        getAnswers(questionnaireData.id)
         }else{
            setQnaireUUID(create_UUID())
            }
        //window.localStorage.removeItem("questionaire_data"))
        
    }, [])

 const getAnswers = async (qid)=>{
    await API.graphql({query: queries.listAnswers,variables:{filter:{questionnaireID:{contains:qid}}}})
     .then( response=>{
        var ans = response.data.listAnswers.items.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0))  
        answersFromDB = ans;
        setAfdb(answersFromDB)
        setSavedAnswers(formatAnswersFromDBToDisplayInFrontEnd(answersFromDB))  
     })
     .catch(err=>{console.error("There was an error getting the user's Previous answers", err)});
     setQnaireUUID(qid)
     
 }

 function formatAnswersFromDBToDisplayInFrontEnd(answersFromDB){
    for(let answer in answersFromDB){
       var questionnaireName ="";
        for( let qid in questionIDs ){
         if(answersFromDB[answer].questionID === questionIDs[qid].id ) {
            questionnaireName= questionIDs[qid].questionName
        break;
            }
      }
      
      aqID[answersFromDB[answer].questionID]= questionnaireName;
      setAnswersWithQuestionid(aqID)
      answersSaved[questionnaireName]= answersFromDB[answer].answer;
        answersSaved.pageNo = questionnaireData.currentPage;
    
    }
      return answersSaved;
 }
 
    function setName(event) {
        setRecipientName(event.target.value);
    }

    //remove unwanted elements in the email body(ie progress-bar and footer)
    function removeElement(doc, classname) {
        const newDoc = doc;
        newDoc.querySelectorAll("." + classname).forEach(el => el.remove())
        return newDoc;
    }
async function getCreds(){
    const cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
    return cred;
    }
    const handleSendEmail = async(data)=>{
        const cred = await getCreds().catch(err=>{console.error("Error getting Creds", err)})

        if(savedAnswers === null){
            getAnswers(qnaireUUID)
        }
        sendEmail(cred, data.recipientEmail.value);
    }
    function sendEmail(uCred,email) {
         const AWS = require("aws-sdk");
        const cred = new AWS.Credentials({
            accessKeyId: uCred.data.getCred.acc,
            secretAccessKey: uCred.data.getCred.sec,
            sessionToken: null
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
                    email,
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
                            `<p>${emailBody.documentElement.innerHTML}</p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Questionnaire Help'
                }
            },
            Source: userDetails.email, /* required */
            ReplyToAddresses: [
                userDetails.email,
                /* more items */
            ],
        };

        const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
        sendPromise.then(
            function (data) {
                toggle();
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });

    }


    function getAnswerPerPage() {//get answers from the page
        try {
            var ans = survey.currentPage.getValue();
            return ans;
        } catch (err) {
            console.error("Get Answer per page Error: ", err);
        }
    }

    function getDocAnswers(data) {
        try {
            var ans;
            var doc;
            var qname;
            if (data.followupQ11a) {
                doc = data.followupQ11a[0];
                qname = 0;
            } else if (data.followupQ8a) {
                doc = data.followupQ8a[0];
                qname = 1;
            } else if (data.followupQ8c) {
                doc = data.followupQ8c[0];
                qname = 2;
            } else if (data.followupQ14c) {
                doc = data.followupQ14c[0]
                qname = 3
            } else if (data.followupQ16b ) {
                doc = data.followupQ16b[0]
                qname = 4
            } else if (data.followupQ17a ) {
                doc = data.followupQ17a[0]
                qname = 5
            }
            var text = {docObj: doc, quesname: qname};
            ans = text
            return ans;
        } catch (err) {
            console.error("ans return error: ", err);
        }
    }

    function getOldAns(ans){
        let answer = null;
        for (let id in answersWithQuestionID){
            if(ans.valueOf() === answersWithQuestionID[id].valueOf()){
                answer = searchAnswerByQId(id);
                break;
            }
        }
        return answer;
    }

    function qnameToQid(ans){
        let QID = null;
        for (let id in awqid){
            if(ans.valueOf() === awqid[id].valueOf()){
                QID = id;
                break;
        }
        }
        return QID;
    }

    function searchAnswerByQId(id){
        let answer = null;
        for(let ans in afdb){
            if(afdb[ans].questionID.valueOf() === id.valueOf()){
                answer = afdb[ans];
                break;
            }
        }
        return answer;
    }

    async function uploadAnswersPerPage(ans) {
        if (ans) {
         
                for (let anspq in ans) {
                    if (ans[anspq]) {
                        let oldAns = getOldAns(anspq);

                        if(oldAns){//if there is an old answer, update old answer
                        const updatedAnswer = {
                                id: oldAns.id,
                                _version: oldAns._version,
                                answer: ans[anspq],
                            }

                        await API.graphql({query: mutations.updateAnswer, variables: {input: updatedAnswer}}).catch(err=>{console.error("Error while updating",err )});
                        }else{//if theres no old answer, create a new one
                            var questionID = qnameToQid(anspq);                       
                            await API.graphql(graphqlOperation(
                                    addAns, {
                                        input: {
                                            answer: ans[anspq],
                                            questionnaireID: qnaireUUID,
                                            questionID: questionID,
                                        }
                                    }
                                )).catch(err=>{console.error("Error uploading new answer", err)});
                        }
                      
                    }
                }
        }
    }

    async function updateQuestionnaire(currentPage, isComplete){
        const updatedQNaire = {
            id: questionnaireData.id,
            _version: questionnaireData._version,
            questionaireCompleted: isComplete,
            currentPage: currentPage,
        }
        await API.graphql({query: mutations.updateQuestionnaire, variables: {input: updatedQNaire}}).catch(err=>{console.error("There was an error while updating the questionnaire", err)});
    }
    async function uploadDocuments(ans, data) {
        if (data.followupQ11a || data.followupQ8a || data.followupQ14c || data.followupQ16b || data.followup17a) {//checks if the answers are for document uploading questions
            var doc = ans.docObj
            var qname = ans.quesname
            if (doc) {
                try {
                     await Storage.put(doc.name, doc.content, {
                        contentType: doc.type
                    });
                    //setLoading(true);
                
                    switch (qname) {
                        case 0:
                            data.followupQ11a = doc.name;
                            break;
                        case 1:
                            data.followupQ8a = doc.name;
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
                    console.error("upload error: ", err);
                }
            }
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
        survey.onPartialSend.add(function (result) {
            var ans = getAnswerPerPage();
            var doc = getDocAnswers(ans);
            uploadDocuments(doc, ans).then(ans => {
            uploadAnswersPerPage(ans)
            })
        })


        survey
    .onAfterRenderPage
    .add(function (survey, options) {
        //Do nothing if a page contains no description to show in a modal popup
        if (!options.page.sendEmailPopUp) 
            return;
        
        //Create a 'send Email' button to invoke a modal popup
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-info btn-xs text-white border-cyan-600 bg-cyan-600 hover:bg-cyan-900";

        btn.style.position = "absolute";
        btn.style.marginLeft = "20px"

        btn.innerHTML = "Ask Colleague";
        btn.onclick = function () {
            showSendEmailPopUp(survey.currentPage);
        }
        //Insert the created 'More Info' button into the rendered page's header
        var header = options
            .htmlElement
            .querySelector("h4");
        var span = document.createElement("span");
        span.innerHTML = "  ";
        header.appendChild(span);
        header.appendChild(btn);
    });
        //onStarted//
        survey.onStarted.add(async function () { 
            try {
                if(hasQuestionnaireData){//if the user is returning to a saved insance of the assessment
                    resumeQuestionnaire(savedAnswers)
                
                }
                else{//if the user is starting a new assessment
//======================creating a new Questionnaire=======================
                handleCreateQuestionnaire(qnaireUUID)
//=========================================================================      
               
            }} catch (err) {
                console.error("On Start Error:", err)
            }
        })

        //onComplete//
        survey.onComplete.add(async function (result) {
            try {
                var ans = getAnswerPerPage();
                var doc = getDocAnswers(ans);
                uploadDocuments(doc, ans).then(ans => {
                    uploadAnswersPerPage(ans)
                })
                updateQuestionnaire(survey.currentPageNo,true)
                
            } catch (err) {
                console.error("This is the Error:", err);
            }
        });

        
       
        const resumeQuestionnaire=(data)=>{
            survey.data = data;
            
            if (data.pageNo > currentPageNo) {
                survey.currentPageNo = data.pageNo;
            }else if (data.pageNo < currentPageNo){
                survey.currentPageNo = currentPageNo;
                data.pageNo = currentPageNo;
            }
          }
        /**================================================================================================
         * End of Survey Functions
         * ================================================================================================
         */

        

        return (<>
           
           <Prompt 
      message={(location, action) => {
        if (action === 'PUSH') {
          console.log("Backing up...")
            if(survey.currentPageNo === 16){
                updateQuestionnaire(survey.currentPageNo,true)
            }else{
                console.log("Updating the question")
                updateQuestionnaire(survey.currentPageNo,false)
            }
        }
        return location.pathname.startsWith("/app")
        ? true
        : `Are you sure you want to leave the assessment?`
      }}
            />
    <div className="w-full mx-auto bg-cover bg-no-repeat bg-center bg-contact" >
                    <div className={className}>
                        
                            {/* <Container className =" overflow-hidden p-5  bg-light bdy">
                            <Col className="col-md-12">
                            <h5>Please fill in the following questionnaire</h5><br/>
                            </Col>
                            </Container> */}
                        <div ref={emailContainer}><Survey.Survey model={survey} css={myCss}/></div>
                        <hr className="bg-secondary"/>
                        <div className="mx-4">
                        <span className=" text-base fw-semibold my-4">Need to consult a colleague on this answer? Send an internal message directly to them by clicking the "Ask Colleague" button.</span>
                        </div>
                        <Modal isOpen={modal} id="questionDescriptionPopup" toggle={toggle} className={className}>
                                <Form onSubmit={handleSubmit(handleSendEmail, handleError)}>
                            <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">Send
                                Question to Colleague</h5></ModalHeader>
                            <ModalBody>
                                    <FormGroup>
                                        <label id="recipient-name" className="col-form-label">Recipient Name:</label>
                                        <input type="text" data-tip data-for="teamTip" className="form-control" id="recipient-name"
                                               value={recipientName} onChange={setName}/>
                                    </FormGroup>
                        <FormGroup>
                        <label id="recipient-email" className="col-form-label">Recipient Email:</label>
                    <Controller name="recipientEmail"  control={control} render={({ field }) => (
              <Select placeholder="Recipient Email"  className="form-control" options={teamList} defaultValue="Recipient Email" {...field}>
                </Select>
            )}   {...register("recipientEmail")}  rules={{ required: "Please Select the recipient's email"}} />
    
             <ReactTooltip id="teamTip" place="top" effect="solid">
              Can't find who you're looking for? Check if the user is added to your list of team members in the teams page.
            </ReactTooltip>
                                    </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button  className="btn bg-grey-600 hover:bg-grey-400 text-white" onClick={toggle}>Close</Button>
                                <Button className="btn bg-green-500 hover:bg-green-300 text-white"  type="submit">Send
                                    message</Button>
                            </ModalFooter>
                                </Form>
                        </Modal>
                        
                    </div>
                </div>
               
            </>
        );
    }
