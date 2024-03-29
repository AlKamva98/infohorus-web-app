import {Input} from 'reactstrap';
import { ErrorMessage } from "@hookform/error-message";
import {useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import React,{useState} from 'react';
// import ReactPlayer from 'react-player';
import ReCAPTCHA from "react-google-recaptcha"; 
import {PopUp} from '../../shared/utils/Modal'
import {Link, useHistory} from 'react-router-dom';
import {sendEmail} from '../../shared/functions/AwsFuncs'
import * as queries from '../../../graphql/queries'
import { Amplify, API, Auth, Storage, graphqlOperation } from 'aws-amplify';
const awsConfig = require('../../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


 function Demo() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const history = useHistory();
    const [verified, setVerified] = useState(false);
    const { register, handleSubmit, getValues, reset, formState: { errors }, control } = useForm();
    const handleDemoReq = async (data) =>{ 
      try{
      getCreds().then((uCred)=>{
        sendEmail("Demo",data, uCred, "infohorus@bahatitech.co.za");
        toggle();
        reset({email:"", fname:"", country:"",organisation:"", jobtitle:"",phone:"",marketing:""});
      })
      console.log("This is the users data:"+JSON.stringify(data));
      console.log("Data sent to the API");
    history.push("/main/demov")  
    }
      catch(err){
        console.log("API err:", err )
      }
   };

   function onChange(value) {
     console.log("Captcha value:", value);
     setVerified(true);
   }
    async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
      return cred;
    }

  return (
  <>
 <div className="bg-cover bg-no-repeat bg-center bg-demo">
   <section className="w-full opacity-80 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
               <div className=" w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <div className="">
                      <h4 className="text-lg font-extrabold mr-10 pb-4 tracking-tight text-center text-gray-900 sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl">Get a Free Demo of Infohorus Ransomware Risk Management platform.</h4>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">See for yourself how Infohorus can help you improve, assess and improve your cybersecurity posture, build a collaborative cybersecurity culture across your organization and prepare to respond and recover from any attacks you may encounter.</p>
    <p className=" mx-8 text-base text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">Infohorus Ransomware Risk Management platform is everything you need to be able to:</p>
    <ul className="list-disc mx-12 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">
     <li>Manage your enterprise-level and business process-level risks that expose your organization to ransomware attacks</li>
     <li>Create a coordinated and collaborative cybersecurity program that includes every level of the organization.
     </li>
     <li>Benchmark your readiness in responding and dealing with a ransomware attack</li>
     <li>Track the implementation of actions required to address existing gaps in your program at a strategic and operational level</li>
     <li>Assign implementation actions to specific owners in different parts of your organization</li>
     <li >Present operational and executive reports</li>
     <p>… and a lot more all in one place</p>
    </ul>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">See for yourself by filling out the form to schedule a free demo customized to your specific organization.</p>
                  
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className=" flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
  <h4 className="w-full text-3xl font-bold">Watch Demo</h4>
  <h5 className="w-full text-base ">Complete the form below and a representative will be in touch shortly to discuss and schedule the demo.</h5>
  <form className="w-full mt-10 pb-3 space-y-8" onSubmit={handleSubmit(handleDemoReq)}>

    <Controller  type="text" control={control} name="fname"   {...register("fname" )} render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Name" 
          {...field} />
        )} rules={{ required: "Please fill in your name"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="fname" as="p" />
    
    
    <Controller  type="email" control={control} name="email"   {...register("email" )} render={({ field }) => (<Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Email" 
          {...field} />
          )} rules={{ required: "Please fill in your email address",validate: () => {
            if(getValues("email").includes("@gmail")|| getValues("email").includes("@yahoo")){
              return "Please enter your company email, not your personal email.";
            }
          }}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />
    <Controller  type="text" control={control} name="phone"   {...register("phone" )} render={({ field }) => (<PhoneInput className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Phone number(Optional)" 
          {...field} />
        )}   />
          <Controller  type="text" control={control} name="organisation"   {...register("organisation" )} render={({ field }) => (<Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
                placeholder="Company" 
                {...field} />
              )} rules={{ required: "Please fill in your company's name"}}  />
          <ErrorMessage errors={errors} className="err mb-4" name="organisation" as="p" />
    
  <p className=" text-sm pb-1 text-gray-800 sm:max-w-md md:max-w-2xl">Upon submission, <a href="http://bahatitech.co.za" target="_blank" rel="noreferrer">Bahati Tech</a> will collect the contact information provided and use it for future communications regarding our products and services. You may unsubscribe from these communications at anytime. Access our <Link to="privacy" target="blank">Privacy Statement.</Link> to review our commitment to protecting your privacy.  </p>
  <p className=" text-sm pb-4 text-gray-800 sm:max-w-md  md:max-w-2xl"><span><input type="checkbox" name="marketing" {...register('marketing', { required: false })}/></span> Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.
  </p>
  <div className="">
  <ReCAPTCHA
  sitekey="6LchGCkeAAAAAFvX1zSUSIxM80T1W9DatQBj8VAR"
  className="inline-block w-full px-5 py-4"
  onChange={onChange}/>  
  </div>
  <div className="">
  <button type="submit" disabled={!verified}  className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Watch Demo Video</button>
  </div>
  </form> 
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  </div>
   <PopUp
title="Demo Request sent"
body="Thank you for filling in your details, your demo request has been sent. A Bahati Tech employee will contact you to shedule the requested demo." 
btnTxtPositive="Okay"
bg=""
prev="/"
toggle={toggle}
isOpen={modal}
/>
    </>
 )
}


export default React.memo(Demo);