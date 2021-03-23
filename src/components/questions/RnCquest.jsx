import React,{useState} from 'react';
import {Container, Row,Column,Button} from 'react-bootstrap';
import {Form, FormGroup,Modal, ModalBody,ModalFooter,ModalHeader, Input,Label} from 'reactstrap'
import { useForm, Controller } from "react-hook-form";

export function RnCquest(){

  //instantiating the variables
  //const [isComplete, setIsComplete] = useState(false);
  
  const initialFormState = {     
    userid:"",answers:[], documents:[], isComplete: false, formType:"quest1"
    };
    
    let [count, setCount] = useState(1);
    let [percComplete, setPercComplete] = useState(Math.round((count/17)*100));
    const [formState, updateFormState] = useState(initialFormState);
    const {formType} = formState;
    let i = 1;
    let ansq1=[];
    let ansq2=[];
    let ansq3=[];
    let ansq4=[];
    let ansq5=[];
    let ansq6=[];
     //Functions
      const nextClicked=()=>{
     setCount(count+i);
    let q = "quest"+count;
     updateFormState(()=>({...formState, formType:q }))
     setPercComplete(Math.round((count/17)*100));
     console.log("The quetionnaire is "+ percComplete+"% complete")
     console.log("The question is:"+q);
    }
    const prevClicked=()=>{
      if(count!==0){
        setCount(count-1);
        let q = "quest"+count;
        updateFormState(()=>({...formState, formType:q }))
        setPercComplete(Math.round((count/17)*100));
     console.log("The quetionnaire is "+ percComplete+"% complete")
      console.log("The question is:"+q);
      }
    }

    function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

   function getPercDone(){
      return percComplete;
    }
   function getQuestNum(){
      return count;
    }


//useState for showing follow up questions
const [showFollowupQs, setShowFollowupQ1s] = useState(false);
const [showFollowupQ2s, setShowFollowupQ2s] = useState(false);
const [showFollowupQ3s, setShowFollowupQ3s] = useState(false);
const [showFollowupQ4s, setShowFollowupQ4s] = useState(false);
const [showFollowupQ5s, setShowFollowupQ5s] = useState(false);
const [showFollowupQ6s, setShowFollowupQ6s] = useState(false);
const [showFollowupQ7s, setShowFollowupQ7s] = useState(false);
const [showFollowupQ8s, setShowFollowupQ8s] = useState(false);
const [showFollowupQ9s, setShowFollowupQ9s] = useState(false);
const [showFollowupQ10s, setShowFollowupQ10s] = useState(false);
const [showFollowupQ11s, setShowFollowupQ11s] = useState(false);
const [showFollowupQ12s, setShowFollowupQ12s] = useState(false);
const [showFollowupQ13s, setShowFollowupQ13s] = useState(false);
const [showFollowupQ14s, setShowFollowupQ14s] = useState(false);
const [showFollowupQ15s, setShowFollowupQ15s] = useState(false);
const [showFollowupQ16s, setShowFollowupQ16s] = useState(false);
const [showFollowupQ17s, setShowFollowupQ17s] = useState(false);
 
//follow up question functions
const FollowupQ1s = () =>{
          return(
      <div className="followupQs"> 
      <Label className="label" name ="labelquestA">What is this person's name, title, and contact information?</Label><br/>
      <Input type="text" className="form-control" onChange={onChange} name="ans1A"/>    
      <Label className="label" id ="labelquestB">Does this individual have the authority to shutdown all systems during a cyber attack?</Label><br/>
      <Input type="text" className="form-control" onChange={onChange} name="ans1B"/>    
      <Label className="label" id ="labelquestC">If not, who has this authority?</Label><br/>
      <Input type="text" className="form-control" onChange={onChange} name="ans1C"/>
      </div>
          )};
const FollowupQ2s = () =>{
          return(
      <div className="followupQs"> 
      <Label className="label" name ="labelquest2A">Does it outline how employees should report suspicious activity?</Label><br/>
      <Input type="text" className="form-control" name="ans2A"/>    
      <Label className="label" id ="labelquest2B">Does it outline how information and updates regarding an attack will be shared internally and externally?</Label><br/>
      <Input type="text" className="form-control" name="ans2B"/>    
      <Label className="label" id ="labelquest2C">Has the communication plan been tested for effectiveness?</Label><br/>
      <Input type="text" className="form-control" name="ans12C"/>
      <label className="label" id ="labelquest2D">If so, can we see a copy of the results?</label><br/>
      <Input type="text" className="form-control" name="ans2D"/>
      </div>
          )};
          const FollowupQ3s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest3A">Have you already called on cyber security experts/advisors from outside your organizations in response to a cyber attack of any kind?</label><br/>
      <Input type="text" className="form-control" name="ans3A"/>    
      <label className="label" id ="labelquest3B">Please describe the attack and how cyber security experts/advisors from outside your organizations offered assistance</label><br/>
      <Input type="text" className="form-control" name="ans3B"/>  
      </div>
          )};
          const FollowupQ4s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest4A">If so, who is/was your contact in the government and what assistance did they provide?</label><br/>
      <Input type="text" className="form-control" name="ans4A"/>    
      <label className="label" id ="labelquest4B">Does your organisation have a private cybersecurity consultant on call?</label><br/>
      <Input type="text" className="form-control" name="ans4B"/>    
      <label className="label" id ="labelquest4C">Who is that?</label><br/>
      <Input type="text" className="form-control" name="ans4C"/>
      <label className="label" id ="labelquest4D">What assistance have they already provided?</label><br/>
      <Input type="text" className="form-control" name="ans4D"/>
      </div>
          )};
          const FollowupQ5s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest5A">What organizations?</label><br/>
      <Input type="text" className="form-control" name="ans5A"/>    
      <label className="label" id ="labelquest5B">What sort of relationship does your agency have with each of these partners?</label><br/>
      <Input type="text" className="form-control" name="ans5B"/>    
      
      </div>
          )};
          const FollowupQ6s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest6A">If so, what is the budget?</label><br/>
      <Input type="text" className="form-control" name="ans6A"/>    
      <label className="label" id ="labelquest6B">What has been spent on cybersecurity improvements each of the past three years?</label><br/>
      <Input type="text" className="form-control" name="ans6B"/>    
      <label className="label" id ="labelquestC">Is there a budget set aside for next fiscal year?</label><br/>
      <Input type="text" className="form-control" name="ans6C"/>
      </div>
          )};
          const FollowupQ7s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquestA">What is this person's name, title, and contact information?</label><br/>
      <Input type="text" className="form-control" name="ans7A"/>    
      <label className="label" id ="labelquest7B">Does this individual have the authority to shutdown all systems during a cyber attack?</label><br/>
      <Input type="text" className="form-control" name="ans7B"/>    
      <label className="label" id ="labelquest7C">If not, who has this authority?</label><br/>
      <Input type="text" className="form-control" name="ans7C"/>
      </div>
          )};
          const FollowupQ8s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest8A">Can we see the plan?</label><br/>
      <Input type="text" className="form-control" name="ans8A"/>    
      <label className="label" id ="labelquest8B">Does your organisation have cybersecurity insurance?</label><br/>
      <Input type="text" className="form-control" name="ans8B"/>    
      <label className="label" id ="labelquest8C">If so, can we see the policy?</label><br/>
      <Input type="text" className="form-control" name="ans8C"/>
      <label className="label" id ="labelquest8D">How did you decide to buy insurance?</label><br/>
      <Input type="text" className="form-control" name="ans8D"/>
      <label className="label" id ="labelquest8E">Can we know what amount is paid per year for the insurance?</label><br/>
      <Input type="text" className="form-control" name="ans8E"/>
      <label className="label" id ="labelquest8F">Who provides this insurance?</label><br/>
      <Input type="text" className="form-control" name="ans8F"/>
      <label className="label" id ="labelquest8G">Has your organisation received payments from this insurance?</label><br/>
      <Input type="text" className="form-control" name="ans8G"/>
      <label className="label" id ="labelquest8H">If so, please describe each instance and the amount received.</label><br/>
      <Input type="text" className="form-control" name="ans8H"/>
      <label className="label" id ="labelquest8I">If no insurance, why did you decided to not buy it?</label><br/>
      <Input type="text" className="form-control" name="ans8I"/>
      </div>
          )};
          const FollowupQ9s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest9A"> "mainquest": "Does your organisation install all operating software updates and patches in a timely manner?",
