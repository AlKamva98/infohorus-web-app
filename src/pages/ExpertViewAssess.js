import React, {useState,useMemo, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { AnsCOLUMNS } from "./anscolumns.js";
import {Button, Container} from 'react-bootstrap'
import * as queries from "../graphql/queries"
import API, {graphqlOperation} from '@aws-amplify/api'
import AWS from 'aws-sdk'

import "./table.css"

export const ExpertViewAssess = (props) => {
const { state } = props.location;
const [checkbox1, setCheckbox1] = useState('');
const [datatable, setDatatable] = useState('');
const [hasAnswers, setHasAnswers] = useState(false)
AWS.config.region = 'eu-west-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-west-1:85d9c869-a59b-4ea2-8bf0-9da2c39aa1d4',
});

let questionnaire;
let answers =[];
const showLogs2 = (e) => {
     console.log('SHOWLOGS:::', e);
     setCheckbox1(e);
 };
 let data;
useEffect(()=>{
  
   
     getAnswersbyQuestionnaire().then(answerData =>{
        data = {
                 columns: AnsCOLUMNS,
                 rows: answerData
             }
             console.log("answer data is::::", data);
             setDatatable(data)
            }).finally(()=>{
              setHasAnswers(true);
            })
     
},[])

var lambda = new AWS.Lambda({region: 'eu-west-1', apiVersion: '2015-03-31'});
// create JSON object for parameters for invoking Lambda function
var pullParams = {
  FunctionName : 'GetFileFromS3',
  InvocationType : 'RequestResponse',
  LogType : 'None'
};
// create variable to hold data returned by that Lambda function
var pullResults;


function getFileFromS3(){
lambda.invoke(pullParams, function(error, data) {
console.log(error,data)
  if (error) {
    prompt(error);
  } else {
    pullResults = JSON.parse(data.Payload);
    //console.log("This is the result from the Function",pullResults)
    return pullResults;
  }
});
}
async function getAnswersbyQuestionnaire(){

  let questionnaires = await API.graphql({query: queries.listQuestionnaires});
  questionnaires.data.listQuestionnaires.items.map(function (qnaire) {
  if(state.id === qnaire.userId){
    console.log("The questionnaireId is::::", qnaire.id)
    questionnaire = qnaire.id
    }});
  console.log("Questionnaire id is set to::::", questionnaire); 
  let listanswers = await API.graphql({query: queries.listAnswers});
  listanswers.data.listAnswers.items.map(function (ans) {
  if(questionnaire === ans.questionnaireID){
    console.log("The answer is::::", ans)
    answers.push(ans);
  }
  });
  console.log("Answers set as::::", answers)
    return answers;
  }


function convert(){
  console.log("File that will be converted:",getFileFromS3())
    // const data = getFileFromS3();
    // const arrayBuffer = base64ToArrayBuffer(data.Body.data);
    // const blob = new Blob([arrayBuffer], {type: 'application/pdf'});
    // const url = window.URL.createObjectURL(blob);
    // window.open(url);
}

function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
}

async function getDocument(){
  try{  
    const encryptedDoc = await API.graphql(graphqlOperation(    ));
    convert(encryptedDoc);
  }catch(err){
    console.error(err, err.stack);
  }
 }

 return (
   <>
<Container>
<h4 className="text-center display-4">Customer Answers</h4>
<span>Click on download to get .pdf/.xls file of the  </span>
</Container>
<div className="py-3">
      {hasAnswers && (<MDBDataTableV5
        hover
        data={datatable}
        autoWidth
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);}}
          />)}
    </div>
  <Button onClick={convert}>Download</Button>
  </>)}