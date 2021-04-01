import React from 'react';
import{Container, Col} from 'react-bootstrap'
import {SurveyJS} from './SurveyJS';
import Header from '../Header';
import './questions.css';

 function QuestionsComp(props){
   const {
    buttonLabel,
    className
  } = props;
   
 return(<>
 <Header/>
      <Container className =" overflow-hidden p-5  bg-light">
        <Col className="col-md-12">
        <h3>Please fill in the following questionnaire</h3><br/>
        </Col>
        <SurveyJS/>
        
    
    </Container>
    </>
 )
}

export default QuestionsComp;