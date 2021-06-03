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

const s3 = new AWS.S3({
  accessKeyId:  "",//IAM_USER_KEY,  /* required */ //# Put your iam user key
  secretAccessKey: "", //IAM_USER_SECRET, /* required */  //# Put your iam user secret key
  Bucket: "userdocumentsbucket60519-staging" //BUCKET_NAME     /* required */    // # Put your bucket name
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

const s3download = function (params) {
    return new Promise((resolve, reject) => {
        s3.createBucket({
            Bucket: "userdocumentsbucket60519-staging"        /* Put your bucket name */
        }, function () {
            s3.getObject(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Successfully dowloaded data from  bucket");
                    resolve(data);
                }
            });
        });
    });
}

function convert(data){
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