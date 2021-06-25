import React from 'react'
import {Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

export function PopUp (props) {
 
  const {popupType, title, body, isOpen, toggle ,btnTxtPositive, btnTxtNegative, bg, btnNegativeLink,className} = props;
  return(
  <div>
   <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader className="font-extrabold text-xl mx-4 text-gray-800" toggle={toggle}>{title}</ModalHeader>
        <ModalBody className={"mx-4 bg-cover bg-no-repeat bg-center "+`${bg}`}><div className=" w-full h-full mx-auto px-12 py-12 bg-white opacity-90"><p className="text-semibold text-lg">{body}</p></div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={toggle}>{btnTxtPositive}</Button>
          { popupType==="two-btns" ? <Link to={btnNegativeLink}><Button className="btn btn-outline-secondary" >{btnTxtNegative}</Button></Link> : null}
        </ModalFooter>
      </Modal>
  </div>)
 
}
