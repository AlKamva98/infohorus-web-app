import React, {useEffect, useState, useRef} from 'react';
import{Modal, ModalBody, ModalHeader,ModalFooter, Button, Form, FormGroup} from 'reactstrap'
import {useForm, Controller } from "react-hook-form";
import Select  from 'react-select';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {SurveyJSON,surveyCss} from './survey.js'
import {create_UUID} from '../../../Home/shared/utils/utils'
import * as mutations from '../../../graphql/mutations'
import * as queries from '../../../graphql/queries'
import * as Survey from 'survey-react';
import ReactTooltip from 'react-tooltip'
import { questionIDs } from './questionId.js';


export function SurveyJS(props) {
    const {
        className,
        teamList,
        userDetails,
        questionnaireData,
        hasQuestionnaireData,
        approved
    } = props;
    /**===========================================================================================
     *                                Global Variables
     * ===========================================================================================
     */
    Survey.Survey.cssType = "bootstrap";
    var myCss = surveyCss;
    var addAns = mutations.createAnswer;
    var said;
    var addQuestionnaire = mutations.createQuestionnaire;
    const [questionnaireComplete, setQuestionnaireComplete] = useState(false)
    const [modal, setModal] = useState(false);
    const [savedAnswers, setSavedAnswers] = useState([]);
    const { register, control } = useForm();
    const toggle = () => {
        setModal(!modal);
    }
    Survey.StylesManager.applyTheme("modern");
    let survey = new Survey.Model(SurveyJSON);
    // const questionaireId = survey.surveyId;
    survey.firstPageIsStarted = true;
    survey.sendResultOnPageNext = true;
    const [qnaireUUID, setQnaireUUID] = useState(create_UUID());
    let qids = questionIDs;
    var currentQNaireId;
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
        console.log("This is the questionnaire the user didnt complete", questionnaireData);
        if(hasQuestionnaireData)
        getAnswers(questionnaireData.id)
        if(!qnaireUUID){
            // setQnaireUUID(create_UUID())
        }
        //window.localStorage.removeItem("questionaire_data"))
        console.log("approved", approved)
    }, [])

 const getAnswers = async (qid)=>{
     const response = await API.graphql({query: queries.listAnswers,variables:{filter:{questionnaireID:{contains:qid}}}})
     .catch(err=>{console.log("There was an error getting the user's Previous answers", err)});
     setQnaireUUID(qid)
     response.data.listAnswers.items.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0));
     console.log("Answers:::",response)
     setSavedAnswers(response.data.listAnswers)
 }

    function setName(event) {
        setRecipientName(event.target.value);
    }

    function setEmail(event) {
        setRecipientEmail(event.target.value);
    }

    //remove unwanted elements in the email body(ie progress-bar and footer)
    function removeElement(doc, classname) {
        const newDoc = doc;
        newDoc.querySelectorAll("." + classname).forEach(el => el.remove())
        return newDoc;
    }
