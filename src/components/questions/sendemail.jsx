import React from 'react';
import {Modal, Button, ModalDialog, Form, FormGroup,ModalBody, ModalFooter} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function SendEmail(){
 return(
  <Modal className="fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <ModalDialog  role="document">
    <div className="modal-content">
      <ModalHeader>
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <Button className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </FormGroup>
          <FormGroup>
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
        <Button class="btn btn-primary">Send message</Button>
      </ModalFooter>
    </div>
  </ModalDialog>
</Modal>

 ) 
}

export default SendEmail;