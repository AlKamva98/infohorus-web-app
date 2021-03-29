import React, {useState} from 'react';
import {Form, Accordion, Button, Container, Card} from 'react-bootstrap';
import {API, graphqlOperations} from 'aws-amplify'
import {graphqlMutations} from 'aws-appsync-react'
import {graphql, compose} from 'react-apollo'
import QuestionsList from '../../testData/QuestionsList.json';
import './questions.css'
import {SurveyJS} from './SurveyJS'
import { RnCquest } from './RnCquest';



function QAccordion(){

  // async arrow function to get questions from the DynamoDB 

 let [question, setQuestion] = useState([]);
let [qNum, setQNum] = useState(0);
   const [showFollowupQs, setShowFollowupQs] = useState(false);
    

    
 return(
    <Accordion className="accordion" defaultActiveKey="0">
  <div>
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Question 1 of 17
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
    <Card.Body>
      <RnCquest/>
     </Card.Body>
    </Accordion.Collapse>
  </Card>
    </div>
</Accordion>
  );
}

export default QAccordion;


 
{/*
   <div>
  {QuestionsList.map((questitem, index)=>{
    return (<>
     <div>
      <label className="label" id ="mainQ" key={index}>{questitem.mainquest}</label>
      </div><br/>
      <div className="radio">
      <input className="rd" type="radio" value="Yes" name="Qmain" /> Yes
      <input className="rd" type="radio" value="No" name="Qmain" /> No
      </div>
      <div>
      <label className="label" id ="mainQ" key={index}>{questitem.questa}</label>
      </div><br/>
      <div>
      <input type="text" className="form-control" id="inName" placeholder="James Dunne"/>
      </div>

    </>
    )
  })}
</div> */}

 //useEffect(() => {//Every time the app renders it will fetch the questions
  //   fetchquestions();
  //   },[]/**create an empty array so that the useEffect only fetches the questions once each time the page renders*/)

  //    const fetchquestions = async ( ) =>{
       
  //   try {
  //     const questionData = await API.graphql(graphqlOperation(listQuestionss));//to get data from the graphQL database
  //     const questionList = questionData.data.listQuestionss.items;
  //     console.log('Questions list', questionList);//to display the list of questionst
  //     setQuestions(questionList);
  //   } catch (error) {
  //      console.log("Error on fetching question",error);
  //   }
  // };
  //  

  // <Form >
  //     <div>
  //     <label className="label" name="mainQ" key={index.toString()}>{questitem.mainquest}</label>
  //     </div><br/>
  //     <div className="radio">
  //     <input className="rd" type="radio" value="Yes" name={"Qmain"+index.toString} onClick={() => setShowFollowupQs(true)} /> Yes
  //     <input className="rd"  type="radio" value="No" name={"Qmain"+index.toString} onClick={() => setShowFollowupQs(false)} /> No
  //     </div>
      
  //     {
  //       showFollowupQs ? (<FollowupQs/>)
  //         :(null )
  //     }
  //       <Container className="btndiv d-flex justify-content-between"> 
  //       <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
  //       <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
  //       </Container>
  //     </Form>