async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
      return cred;
    }
    function sendEmail(uCred) {
        setIsDisabled(true);
        const doc = (new DOMParser()).parseFromString(emailContainer.current.innerHTML, 'text/html');
        const emailBodyWithremovedProgressText = removeElement(doc, 'sv-progress__text');
        const emailBodyWithFooterRemoved = removeElement(emailBodyWithremovedProgressText, 'sv-footer');

        console.log('USERS:::: ', userDetails);
       

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

    function saveSurveyData(result, uuid) {
        var data = result.data;
        data.pageNo = result.currentPageNo;
        data.uuid = uuid;
        data.ansid = said;
        console.log("Saved data is", data);
        window.localStorage.setItem(storageName, JSON.stringify(data))
    }

    function getAnswerPerPage() {//get answers from the page
        try {
            var ans = survey.currentPage.getValue();
            console.log("Answers on this screen are::::", ans);
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
            if (data.followupQ11a !== undefined) {
                console.log("Follow up 11 a", data.followupQ11a[0])
                doc = data.followupQ11a[0];
                qname = 0;
            } else if (data.followupQ8a !== undefined) {
                console.log("Follow up 8a", data.followupQ8a[0]);
                doc = data.followupQ8a[0];
                qname = 1;
                console.log("answers recieved");
            } else if (data.followupQ8c !== undefined) {
                console.log("Follow up 8c", data.followupQ8c[0]);
                doc = data.followupQ8c[0];
                qname = 2;
            } else if (data.followupQ14c !== undefined) {
                console.log("Follow up 14c", data.followupQ14c[0])
                doc = data.followupQ14c[0]
                qname = 3
            } else if (data.followupQ16b !== undefined) {
                console.log("Follow up 16b", data.followupQ16b[0])
                doc = data.followupQ16b[0]
                qname = 4
            } else if (data.followupQ17a !== undefined) {
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

    async function uploadAnswersPerPage(ans) {
        if (ans) {
            try {
                console.log(ans);
                var anspq;
                var questionID;
                for (anspq in ans) {
                    if (ans[anspq] !== undefined) {

                        console.log("Answer is: ", ans[anspq]);
                        for (let qid in qids) {
                            let qname = String(qids[qid].questionName)
                            if (qname.valueOf() === String(anspq).valueOf()) {
                                questionID = qids[qid].id;
                            }
                        };

                        for(let d in survey.data){

                            console.log(getAnswerPerPage());
                            console.log("This is data")
                            console.log("This is qid",questionID)
                            if(questionID === d ){
                                const a = await API.graphql({query: queries.getAnswer , variables:{input:survey.data}})
                                console.log("anwser:",a)
                                //     const updatedAnswer = {
                            //     id: a.data,
                            //     _version: a._version,
                            //     questionaireCompleted: true,
                            // }

                            // await API.graphql({query: mutations.updateAnswer, variables: {input: updatedAnswer}});
                            }else{

                            }
                        }
                        
                        var storedAns = await API.graphql(graphqlOperation(
                            addAns, {
                                input: {
                                    answer: ans[anspq],
                                    questionnaireID: currentQNaireId,
                                    questionID: questionID,
                                }
                            }
                        ));
                        said = String(storedAns.data.createAnswer.id);
                        await API.graphql(graphqlOperation(
                            mutations.createQuestionnaireQuestionAnswer, {
                                input: {
                                    answerID: said,
                                    questionID: questionID,
                                    questionnaireID: currentQNaireId,
                                }
                            }
                        ))
                    }
                }
            } catch (err) {
                console.log("Answer per page upload Error: ", err);
            }
        }
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
            saveSurveyData(result, currentQNaireId)
            var ans = getAnswerPerPage();
            var doc = getDocAnswers(ans);
            uploadDocuments(doc, ans).then(ans => {
            uploadAnswersPerPage(ans)
            })
        })

        var qUser;

        //onStarted//
        survey.onStarted.add(async function () {
            console.log("Current questionnaire ID", qnaireUUID)
            
            try {
                if(hasQuestionnaireData){//if the user is returning to a saved insance of the assessment
                survey.data= savedAnswers;
                    console.log(survey.data);
                // currentQNaireId= survey.data.uuid;
                // console.log("Current questionnaire ID", currentQNaireId)
            

                }
                else{
                    console.log("Current questionnaire ID", qnaireUUID)
                // const QQA =await API.graphql(graphqlOperation(mutations.createQuestionnaireQuestionAnswer, {
                // input:{questionnaireId: currentQNaireId,}
                // }))
                // console.log("Questionnaire Question: ",QQA)
                // var qqId = String(QQA.data.createQuestionnaireQuestionAnswer.id);
                // console.log("Questionnaire Question: ",qqId)
//======================creating a new Questionnaire=======================
                const qn = await API.graphql(graphqlOperation(
                    addQuestionnaire, {
                        input: {
                            id: qnaireUUID,
                            questionaireCompleted: false,
                            userId: userDetails.id,
                        }
                    }
                ));
                if(!currentQNaireId){
                    currentQNaireId=qn.data.createQuestionnaire.id;
                }
            
//===============================================================                
               
            }} catch (err) {
                console.log("On Start Error:", err)
            }
        })

        //onComplete//
        survey.onComplete.add(async function (result) {
            try {
                saveSurveyData(result, currentQNaireId)
                var ans = getAnswerPerPage();
                var doc = getDocAnswers(ans);
                uploadDocuments(doc, ans).then(ans => {
                    uploadAnswersPerPage(ans)
                })

                setQuestionnaireComplete(true);
                const updatedQNaire = {
                    id: currentQNaireId,
                    _version: qUser._version,
                    questionaireCompleted: true,
                }

                await API.graphql({query: mutations.updateQuestionnaire, variables: {input: updatedQNaire}});
                console.log("Questionnaire state upadated!");
            } catch (err) {
                console.log("This is the Error:", err);
            }
        });

        //
        // var prevData = window.localStorage.getItem(storageName) || null;
       
        const resumeQuestionnaire=(data)=>{
            if (hasQuestionnaireData) {
            survey.data = data;
            console.log(survey.data)
            console.log(data)
            currentQNaireId = data.questionnaireID;
            console.log("Current questionnaire ID", currentQNaireId)

            if (data.pageNo) {
                survey.currentPageNo = data.pageNo;
                console.log("Page no is:", survey.currentPageNo)
            }
            console.log("ID set: ", qnaireUUID);
            console.log("Current ID:", currentQNaireId);
        }}
        /**================================================================================================
         * End of Survey Functions
         * ================================================================================================
         */

        

        return (<>
                { (
                    <div className={className}>
                        {/* <Prompt
                            when={shouldBlockNavigation}
                            message="Are you sure you want to leave?"/> */}
                            {/* <Container className =" overflow-hidden p-5  bg-light bdy">
                            <Col className="col-md-12">
                            <h5>Please fill in the following questionnaire</h5><br/>
                            </Col>
                            </Container> */}
                        <div ref={emailContainer}><Survey.Survey model={survey} css={myCss}/></div>
                        <hr className="bg-secondary"/>
                        <span className="fw-semibold text-lg m-4">Need to consult a colleague on this answer?<p
                            className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}>Send an internal message</p>directly to them for a quick response.</span>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">Send
                                Question to Colleague</h5></ModalHeader>
                            <ModalBody>
                                <Form>
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
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="btn bg-grey-600 hover:bg-grey-400 text-white" onClick={toggle}>Close</Button>
                                <Button className="btn bg-green-500 hover:bg-green-300 text-white" disabled={isDisabled} onClick={async ()=>{getCreds().then(uCred=>{sendEmail(uCred);})}}>Send
                                    message</Button>
                            </ModalFooter>
                        </Modal>
                        
                    </div>
                )}
               
            </>
        );
    }
