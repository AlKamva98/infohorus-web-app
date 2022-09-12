import React, {useEffect, useState, useRef} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import {useForm, Controller } from "react-hook-form";
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
        approved
    } = props;
    /**===========================================================================================
     *                                Global Variables
     * ===========================================================================================
     */
    Survey.Survey.cssType = "bootstrap";
    var myCss = surveyCss;
    var addAns = mutations.createAnswer;
    window["$"] = window["jQuery"] = $AD;
    const answersWithQuestionID ={};
    const [modal, setModal] = useState(false);
    const [emailBody, setEmailBody] = useState();
    const [savedAnswers, setSavedAnswers] = useState([null]);
    let answersFromDB=[];
    const [currentPageNo, setCurrentPageNo] = useState([null]);
    const toggle = () => {
        setModal(!modal);
        console.log("This is the modal")
    }
    Survey.StylesManager.applyTheme("modern");

    Survey.Serializer.addProperty("page", "sendEmailPopUp:text")

    function showSendEmailPopUp(element){
        const currPageNo = survey.currentPageNo;

        const doc = (new DOMParser()).parseFromString(emailContainer.current.innerHTML, 'text/html');
        const emailBodyWithremovedProgressText = removeElement(doc, 'sv-progress__text');
        const emailBodyWithFooterRemoved = removeElement(emailBodyWithremovedProgressText, 'sv-footer');
        const emailBodyWithButtonRemoved = removeElement(emailBodyWithFooterRemoved, "btn_inf")
        setEmailBody(emailBodyWithButtonRemoved)
        console.log("This is the element", element)
        console.log("The current page is:", currPageNo)
        setCurrentPageNo(currPageNo)
        toggle()
    }

    let survey = new Survey.Model(SurveyJSON);
    const { register, handleSubmit,formState: { errors }, control } = useForm();
    const handleError = () => { console.log("Form Errors: ",errors)};
    survey.firstPageIsStarted = true;
    survey.sendResultOnPageNext = true;
    const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
    let qids = questionIDs;
    const [recipientName, setRecipientName] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
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
     const response = await API.graphql({query: queries.listAnswers,variables:{filter:{questionnaireID:{contains:qid}}}})
     .catch(err=>{console.log("There was an error getting the user's Previous answers", err)});
     
     setQnaireUUID(qid)
     var ans = response.data.listAnswers.items.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0))  
     console.log("This is the answers sorted", ans)
     answersFromDB = ans;
     console.log("This is the response from the getAnswers query", answersFromDB)
     setSavedAnswers(formatAnswersFromDBToDisplayInFrontEnd(answersFromDB))
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
      
      answersWithQuestionID[answersFromDB[answer].questionID]= questionnaireName;
      answersSaved[questionnaireName]= answersFromDB[answer].answer;
        answersSaved.pageNo = questionnaireData.currentPage;
    
    }
    console.log("These are the answers from the database", answersSaved)//Theres an undefined:undefined that I dont know how was generated, This is a reminder to investigate
      return answersSaved;
 }
 
    function setName(event) {
        setRecipientName(event.target.value);
    }

    function setEmail(event) {
        console.log(event.target.value)
        setRecipientEmail(event.target.value);
    }

    //remove unwanted elements in the email body(ie progress-bar and footer)
    function removeElement(doc, classname) {
        const newDoc = doc;
        newDoc.querySelectorAll("." + classname).forEach(el => el.remove())
        return newDoc;
    }
