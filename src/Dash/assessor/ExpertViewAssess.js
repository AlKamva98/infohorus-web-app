import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom'
import {Input} from "reactstrap";
import { API, Storage } from 'aws-amplify';
import {Formik, Form, FieldArray, Field} from 'formik'
import {Button, Container} from 'react-bootstrap'
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"
import {questions} from '../../testData/Quests'


function ExpertViewAssess (props){
const initialFormState =[{assessAns:"",assessComment:""}];
const { state } = props.location;
// const addReport = mutations.createAssessorReport;
const [formState, updateFormState] = useState(initialFormState)
const [Answers, setAnswers] = useState()
const memoizedHandleDoc = useCallback((doc)=>() => {
      console.log('Click happened');
      downloadDocument(doc);

    },
    [], // Tells React to memoize regardless of arguments.
  );

  
  
  const onSubmit = async (data ) =>{    
    console.log("This is the data from the form", data)
  }
  
//   const selectOptionsAss = [
//     {value: "Yes", label: "Yes"},
//     {value: "No", label: "No"},]  
//   async function createReport (data){
//     try{
      
//     await API.graphql(graphqlOperation(
//     addReport, {
//       input: {
//       assrssorComment: data,
//       assessmentResult: data,
//       assessorID:data
//           }
//         }
//         ))
//       }catch(err){
//         console.log("Report upload error", err)
//       }
// }

let questionnaire;
let answers =[];

 useEffect(()=>{
     getAnswersbyQuestionnaire().then(answerData =>{
       console.log("mapping the answers.", answerData)
        answerData.sort((a,b) => (a.questionID > b.questionID) ? 1 : ((b.questionID > a.questionID) ? -1 : 0))
        setAnswers(answerData);
        console.log("These are the answers that have been read from the back end",Answers)
            }).finally(()=>{
            })
},[])




async function getAnswersbyQuestionnaire(){
try{
  console.log("The system is retrieving the questionaire answers!");
  let questionnaires = await API.graphql({query: queries.listQuestionnaires});//gets questionnaires
  let questionnairelist =questionnaires.data.listQuestionnaires.items;//stores questionnaires into an array
  let listanswers = await API.graphql({query: queries.listAnswers});// gets all the answers
  let answerslist= listanswers.data.listAnswers.items;//stores them in an array
  let i;
  console.log("The system has received the anwers from the back end", answerslist)

  for(let qnaire in questionnairelist) {//for loop that goes through the array in search of the qnaire of chosen user
    console.log("Questionnaire ID::::", questionnairelist[qnaire] )
    if(state.id === questionnairelist[qnaire].userId){//gets questionnaire by id
    questionnaire = questionnairelist[qnaire].id
    console.log("Questionnaire ID::::", questionnaire)
    }
  };
  console.log("The system has received the anwers from the back end", answerslist)

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
      console.log("The answer array list has been updated to the following:", answerslist)

    answers.push(answerslist[i]);
      }
      };
    return answers;
}catch(err){
  console.log("error",err)
}
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

function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }


 return (
   <>
<Container>
<h4 className="text-center display-4">Customer Answers</h4>
<span>Click on download to get .pdf/.xls file of the  </span>
</Container>
<Formik
 initialValues={{assessForm:[{assessAns:"",assessComment:"", qName:""}]}}
 onSubmit={onSubmit}
>
{({ values, handleChange, handleBlur, handleSubmit})=>(
  <Form onSubmit={handleSubmit} className="py-3">
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
            <div className="relative">
              <Field name={`assessForm.${index}.qName`} onChange={handleChange} placeholder="Enter Question type" className="block w-60  mt-2 text-xl placeholder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  type="input" as={Input}> 
            </Field>
            </div>
            <div className="relative">
              <Field name={`assessForm.${index}.assessAns`} onChange={handleChange} placeholder="Assessor's Answer" className="block w-60  mt-2 text-xl placeholder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  type="input" as={Input}> 
            </Field>
            </div>
            <div className="relative">
          <Field name={`assessForm.${index}.assessComment`} type="textarea" onChange={handleChange} rows="4" className="w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
            placeholder="Assessor's Comments" as={Input} /> 
          </div>
          <pre>{JSON.stringify(values.assessForm[index],null,2)}</pre>
            </div>
           
           )
          }))}
          <Link to={{pathname: "/dash/recommendations" ,assess: values,client: Answers}} ><Button type="submit" >Submit</Button></Link>
    </div>
    )

}
</FieldArray>
  </Form>
)
}
</Formik>
    
  
  </>)
  
  }

  export default ExpertViewAssess;