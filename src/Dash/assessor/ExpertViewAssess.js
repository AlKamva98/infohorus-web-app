import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useHistory} from 'react-router-dom'
import { API, Storage } from 'aws-amplify';
import {Formik, Form, FieldArray} from 'formik'
import {Button, Container} from 'react-bootstrap'
import * as queries from "../../graphql/queries"
import {questions} from '../../testData/Quests'
import {ExportJsonCsv} from 'react-export-json-csv'

function ExpertViewAssess (props){
  // const initialFormState =[{assessAns:"",assessComment:""}];
  const { userId } = props.location.state;
  // const [formState, updateFormState] = useState(initialFormState)
  const [Answers, setAnswers] = useState()
  const [formValues, setFormValues]= useState(null)
  const history = useHistory()
  const [uploadedAssessAns, setUploadedAssessAns] = useState();
  const assessAnsDoc = useRef(null)
  const Papa = require('papaparse')
  
const headers = [
  {
    key: 'question',
    name: 'Question',
  },
  {
    key: 'answer',
    name: 'Answer',
  },
  {
    key: 'qnum',
    name: 'Question Number',
  },

]

const memoizedHandleDoc = useCallback((doc)=>() => {
  const downloadDocument = async (doc)=>{
  if(doc.endsWith(".pdf")){
   await Storage.get(doc, {download: true}).then(data => {
                        data.Body.text().then(data2 => {
                          convert(data2.substr(28));
                        })
                    }).catch(err =>{
                      console.log("Download Document Error::::", err)
                      console.error(err, err.stack);
                    });
}}    
  downloadDocument(doc);
 },
    [] // Tells React to memoize regardless of arguments.
);

  
  
  const onSubmit = async (data ) =>{    
    console.log("This is the data from the form", data)
    saveAssessorData(data)
    //  let rep= createReport().then(()=>{
    //           updateReportCreated(true)
    //           })
    
              history.push('/dash/recommendations', {assess: uploadedAssessAns.data, client: Answers , userId:userId})
    
  }
  function readFile(){
    assessAnsDoc.current.click();
    let assessAns = assessAnsDoc.current;
    console.log("file read", assessAns)
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    
    // let assessAnsJson = Papa.parse(file, { delimiter: ',', header:true});
  Papa.parse(file, {  header:true,dynamicTyping: true,
      complete: function (results) {
          debugDataset(results);
          renderDataset(results);
      } });
  };

  
function debugDataset(dataset) {
  JSON.stringify(dataset, null, 2);
  // $("<div class='parse'></div>").text(formatted).appendTo(".graphcontainer");
}

function renderDataset(dataset) {
  console.log("this is the csv converted into json", dataset)
  setUploadedAssessAns(dataset)
  // render code here...
}

//   const selectOptionsAss = [
//     {value: "Yes", label: "Yes"},
//     {value: "No", label: "No"},]  
//   async function createReport (){
//     try{ 
      
//     let report = await API.graphql(graphqlOperation(
//     mutations.createAssessorReport, {
//       input: {
//       ID:userId,
//       isComplete: false
//           }
//         }
//         ));
//         return report;
//       }catch(err){
//         console.log("Report upload error", err)
//       }
// }
// async function updateReport(data, done){
//     await API.graphql(graphqlOperation(mutations.updateAssessorReport,{
//     input:{
//       id: rep.id,
//       assrssorComment: data,
//       assessmentResult:data,
//       isCompleted: done,
//       _version: rep._version
//     }
//   }))
// }

let questionnaire;
let answers =[];

 useEffect(()=>{
     getAnswersbyQuestionnaire().then(answerData =>{
        answerData.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0))
        setAnswers(answerData);
            }).finally(()=>{
          
            })
},[])


  let storageName = "assessor_data"

    function saveAssessorData(result) {
        let data = result;
        console.log("Saved data is", data);
        window.localStorage.setItem(storageName, JSON.stringify(data))
    }


async function getAnswersbyQuestionnaire(){
try{
  console.log("The system is retrieving the questionaire answers!");
  let questionnaires = await API.graphql({query: queries.listQuestionnaires});//gets questionnaires
  let questionnairelist =questionnaires.data.listQuestionnaires.items;//stores questionnaires into an array
  let listanswers = await API.graphql({query: queries.listAnswers});// gets all the answers
  let answerslist= listanswers.data.listAnswers.items;//stores them in an array
  let i;

  for(let qnaire in questionnairelist) {//for loop that goes through the array in search of the qnaire of chosen user
    console.log("Questionnaire ID::::", questionnairelist[qnaire] )
    if(userId=== questionnairelist[qnaire].userId){//gets questionnaire by id
    questionnaire = questionnairelist[qnaire].id
    console.log("Questionnaire ID::::", questionnaire)
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
      console.log(answers)
    return answers;
}catch(err){
  console.log("error",err)
}
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


const initialValues= {assessForm:[{assessAns:"",assessComment:"", qName:""}]}
const savedValues= window.localStorage.getItem(storageName);
 return (
   <>
<Container>
<h4 className="text-center display-4">Customer Answers</h4>
<span>Click on Export to csv to get .pdf/.xls file of the  </span>
</Container>
<div>
  <ExportJsonCsv headers={headers} items={Answers} fileTitle={"User data"}>Export to CSV</ExportJsonCsv>
  </div>
  <div>
    <Button onClick={readFile}>Upload Assessor Answers</Button>
    <input type='file' id='assessAns' onChange={handleFileChange} ref={assessAnsDoc} style={{display:'none'}}/>
  </div>
{<Formik
 initialValues={formValues||initialValues}
 onSubmit={onSubmit}  
 enableReinitialize
>
{({ values, handleBlur, handleChange, handleSubmit})=>(
  <Form onSubmit={handleSubmit} className="py-3">
    <button type="button" onClick={()=>{ setFormValues(savedValues) }}>Load saved data</button>
  <FieldArray name="assessForm">{
    arrayHelpers =>(
    <div>
        {Answers &&(Answers.map((val, index) => {
          const isDoc = val.answer.endsWith(".pdf");
        return(
            <div key={index}>
          <div className="flex flex-col mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{val.qnum}</h3>
            <p className="text-xl font-semibold text-gray-900">Question type: {val.qname}</p>
            <p className="text-xl font-semibold text-gray-900">Q: {val.question}</p>
            <span className="text-xl font-semibold text-gray-900">A:{!isDoc ? (val.answer): <p className="btn btn-link pe-auto hover:text-blue-600" id={`${val.qname}`} onClick={memoizedHandleDoc(val.answer)}>{val.answer}</p> }</span>
            </div>
            
            </div>
            
           
           )
          }))}
          <Button type="submit" >Submit</Button>
    </div>
    )

}
</FieldArray>
  </Form>
)
}
</Formik>}
    
  </>)
  
  }


  export default ExpertViewAssess;