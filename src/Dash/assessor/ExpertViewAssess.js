import React, {useState, useEffect} from 'react';
import Select  from 'react-select';
import {Input} from "reactstrap";
import {PopUp} from '../../Home/shared/utils/Modal.js'
import { useForm, Controller } from "react-hook-form";
import {Button, Container} from 'react-bootstrap'
import * as queries from "../../graphql/queries"
import {Storage } from 'aws-amplify';
import {questions} from '../../testData/Quests'
import API from '@aws-amplify/api'


function ExpertViewAssess (props){
const { state } = props.location;
const [checkbox1, setCheckbox1] = useState('');
const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
const [hasAnswers, setHasAnswers] = useState(false)
const [Answers, setAnswers] = useState()
const { register, handleSubmit,reset, formState: { errors }, control } = useForm();
const selectOptionsAss = [
     {value: "Yes", label: "Yes"},
      {value: "No", label: "No"},]  
const onSubmit = async (data) =>{    
console.log("This is the data from the form", data)
  }

let questionnaire;
let answers =[];
const handleCheckBox = (e) => {
    // console.log('SHOWLOGS:::', e);
     setCheckbox1(e);
 };
 let data;
useEffect(()=>{
     getAnswersbyQuestionnaire().then(answerData =>{
        //console.log("answer data is::::", answerData);
        answerData.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0))
       // console.log("answer data sorted is::::", answerData);
        setAnswers(answerData);
            setHasAnswers(true);
      //      console.log("Has answers is::::", hasAnswers);
        //    console.log(" answers is::::", Answers);
            }).finally(()=>{
            })
},[])




async function getAnswersbyQuestionnaire(){

  let questionnaires = await API.graphql({query: queries.listQuestionnaires});//gets questionnaires
  let questionnairelist =questionnaires.data.listQuestionnaires.items;//stores questionnaires into an array
  let listanswers = await API.graphql({query: queries.listAnswers});// gets all the answers
  let answerslist= listanswers.data.listAnswers.items;//stores them in an array
  let i;


  for(let qnaire in questionnairelist) {//for loop that goes through the array in search of the qnaire of chosen user
    if(state.id === questionnairelist[qnaire].userId){//gets questionnaire by id
    questionnaire = questionnairelist[qnaire].id
    }
  };

  for( i in answerslist) {//loops through answers array
  if(questionnaire === answerslist[i].questionnaireID){//gets all answers with specific qnaire id
    for (let quest in questions) {
      let qid = String(questions[quest].id);
        if (qid.valueOf() === String(answerslist[i].questionID).valueOf()) {
          answerslist[i].question= questions[quest].question;
          answerslist[i].qname = questions[quest].questionName;
          answerslist[i].qnum = questions[quest].questionNum;
        }
      };
    answers.push(answerslist[i]);
      }
      };
    return answers;
  }


async function downloadDocument(doc){
  console.log("This is the document name:::",doc)
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
function handleForm(index, event) {
    
}


 return (
   <>
<Container>
<h4 className="text-center display-4">Customer Answers</h4>
<span>Click on download to get .pdf/.xls file of the  </span>
</Container>
<div className="py-3">
<div>{Answers &&(Answers.map((val, i) => {
          const isDoc = val.answer.endsWith(".pdf");
          return(
          <>
          <form key={i} onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div  className="flex flex-col mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{val.qnum}</h3>
            <p className="text-xl font-semibold text-gray-900">Question type: {val.qname}</p>
            <p className="text-xl font-semibold text-gray-900">Q: {val.question}</p>
            <span className="text-xl font-semibold text-gray-900">A:{!isDoc ? (val.answer): <p class="btn btn-link pe-auto hover:text-blue-600" id={`${val.qname}`} onSubmit={()=>{console.log("you clicked ",val.answer)}}>{val.answer}</p> }</span>
            </div>
            <div>
            <div className="relative">
            <Controller name="assAns"   control={control} render={({ field }) => (
              <Select placeholder="Assessor's Answer" className="block w-60  mt-2 text-xl placeholder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={selectOptionsAss} {...field}>
                </Select>
            )}   {...register("assAns")}  rules={{ required: "Please Select your Answer"}} />
            </div>
            <div className="relative">
          <Controller control={control} render={({ field }) => (
          <Input type="textarea" rows="4" className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Assessor's Comments" 
          {...field} />
          )} name="taAssNotes" {...register("taAssNotes")} />
			                     
          </div>
            </div>
            <Button onSubmit={toggle} >submit</Button>
            </form>
            <PopUp
              title="Assessment Report"
              body="The question assessment has been recorded." 
              btnTxtPositive="Okay"
              bg="bg-contact"
              toggle={toggle}
              isOpen={modal}/>
            </>
          )
        }))}</div>
    </div>
    <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.answer)}</p>}
    </div>
  <Button onClick={downloadDocument}>Download</Button>
  </>)}

  export default ExpertViewAssess;