async function getCreds(){
    const cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
    console.log("THIS IS THE CREDENTIALS!!!", cred);
    return cred;
    }
    const handleSendEmail = async(data)=>{
        const cred = await getCreds().catch(err=>{console.log("Error getting Creds", err)})

        console.log("This is the form data", data);
        sendEmail(cred, data.recipientEmail.value);
    }
    function sendEmail(uCred,email) {
        setIsDisabled(true);
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

    var storageName = "questionaire_data"

    // function saveSurveyData(result, uuid) {
    //     var data = result.data;
    //     data.pageNo = result.currentPageNo;
    //     data.uuid = uuid;
    //     data.ansid = said;
    //     console.log("Saved data is", data);
    //     window.localStorage.setItem(storageName, JSON.stringify(data))
    // }

    function getAnswerPerPage() {//get answers from the page
        try {
            var ans = survey.currentPage.getValue();
            console.log("THESE ARE THE ANSWERS OF THE PREVIOUS PAGE", ans);
            return ans;
        } catch (err) {
            console.log("Get Answer per page Error: ", err);
        }
    }

    function getDocAnswers(data) {
        try {
            var ans;
            var doc;
            var qname;
            if (data.followupQ11a) {
                console.log("Follow up 11 a", data.followupQ11a[0])
                doc = data.followupQ11a[0];
                qname = 0;
            } else if (data.followupQ8a) {
                console.log("Follow up 8a", data.followupQ8a[0]);
                doc = data.followupQ8a[0];
                qname = 1;
                console.log("answers recieved");
            } else if (data.followupQ8c) {
                console.log("Follow up 8c", data.followupQ8c[0]);
                doc = data.followupQ8c[0];
                qname = 2;
            } else if (data.followupQ14c) {
                console.log("Follow up 14c", data.followupQ14c[0])
                doc = data.followupQ14c[0]
                qname = 3
            } else if (data.followupQ16b ) {
                console.log("Follow up 16b", data.followupQ16b[0])
                doc = data.followupQ16b[0]
                qname = 4
            } else if (data.followupQ17a ) {
                console.log("Follow up 17a", data.followupQ17a[0])
                doc = data.followupQ17a[0]
                qname = 5
            }
            var text = {docObj: doc, quesname: qname};
            ans = text
            console.log("answers stored and returned", doc)
            return ans;
        } catch (err) {
            console.log("ans return error: ", err);
        }
    }

    function getOldAns(ans){
        let answer = null;
        console.log("checking answer exists?", ans)
        for (let id in answersWithQuestionID){
            if(ans.valueOf() === answersWithQuestionID[id].valueOf()){
                console.log("It's a match!!")
                answer = searchAnswerByQId(id);
            }
        }
        console.log("The answer in check answer is:::",answer);
        return answer;
    }

    function qnameToQid(ans){
        let QID = null;
        for (let id in awqid){
            if(ans.valueOf() === awqid[id].valueOf()){
                console.log("It's a match!!")
                QID = id;
                break;
        }
        }
        return QID;
    }

    function searchAnswerByQId(id){
        let answer = null;
        for(let ans in answersFromDB){
            if(answersFromDB[ans].questionID.valueOf() === id.valueOf()){
                console.log("answerFound")
                answer = answersFromDB[ans];
                console.log("The answer is:::",answer);
                break;
            }
        }
        return answer;
    }

    async function uploadAnswersPerPage(ans) {
        if (ans) {
         
                for (let anspq in ans) {
                    if (ans[anspq] !== undefined) {
                        let oldAns = getOldAns(anspq);

                        if(oldAns){
                        const updatedAnswer = {
                                id: oldAns.id,
                                _version: oldAns._version,
                                answer: ans[anspq],
                            }

                        await API.graphql({query: mutations.updateAnswer, variables: {input: updatedAnswer}}).catch(err=>{console.error("Error while updating",err )});
                        }else{
                            var questionID = qnameToQid(anspq);                       
                            console.log("Question ID", questionID);
                            var storedAns = await API.graphql(graphqlOperation(
                                    addAns, {
                                        input: {
                                            answer: ans[anspq],
                                            questionnaireID: qnaireUUID,
                                            questionID: questionID,
                                        }
                                    }
                                )).catch(err=>{console.error("Error uploading new answer", err)});
                        }
                      
                        updateQuestionnaire(survey.currentPageNo,false)
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
        console.log("The current page is", currentPage);
        await API.graphql({query: mutations.updateQuestionnaire, variables: {input: updatedQNaire}}).catch(err=>{console.error("There was an error while updating the questionnaire", err)});
    }
    async function uploadDocuments(ans, data) {
        if (data.followupQ11a || data.followupQ8a || data.followupQ14c || data.followupQ16b || data.followup17a) {//checks if the answers are for document uploading questions
            var doc = ans.docObj
            var qname = ans.quesname
            if (doc) {
                try {
                    console.log("Uploading document to S3 Bucket...");
                    const putObject = await Storage.put(doc.name, doc.content, {
                        contentType: doc.type
                    });
                    //setLoading(true);
                    console.log("Document uploaded to S3 Bucket...", putObject);

                    // Retrieve the uploaded file to display
                    console.log("Getting the s3 bucket url...")

                   

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
                    console.log("upload error: ", err);
                }
            }
        }
        return data;//returns the answer as the document name
    }
function isQuestionAlreadyAnswered(answerQuestionid, ){
    let isAnswered = false;



    return isAnswered
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
            console.log("Current questionnaire ID", qnaireUUID)
            
            try {
                if(hasQuestionnaireData){//if the user is returning to a saved insance of the assessment
                    console.log("These are the saved answers", savedAnswers)
                    resumeQuestionnaire(savedAnswers)
                
                }
                else{
                console.log("Current questionnaire ID", qnaireUUID)
                // const QQA =await API.graphql(graphqlOperation(mutations.createQuestionnaireQuestionAnswer, {
                // input:{questionnaireId: qnaireUUID,}
                // }))
                // console.log("Questionnaire Question: ",QQA)
                // var qqId = String(QQA.data.createQuestionnaireQuestionAnswer.id);
                // console.log("Questionnaire Question: ",qqId)
//======================creating a new Questionnaire=======================
                
                handleCreateQuestionnaire(qnaireUUID)
               
            
//===============================================================                
               
            }} catch (err) {
                console.log("On Start Error:", err)
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
                
                updateQuestionnaire(survey.currentPageNo, true)
            } catch (err) {
                console.log("This is the Error:", err);
            }
        });

        //
        // var prevData = window.localStorage.getItem(storageName) || null;
       
        const resumeQuestionnaire=(data)=>{
            console.log("answers",data)
            survey.data = data;
            console.log(survey.data)
            console.log(data)
            console.log("page is", currentPageNo)
            
            if (data.pageNo > currentPageNo) {
                console.log("The current pg no is:", data.pageNo)
                survey.currentPageNo = data.pageNo;
                console.log("Page no is:", survey.currentPageNo)
            }else if (data.pageNo < currentPageNo){
                survey.currentPageNo = currentPageNo;
                data.pageNo = currentPageNo;
                console.log("Page no is:", survey.currentPageNo)
            }
            console.log("ID set: ", qnaireUUID);
        }
        /**================================================================================================
         * End of Survey Functions
         * ================================================================================================
         */

        

        return (<>
                { (
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
              <Select placeholder="Recipient Email"  className="form-control" options={teamList} onChange={setEmail} defaultValue="Recipient Email" {...field}>
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
                )}
               
            </>
        );
    }