</label><br/>
      <Input type="text" className="form-control" name="ans9A"/>    
      <label className="label" id ="labelquest9B">How often is software updates? What is the process for installing updates?</label><br/>
      <Input type="text" className="form-control" name="ans9B"/>    
      
      </div>
          )};
const FollowupQ10s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest10A">Has your organisation assessed the short and long-term consequences of losing control of these assets?</label><br/>
      <Input type="text" className="form-control" name="ans10A"/>    
      <label className="label" id ="labelquest10B">Has your organisation made an effort to calculate the cost of  losing control of these critical assets for a few hours or a few days?</label><br/>
      <Input type="text" className="form-control" name="ans10B"/>    
      
      </div>
          )};
const FollowupQ11s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest11A">If yes, can we see the inventory list?</label><br/>
      <Input type="text" className="form-control" name="ans11A"/>    
      <label className="label" id ="labelquest11B">If not, what are the challenges to doing so?</label><br/>
      <Input type="text" className="form-control" name="ans11B"/>    
      
      </div>
          )};
const FollowupQ12s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest12A">If so, where and how are they backed up?</label><br/>
      <Input type="text" className="form-control" name="ans12A"/>    
      <label className="label" id ="labelquest12B">Who has access to the back ups (and how)?</label><br/>
      <Input type="text" className="form-control" name="ans12B"/>    
      <label className="label" id ="labelquest12C">Which of the organisation's data are not backed up/cannot be backed up and why?</label><br/>
      <Input type="text" className="form-control" name="ans12C"/>
      </div>
          )};
