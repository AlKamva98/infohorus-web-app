import React, {useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { AnsCOLUMNS } from "./anscolumns.js";
import {Button, Container} from 'react-bootstrap'
import * as queries from "../graphql/queries"
import {Storage } from 'aws-amplify';
import {questions} from '../testData/Quests'
import API from '@aws-amplify/api'

import "./table.css"

export const ExpertViewAssess = (props) => {
const { state } = props.location;
const [checkbox1, setCheckbox1] = useState('');
const [datatable, setDatatable] = useState('');
const [hasAnswers, setHasAnswers] = useState(false)

let questionnaire;
let answers =[];
const handleCheckBox = (e) => {
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
    }

  });
  console.log("Questionnaire id is set to::::", questionnaire); 
  let listanswers = await API.graphql({query: queries.listAnswers});
  listanswers.data.listAnswers.items.map(function (ans) {
  if(questionnaire === ans.questionnaireID){
    console.log("The answer is::::", ans)
    console.log("The Question Id is::::", ans.questionID)
    questions.map(function (quest) {
                            let qid = String(quest.id);
                            if (qid.valueOf() === String(ans.questionID).valueOf()) {
                              ans.question =quest.question;
                              console.log("Question is:::", ans.question);    
                            }
                        });
    answers.push(ans);
  }
  });
  console.log("Answers set as::::", answers)
    return answers;
  }


async function downloadDocument(){
  var doc = checkbox1.answer;
  if(doc.endsWith(".pdf")){
   await Storage.get(doc, {download: true}).then(data => {
                        console.log("This is the data returned from the S3 bucket:::",data)
                        data.Body.text().then(data2 => {
                          console.log("This is the text that I get from the Blob:::",data2);
                            convert(data2.substr(28));
                        })

                    }).catch(err =>{
                      console.log("Download Document Error::::", err)
                      console.error(err, err.stack);
                    });
}}
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
          handleCheckBox(e);}}
          />)}
    </div>
    <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.answer)}</p>}
    </div>
  <Button onClick={downloadDocument}>Download</Button>
  </>)}