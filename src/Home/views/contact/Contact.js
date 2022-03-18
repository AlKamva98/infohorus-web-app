import React,{useState} from 'react';
import {Input} from "reactstrap";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {PopUp} from '../../shared/utils/Modal.js'
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha"; 
import { useForm, Controller } from "react-hook-form";
import * as queries from '../../../graphql/queries'
import {Amplify, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import {sendEmail} from '../../shared/functions/AwsFuncs'
const awsConfig = require('../../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)

function Contact(){
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
   
  const [verified, setVerified] = useState(false);
  const { register, handleSubmit, getValues,reset, formState: { errors }, control } = useForm();
  const onSubmit = async (data) =>{    
    try{
      getCreds().then((uCred)=>{
        sendEmail("Contact",data, uCred, "infohorus@bahatitech.co.za");
        toggle();
        reset({fname:"", email:"", phone:"", taMessage:""  });
      })
    }
      catch(err){
        console.log("API err:", err )
      }
    };
    

    async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
      return cred;
    }
    
    function onChange(value) {
      console.log("Captcha value:", value);
      setVerified(true);
    }
    

 return(<>
 <div className="bg-cover bg-no-repeat bg-center bg-contact">
   <section className="w-full opacity-80 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
               <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-5xl font-extrabold">Contact us</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Name</label>
                    <Controller type="text" control={control} name="name" render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Enter your Name" 
          {...field} />
        )} {...register("name")} rules={{required:"Name is required"}} />
                    <ErrorMessage errors={errors} className="err mb-4" name="name" as="p" />
                  </div>
                  
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Email</label>
                    <Controller type="text" control={control} name="email" render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Enter your email" 
          {...field} />
        )} {...register("email")} rules={{required:"Email is required", validate: () => {
          if(getValues("email").includes("@gmail")|| getValues("email").includes("@yahoo")){
              return "Please enter your company email, not your personal email.";
            }
            }}} />
                  <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />                   
                  </div>
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Phone</label>
                    <Controller  type="text" control={control} name="phone" render={({ field }) => (
          <PhoneInput className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:bg-whhite focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Enter your Phone number" 
          {...field} />
        )} {...register("phone")} rules={{required:"Phone Number is required"}} />
                  <ErrorMessage errors={errors} className="err mb-4" name="phone" as="p" />                   
                  </div>
          <div className="relative">
          <label className="font-semibold text-xl text-gray-900">Message</label>
          <Controller control={control} render={({ field }) => (
          <Input type="textarea" rows="4" className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Message" 
          {...field} />
          )} name="taMessage" {...register("taMessage")} rules={{required:"Message is required"}}/>
			    <ErrorMessage errors={errors} className="err mb-4" name="taMessage" as="p" />                  
          </div>
        
        <div className="relative">
        <ReCAPTCHA
        sitekey="6LchGCkeAAAAAFvX1zSUSIxM80T1W9DatQBj8VAR"
        className="inline-block w-full px-5 py-4"
        onChange={onChange}
        />  
        </div>
        <div className="relative">
        <button type="submit" disabled={!verified} className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Submit</button>            
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
      </div>
              <PopUp
              title="Message sent"
              body="Thank you for your message, your message has been sent. A Bahati Tech employee will contact you shortly." 
              btnTxtPositive="Okay"
              bg="bg-contact"
              prev="/"
              toggle={toggle}
              isOpen={modal}/>
    </>
 )
}

export default React.memo(Contact);