const FollowupQ13s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest13A">Who determines who has access?</label><br/>
      <Input type="text" className="form-control" name="ans13A"/>    
      <label className="label" id ="labelquest13B">What are the criteria for determining who is given access?</label><br/>
      <Input type="text" className="form-control" name="ans13B"/>    
      </div>
          )};
const FollowupQ14s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest14A">If so, what are the related risks?</label><br/>
      <Input type="text" className="form-control" name="ans14A"/>    
      <label className="label" id ="labelquest14B">Do you have an agreement to clarify who bears the responsibility if an attack happens through the external channels?</label><br/>
      <Input type="text" className="form-control" name="ans14B"/>    
      <label className="label" id ="labelquest14C">Can we see the agreements?</label><br/>
      <Input type="text" className="form-control" name="ans14C"/>
      </div>
          )};
const FollowupQ15s = () =>{
          return(
      <div className="followupQ15s"> 
      <label className="label" name ="labelquest15A">Do all employees know what  to do if there is such an attack?</label><br/>
      <Input type="text" className="form-control" name="ans15A"/>    
      <label className="label" id ="labelquest15B">Can we see the plan?</label><br/>
      <Input type="text" className="form-control" name="ans15B"/>    
      <label className="label" id ="labelquest15C">Have you tested the plan to assess its effectiveness?</label><br/>
      <Input type="text" className="form-control" name="ans15C"/>
      </div>
          )};
const FollowupQ16s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest16A">If yes, does your organisation have pre-approved negotiation procedures and ransom limits?</label><br/>
      <Input type="text" className="form-control" name="ans16A"/>    
      <label className="label" id ="labelquest16B">Can we see the cost/benefit analysis?</label><br/>
      <Input type="text" className="form-control" name="ans16B"/>    
      <label className="label" id ="labelquest16C">Who is in charge of such a negotiation?</label><br/>
      <Input type="text" className="form-control" name="ans16D"/>
      <label className="label" name ="labelquest16D">Has this happened yet at your agency?</label><br/>
      <Input type="text" className="form-control" name="ans16D"/>
      </div>
          )};
const FollowupQ17s = () =>{
          return(
      <div className="followupQs"> 
      <label className="label" name ="labelquest17A">Does your agency have an incident review process?</label><br/>
      <Input type="text" className="form-control" name="ans17A"/>    
      <label className="label" id ="labelquestB">Can we see the incident review plan?</label><br/>
      <Input type="text" className="form-control" name="ans17B"/>    
      </div>
          )};

