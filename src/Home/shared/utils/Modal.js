import React from 'react'
import {Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

export function PopUp (props) {
 
  const {popupType, title, head,tasks,body, isOpen, toggle ,btnTxtPositive, btnTxtNegative, bg, btnNegativeLink,className} = props;
  return(
  <div>
   <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader className="font-extrabold text-xl mx-4 text-gray-800" toggle={toggle}>{title}</ModalHeader>
        <ModalBody className={"mx-4 bg-cover bg-no-repeat bg-center "+`${bg}`}><div className=" w-full h-full mx-auto px-12 py-12 bg-white opacity-90"><h4 className="text-bold text-lg">{head}</h4><p className="text-semibold text-lg">{body}</p> <p className="text-semibold text-lg">{tasks}</p></div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={toggle}>{btnTxtPositive}</Button>
          { popupType==="two-btns" ? <Link to={btnNegativeLink}><Button className="btn btn-outline-secondary" >{btnTxtNegative}</Button></Link> : null}
        </ModalFooter>
      </Modal>
  </div>)
 
}
