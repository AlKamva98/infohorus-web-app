import {Header} from '../../components/index/Header';
import Select  from 'react-select';
import {useForm, Controller } from "react-hook-form";
import {selectOptionsCountry} from '../../testData/selectOptions'
import Footer from '../../components/index/Footer';
import React,{useState} from 'react'
import { Amplify, API, Auth, Storage,graphqlOperation } from 'aws-amplify';
const awsConfig = require('../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


export const Demo = () => {
 const initialFormState = {
        email:"", fname:"", country:"",organisation:"", jobtitle:"",phone:"", agreement:"",marketing:""
    };
    const [formState, updateFormState] = useState(initialFormState);
    const { errors, control } = useForm();
   function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
    
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }


  return (
  <>
 <Header/>
 <div className="bg-cover bg-no-repeat bg-center bg-demo">
   <section className="w-full opacity-80 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
               <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <div className="relative">
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
     <li >… and a lot more all in one place</li>
    </ul>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">See for yourself by filling out the form to schedule a free demo customized to your specific organization.</p>
                  
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
  <h4 className="w-full text-3xl font-bold">Request Demo</h4>
  <h5 className="w-full text-base ">Complete the form below and a representative will be in touch shortly to discuss your trial.</h5>
  <form className="w-full mt-10 pb-3 space-y-8"  method="POST">
    
    <input type="text" onChange={onChange} name="fname" className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Name" required />
        
    <input type="text" onChange={onChange} className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="organisation" placeholder="Company" required />
    <input type="text" onChange={onChange} className=" w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="jobtitle" placeholder="Job title" required />
    <input type="text" onChange={onChange} name="email" className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Email Address" required />
    <input type="tel" className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="phone" placeholder="Phone" required />
    <Controller name="country" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" control={control} as={Select} onChange={onChange} options={selectOptionsCountry} defaultValue="Country" />
    <p style={{color: 'grey'}}><span><input type="checkbox" onChange={onChange} name="agreement" required /></span> I agree to the <a href="bahati-tech-complete-online-privacy-statement (1).pdf" target="blank">Subscription Agreement.</a></p>
    <p className=" text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">By registering, you agree to the processing of your personal data by <a href="http://bahatitech.co.za" target="_blank">Bahati Tech</a> as described in the <a href="bahati-tech-complete-online-privacy-statement (1).pdf" target="blank">Privacy Statement.</a></p>
    <p className=" text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl"><span><input type="checkbox" name="marketing" onChange={onChange} /></span> Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.
    </p>
     <div className="relative">
            <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Request Demo</button>
                                   </div>
  </form></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
  </div>
    </>
 )
}

 