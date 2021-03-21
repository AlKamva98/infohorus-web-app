import React from 'react';
import {Container, Row,Column,Button} from 'react-bootstrap';
import {Form, FormGroup,Modal, ModalBody,ModalFooter,ModalHeader, Input,Label} from 'reactstrap'
import { useForm, Controller } from "react-hook-form";

export function RnCquest(props){

const [showFollowupQs, setShowFollupQs] = useState(false);
 
return(<>
    <Form>
    <FormGroup>
      <label className="label" name="mainQ" key={props.index.toString()}>{}</label>
      
      <FormGroup className="radio">
      <input className="rd" type="radio" value="Yes" name="Qmain" onClick={() => setShowFollowupQs(true)} /> Yes
      <input className="rd"  type="radio" value="No" name="Qmain" onClick={() => setShowFollowupQs(false)} /> No
      </FormGroup>
      </FormGroup>
      
      {
        showFollowupQs ? (<FollowupQs/>)
          :(null )
      }

      </Form>
      </>
 );
}