//render          
return(<>
    { formType === 'quest1' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ1" >Does your organisation have someone in charge of cybersecurity?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q1main" onClick={() => setShowFollowupQ1s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q1main" onClick={() => setShowFollowupQ1s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQs ? (<FollowupQ1s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
   
    { formType === 'quest2' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ2" >Does your organisation have a  communication plan for a cyberattack?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q2main" onClick={() => setShowFollowupQ2s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q2main" onClick={() => setShowFollowupQ2s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ2s ? (<FollowupQ2s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest3' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ3" >Has your organisation been in touch with cyber security experts/advisors from outside your organizations regarding your planned response to a cyber attack?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q3main" onClick={() => setShowFollowupQ3s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q3main" onClick={() => setShowFollowupQ3s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ3s ? (<FollowupQ3s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest4' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ4" >Has your organisation reached out to the government to discuss your cybersecurity plan and capabilities?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q4main" onClick={() => setShowFollowupQ4s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q4main" onClick={() => setShowFollowupQ4s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ4s ? (<FollowupQ4s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest5' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ5" >Are there other local, regional, and national organizations your agency collaborates with to enhance your ability to avoid or deal with a cyberattack?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q5main" onClick={() => setShowFollowupQ5s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q5main" onClick={() => setShowFollowupQ5s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ5s ? (<FollowupQ5s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest6' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ6" >Does your organisation have a specific annual budget line item for cybersecurity?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q6main" onClick={() => setShowFollowupQ6s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q6main" onClick={() => setShowFollowupQ6s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ6s ? (<FollowupQ6s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest7' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ7" >Does your organisation require cybersecurity awareness and best practices training for all new employees?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q7main" onClick={() => setShowFollowupQ7s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q7main" onClick={() => setShowFollowupQ7s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ7s ? (<FollowupQ7s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest8' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ8" >Does your organisation have a detailed plan for dealing with the financial burdens a cyberattack might create?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q8main" onClick={() => setShowFollowupQ8s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q8main" onClick={() => setShowFollowupQ8s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ8s ? (<FollowupQ8s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest9' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ9" >Does your organisation install all operating software updates and patches in a timely manner?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q9main" onClick={() => setShowFollowupQ9s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q9main" onClick={() => setShowFollowupQ9s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ9s ? (<FollowupQ9s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest10' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ10" >Has your organisation identified which systems are critical to the agency's operations?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q10main" onClick={() => setShowFollowupQ10s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q10main" onClick={() => setShowFollowupQ10s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ10s ? (<FollowupQ10s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest11' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ11" >Has your organisation inventoried of its physical devices, systems, software platforms, and applications?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q11main" onClick={() => setShowFollowupQ11s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q11main" onClick={() => setShowFollowupQ11s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ11s ? (<FollowupQ11s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest12' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ12" >Are all organisations data systems securely backed up?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q12main" onClick={() => setShowFollowupQ12s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q12main" onClick={() => setShowFollowupQ12s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ12s ? (<FollowupQ12s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest13' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ13" >Is access to critical systems carefully managed with only those who require access given access?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q13main" onClick={() => setShowFollowupQ13s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q13main" onClick={() => setShowFollowupQ13s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ13s ? (<FollowupQ13s/>):(null )}
       <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest14' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ14" >Are there services and assets that depend on external entities (i.e. outsourcing, vendors, etc.) that pose cyberattack risks?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q14main" onClick={() => setShowFollowupQ14s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q14main" onClick={() => setShowFollowupQ14s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ14s ? (<FollowupQ14s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest15' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ15" >Is there a comprehensive system shut  down plan in place in case of a ransomware attack?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q15main" onClick={() => setShowFollowupQ15s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q15main" onClick={() => setShowFollowupQ15s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ15s ? (<FollowupQ15s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest16' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ16" >Has your organisation conducted a cost-benefit analysis to determine whether the organisation should pay any ransom and negotiate with attacks to recover data?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q16main" onClick={() => setShowFollowupQ16s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q16main" onClick={() => setShowFollowupQ16s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ16s ? (<FollowupQ16s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Save & continue</Button>
        </Container>
      </Form>
    )}
    { formType === 'quest17' && 
    (<Form>
    <FormGroup>
      <label className="label" name="mainQ17" >Does your agency have an incident review process?</label>
      <FormGroup className="radio">
      <Input className="rd" type="radio" value="Yes" name="Q17main" onClick={() => setShowFollowupQ17s(true)} /> Yes
      <Input className="rd"  type="radio" value="No" name="Q17main" onClick={() => setShowFollowupQ17s(false)} /> No
      </FormGroup>
      </FormGroup>
      {showFollowupQ17s ? (<FollowupQ17s/>):(null )}
      <Container className="btndiv d-flex justify-content-between"> 
        <Button type ="button" className="btn btn-outline-secondary " onClick={prevClicked} name="prev" >Previous</Button>
        <Button type ="button" className="btn btn-success " onClick={nextClicked}  name="btnSubmit" >Submit Answers</Button>
        </Container>
      </Form>
    )}
      </>
 );
}