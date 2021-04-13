import React,{useState} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import Header from '../../components/Header';
import './body.css';


 function Contact(){
  const initialFormState = {
        email:"", jobtitle:"", company:"", formType:"signIn"
    };
    const [formState, updateFormState] = useState(initialFormState);
   function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
    
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

 return(<>
 <Header/>
<Container className="container-fluid bdy">
    <Row>
        <Col className="text-secondary order-md-2 mt-5 text-center">
            <h4 
            className="text-dark display-4">Contact us</h4>
            <p>All seed for cattle good which. Stars us saying grass morning spirit seed one fourth very said you sixth spirit. Created days.</p>
            <img className="img-fluid text-center"  src="./images/featurette.png" width="500" height="400" alt="vector"/>
            <p>Brought first let lesser appear that give two called forth fill. Firmament. Saying deep, abundantly blessed so. Itself said seed evening and air seed beast of fruitful, open.</p>
        </Col>
        
        
        <Col id="subDiv2" className="order-md-1">
            <Card className="mb-4 mt-4 bg-light shadow" >
                <Card.Body>
        <div className="m-auto">
        <Image className="d-block mx-auto mb-4 img-fluid" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
        </div>
        <h4 className="mb-3 fw-normal text-center"></h4>
       <Form>
       <FormGroup className="col-md-12">
            <Label for="fname" className="visually-hidden" >Full name</Label>
            <Input type="text"  className="form-control" onChange={onChange} name="fname" placeholder="Full Name" required autofocus/> 
            <div className="valid-feedback">
            </div>
        </FormGroup>
        
       <FormGroup className="col-md-12">
          <Label for="email" className="visually-hidden">Email address</Label>          
          <Input type="email" name="email" className="form-control"  onChange={onChange}  placeholder="Email" required />
       </FormGroup>
          
         <FormGroup className="col-12">
         <div class="form-outline">
         <label class="form-label" for="textAreaExample">Message</label>
         <textarea class="form-control" placeholder="Message" name="taMessage" rows="4"></textarea>
         </div>
         </FormGroup>
       
        <FormGroup className="mb-3 mx-auto">
        <Button type="submit" className="w-100 mt-5 btn btn-lg bg-primary shadow-sm">SUBMIT</Button>
        </FormGroup>
        </Form>
        </Card.Body>
        </Card>
    </Col>
    </Row>
    </Container>
    </>
 )
}

export default Contact;