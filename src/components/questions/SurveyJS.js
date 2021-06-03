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
    const toggle = () => {
        setModal(!modal);
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
    const [isDisabled, setIsDisabled] = useState(false);
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

    async function checkUser() {
        try {
            const authus = await Auth.currentAuthenticatedUser()
            setAuthus(authus);
        } catch (err) {

        }
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

    function sendEmail() {
        setIsDisabled(true);
        const doc = (new DOMParser).parseFromString(emailContainer.current.innerHTML, 'text/html');
        const emailBodyWithremovedProgressText = removeElement(doc, 'sv-progress__text');
        const emailBodyWithFooterRemoved = removeElement(emailBodyWithremovedProgressText, 'sv-footer');

        console.log('USERS:::: ', authus);
        const AWS = require("aws-sdk");
        console.log('CONFIGS:: ', configData);

        const cred = new AWS.Credentials({
            accessKeyId: configData.REACT_APP_ACCESS_KEY_ID,
            secretAccessKey: configData.REACT_APP_SECRET_ACCESS_KEY,
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
            Source: authus.attributes.email, /* required */
            ReplyToAddresses: [
                authus.attributes.email,
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
                doc = data.followupQ11a[0]
                qname = 0
            } else if (data.followupQ8a !== undefined) {
                console.log("Follow up 8a", data.followupQ8a[0])
                doc = data.followupQ8a[0]
                qname = 1
                console.log("answers recieved")
            } else if (data.followupQ8c !== undefined) {
                console.log("Follow up 8c", data.followupQ8c[0])
                doc = data.followupQ8c[0]
                qname = 2
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
                        qids.map(function (qid) {
                            let qname = String(qid.questionName)
                            if (qname.valueOf() === String(anspq).valueOf()) {
                                questionID = qid.id;
                            }
                        });


                        var storedAns = await API.graphql(graphqlOperation(
                            addAns, {
                                input: {
                                    answer: ans[anspq],
                                    questionnaireID: currentQNaireId,
                                    questionID: questionID,
                                }
                            }
                        ))
                        var said = String(storedAns.data.createAnswer.id);
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

                    await Storage.get(doc.name, {download: true}).then(data => {

                        data.Body.text().then(data2 => {
                            convert(data2.substr(28));
                        })

                    });

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


    function convert(data) {
        // const data = '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';
        const test = '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'

        const arrayBuffer = base64ToArrayBuffer(data);
        const blob = new Blob([arrayBuffer], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }

    function base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        return bytes.map((byte, i) => binaryString.charCodeAt(i));
    }

    function downloadBlob(blob, filename) {


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
            saveSurveyData(result, qnaireUUID)
            var ans = getAnswerPerPage();
            var doc = getDocAnswers(ans);
            uploadDocuments(doc, ans).then(ans => {
                uploadAnswersPerPage(ans)
            })
        })

        //onStarted//
        survey.onStarted.add(async function () {
            console.log("Current questionnaire ID", currentQNaireId)
            let email = authus.attributes.email;
            console.log(email)
            try {

                console.log("Current questionnaire ID", currentQNaireId)
                var us = await API.graphql(graphqlOperation(queries.listUsers))
                let userId
                var qUser

                us.data.listUsers.items.map(function (user) {
                    console.log("The user is: ", user.email)
                    console.log("The current user is: ", email)
                    if (user.email === email) {
                        userId = String(user.id);
                        qUser = user;
                    }
                })

                console.log("Current questionnaire ID", currentQNaireId)
                // const QQA =await API.graphql(graphqlOperation(mutations.createQuestionnaireQuestionAnswer, {
                // input:{questionnaireId: currentQNaireId,}
                // }))
                // console.log("Questionnaire Question: ",QQA)
                // var qqId = String(QQA.data.createQuestionnaireQuestionAnswer.id);
                // console.log("Questionnaire Question: ",qqId)

                const qn = await API.graphql(graphqlOperation(
                    addQuestionnaire, {
                        input: {
                            id: currentQNaireId,
                            questionaireCompleted: false,
                            userId: userId,
                        }
                    }
                ));
                console.log("Questionnaire: ", qn)
                const updatedUserDetails = {
                    id: userId,
                    questionnaireID: qn.data.createQuestionnaire.id
                }
                await API.graphql({query: mutations.updateUser, variables: {input: updatedUserDetails}})
            } catch (err) {
                console.log("On Start Error:", err)
            }
        })

        //onComplete//
        survey.onComplete.add(async function (result) {
            try {
                saveSurveyData(result, qnaireUUID)
                var ans = getAnswerPerPage();
                var doc = getDocAnswers(ans);
                uploadDocuments(doc, ans).then(ans => {
                    uploadAnswersPerPage(ans)
                })

                setQuestionnaireState(true);
                const updatedQNaire = {
                    id: currentQNaireId,
                    questionaireCompleted: questionnaireState,
                }

                await API.graphql({query: mutations.updateQuestionnaire, variables: {input: updatedQNaire}});
                console.log("Questionnaire state upadated!");
            } catch (err) {
                console.log("This is the Error:", err);
            }
        });

        //
        var prevData = window.localStorage.getItem(storageName) || null;
        if (prevData) {
            var data = JSON.parse(prevData)
            survey.data = data;
            console.log(survey.data)
            console.log(prevData)
            currentQNaireId = data.uuid;
            console.log("Current questionnaire ID", currentQNaireId)

            if (data.pageNo) {
                survey.currentPageNo = data.pageNo;
                console.log("Page no is:", survey.currentPageNo)
            }
            console.log("ID set: ", qnaireUUID);
            console.log("Current ID:", currentQNaireId);
        }
        /**================================================================================================
         * End of Survey Functions
         * ================================================================================================
         */

        if (questionnaireState) {
            setShouldBlockNavigation(false)
        }

        return (<>
                {authus !== undefined && (
                    <>
                        <Prompt
                            when={shouldBlockNavigation}
                            message="Are you sure you want to leave?"/>
                        <div ref={emailContainer}><Survey.Survey model={survey} css={myCss}/></div>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}><h5 className="modal-title" id="exampleModalLabel">Send
                                Question to Colleague</h5></ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <label id="recipient-name" className="col-form-label">Recipient Name:</label>
                                        <input type="text" className="form-control" id="recipient-name"
                                               value={recipientName} onChange={setName}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label id="recipient-email" className="col-form-label">Recipient Email:</label>
                                        <input type="text" className="form-control" id="recipient-email"
                                               value={recipientEmail} onChange={setEmail}/>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="btn btn-outline-secondary" onClick={toggle}>Close</Button>
                                <Button className="btn btn-success" disabled={isDisabled} onClick={sendEmail}>Send
                                    message</Button>
                            </ModalFooter>
                        </Modal>
                        <hr className="bg-secondary"/>
                        <span className="fw-bold fs-2 m-4">Need to consult a colleague on this answer?<p
                            className="btn-link d-none d-md-inline-block pointer m-1" onClick={toggle}>Send an internal message</p>directly to them for a quick response.</span>
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
}