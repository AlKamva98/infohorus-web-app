import React from 'react'
import {Form, FormGroup, Input, Label} from 'reactstrap'

export const FollowupQs = (props) =>{
          return(
      <Form className="followupQs"> 
      <FormGroup>
      <Label className="label" name ="labelquestA"  key={props.index.toString() }> {props.questitem.questa}</Label>
      <Input type="text" className="form-control" id={ansA} />    
      </FormGroup>
      <FormGroup>
      <Label className="label" name ="labelquestB" key={props.index.toString()}>{props.questitem.questb}</Label>
      <Input type="text" className="form-control" />    
      </FormGroup>
      <Label className="label"name="labelquestC" key={index.toString()}>{questitem.questc}</Label>
      <Input type="text" className="form-control" id={ansC} />    
      </Form>
          )};
