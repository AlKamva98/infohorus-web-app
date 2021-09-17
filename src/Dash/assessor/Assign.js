import React,{useState} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import Select  from 'react-select';
import {TaskPopUp} from './Modal';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import { Redirect } from 'react-router';

  function Assign(props) {
    const {tasks, userId,assess} = props.location
    let rec;
    const [back, setBack] = useState(false)
    const selectImp = [
      {value: "High", label: "High"},
      {value: "Medium", label: "Medium"},
      {value: "Low", label: "Low"}]
      const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: ", errors)};
    const handleRegistration = async (data) =>{ 
     saveData(data).then(rec=>{
      console.log("This is the recommendations",rec)
      setBack(true)
     })
    };
    
      function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach(function(prop) {
    delete result[prop];
  });
  return result;
}

async function saveData(data){
   try{
      console.log("This is the data from the form", data)
     rec = await API.graphql({query: mutations.createRecommendations, variables:{input:{
      recName:data.recName,
      recDesc:data.recDesc,
      recDuration:data.recDuration,
      isApproved: false,
      userID: userId,
        } } });
        return rec;
      }
      catch(err){
        console.log("API err:", err )
        }

}

 return (
 <div>
 <Container className="container-fluid">
    <Row>
       <Col id="subDiv2" className="mx-auto w-1/2">
            <Card className="mx-auto mb-4 mt-4 bg-light w-3/4 shadow" >
                <Card.Body>
        <h2 className="mb-3 fw-normal text-center text-2xl fw-bold">Add Recommendation</h2>
        <h4 className="mb-3 fw-normal text-center">Please Fill in the following fields: </h4>

      <Form className="row g-3 m-4 p-4" onSubmit={handleSubmit(handleRegistration, handleError)}> 
        <FormGroup className="col-md-12">
            <Label for="recName" className="visually-hidden" >Recommendation</Label>
            <Controller  type="text" control={control} name="recName"   {...register("recName" )} render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Recommendation" 
          {...field} />
        )} rules={{ required: "Please fill in the Recommendation Name"}}  />
        </FormGroup>

        <FormGroup className="col-md-12">
            <Label for="recImp" className="visually-hidden" >Importance</Label>
            <Controller name="recImp"   control={control} render={({ field }) => (
              <Select placeholder="Importance" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={selectImp} defaultValue="Select the Importance" {...field}>
                </Select>
            )}   {...register("recImp")}  rules={{ required: "Please Select the recommendation's importance"}} /> 
        </FormGroup>
            
               <FormGroup className="col-md-12">
            <Label for="email" className="visually-hidden">Recommendation description</Label>
            <Controller control={control} render={({ field }) => (
              <Input type="textarea" rows="4" className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
              placeholder="Recommendation description" 
              {...field} />)}  name="recDesc"  {...register("recDesc" )} rules={{required:"Recommendation description is required"}} />
               </FormGroup>
            
              {tasks && tasks.map((val, index) =>{
              index++;
              return(
              <div> 
              <h4>{`Task ${index}`}</h4>
              <p>{`Task Name ${val.taskName}`}</p>
              <p>{`Task Duration ${val.taskDuration}`}</p>
              </div>
              )})
              }
            <FormGroup className=" col-md-3">
            <Button onClick={toggle} className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">Add Task</Button>
            </FormGroup>
            <FormGroup className=" col-md-3">
            <Button type="submit" className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">Submit</Button>
            </FormGroup>
        </Form>
        </Card.Body>
            </Card>
    </Col>
    </Row>
    {back && <Redirect to={{pathname: "/dash/recommendations" ,rec: rec, assess: assess}}/>}
    </Container>
     <TaskPopUp
title="Tasks"
body="Add a new Task" 
btnTxtPositive="Cancel"
btnTxtNegative="Add"
popupType="two-btns"
bg=""
tasks={tasks}
toggle={toggle}
isOpen={modal}
/>

</div>
 )
}
  
export default Assign;