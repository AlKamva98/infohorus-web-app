import React from 'react'
import {Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

export function PopUp (props) {
 
  const {popupType, title, body, isOpen, toggle ,btnTxtPositive, btnTxtNegative,className} = props;
  return(
  <div>
   <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={toggle}>{btnTxtPositive}</Button>
          { popupType==="two-btns" ? <Link to="/register"><Button className="btn btn-outline-secondary" >{btnTxtNegative}</Button></Link> : null}
        </ModalFooter>
      </Modal>
  </div>)
 
}
