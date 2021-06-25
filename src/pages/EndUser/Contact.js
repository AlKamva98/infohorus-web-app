import React,{useState} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import {Header} from '../../components/index/Header';
import {PopUp} from '../../components/Modal.js'
import { useForm } from "react-hook-form";
import Footer from '../../components/index/Footer';
import './body.css';


 function Contact(){
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
try{
console.log(data, e)
toggle();
}
catch(err){
console.log("Email sending error",err)
}
};
  const onError = (errors, e) => console.log(errors, e);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const initialFormState = {
       fname:"", email:"", taMessage:""
    };
    const [formState, updateFormState] = useState(initialFormState);

    function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

 return(<>
 <Header/>
 <div className="bg-cover bg-no-repeat bg-center bg-contact">
   <section className="w-full opacity-80 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
               <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-5xl font-extrabold">Contact us</h4>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Name</label>
                    <input type="text" onChange={onChange} name="fname" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name" {...register("fname")} />
                    
                  </div>
                  
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Email</label>
                    <input type="text" onChange={onChange} name="email" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" {...register("email")} />
                  </div>
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Message</label>
                    <textarea type="text" onChange={onChange} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"placeholder="Message" name="taMessage" rows="4" {...register("taMessage")}/>
                  </div>
                  <div className="relative">
                    <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Submit</button>
                    
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <p className="mb-2 font-medium text-gray-700 uppercase"></p>
                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Contact Us</h2>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
  </div>
<PopUp
title="Message sent"
body="Thank you for your message, your message has been sent. A Bahati Tech employee will contact you shortly." 
btnTxtPositive="Okay"
bg="bg-contact"
toggle={toggle}
isOpen={modal}
/>
    </>
 )
}

export default Contact;