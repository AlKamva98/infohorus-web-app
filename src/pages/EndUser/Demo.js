import {Header} from '../../components/index/Header';
import Select  from 'react-select';
import {useForm, Controller } from "react-hook-form";
import {selectOptionsCountry} from '../../testData/selectOptions'
import Footer from '../../components/index/Footer';
import {Input} from 'reactstrap';
import { ErrorMessage } from "@hookform/error-message";
import React,{useState} from 'react';
import {PopUp} from '../../components/Modal.js'
import {Link} from 'react-router-dom';
import * as queries from '../../graphql/queries'
import { Amplify, API, Auth, Storage, graphqlOperation } from 'aws-amplify';
const awsConfig = require('../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


export const Demo = () => {
 const initialFormState = {
        email:"", fname:"", country:"",organisation:"", jobtitle:"",phone:"",marketing:""
    };
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [formState, updateFormState] = useState(initialFormState);
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    //const handleError = (errors) => { console.log("Form Errors: ", errors)};
    const handleRegistration = async (data) =>{ 
      
      try{
        
        //console.log("Sending to the API")
        // await API.graphql(graphqlOperation(
        //   newusermut,{
        //     input:{
            
              
          
        //     }

        // }))
      getCreds().then((uCred)=>{
      
        sendEmail(data, uCred);
      })
      console.log("This is the users data:"+JSON.stringify(data));
      console.log("Data sent to the API");
	
      }
      catch(err){
        console.log("API err:", err )
      }
    };
   function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
    
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

    async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getUser, { id: 'ak100' }));
      return cred;
    }
function sendEmail(data, uCred) {
  

       const AWS = require("aws-sdk");
  
        const cred = new AWS.Credentials({
            accessKeyId: uCred.data.getUser.first_name,
            secretAccessKey: uCred.data.getUser.last_name,
            sessionToken: null
        });

        AWS.config.update({
            credentials: cred,
            region: 'eu-west-1',
            endpoint: 'email.eu-west-1.amazonaws.com'
        });

        // Create sendEmail params
        var params = {
            Destination: {
                ToAddresses: [
                    "hello@bahatitech.co.za",
                    /* more items */
                ]
            },
            Message: { /* required */
                Body: { /* required */
                    Html: {
                        Charset: "UTF-8",
                        Data: `<h3>Hi my name is  ${data.fname}!</h3><br/>\n` +
                            `<p>I would like to schedule a demo of infohorus. Here are my details:</p>` +
                            `<p>Email: ${data.email}</p>` +
                            `<p>Job Title: ${data.jobtitle}</p>` +
                            `<p>Company: ${data.organisation}</p>` +
                            `<p>Marketing: ${data.marketing}</p>` +
                            `<p>Phone: ${data.phone}</p>` +
                            `<p>I will be waiting for you to contact me.</p>` +
                            `<p></p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Demo Request'
                }
            },
            Source: "stefano@bahatitech.co.za", /* required */
            ReplyToAddresses: [
                "stefano@bahatitech.co.za",
                /* more items */
            ],
        };

        const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
        sendPromise.then(
            function (data) {
                toggle();
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });

    }

  return (
  <>
 <Header/>
 <div className="bg-cover bg-no-repeat bg-center bg-demo ">
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
     <p>… and a lot more all in one place</p>
    </ul>
    <p className=" mx-8 text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">See for yourself by filling out the form to schedule a free demo customized to your specific organization.</p>
                  
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
  <h4 className="w-full text-3xl font-bold">Request Demo</h4>
  <h5 className="w-full text-base ">Complete the form below and a representative will be in touch shortly to discuss and schedule the demo.</h5>
  <form className="w-full mt-10 pb-3 space-y-8" onSubmit={handleSubmit(handleRegistration)}>

    <Controller as={Input} type="text" control={control} name="fname" className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Name" {...register("fname" )} rules={{ required: "Please fill in your name"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="fname" as="p" />
    
    <Controller as={Input} type="text" control={control} className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="organisation" placeholder="Company" {...register("organisation")} rules={{ required:  "Please fill in your company's name"}}    />
    <ErrorMessage errors={errors} className="err mb-4" name="organisation" as="p" />
    
    <Controller as={Input} type="text" control={control} className=" w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="jobtitle" placeholder="Job title" {...register("jobtitle")}  rules={{ required:  "Please fill in your Job title"}} />
    <ErrorMessage errors={errors} className="err mb-4" name="jobtitle" as="p" />

    <Controller as={Input} type="text" control={control} name="email" className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Email Address" {...register("email")} rules={{ required: "Email is required" }}  />
    <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />

    <Controller as={Input} type="tel" control={control} className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" name="phone" placeholder="Phone" {...register("phone")} rules={{ required: "Please fill in your phone number"}} />
    <ErrorMessage errors={errors} className="err mb-4" name="phone" as="p" />

    <Controller name="country" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Country" control={control} as={Select} options={selectOptionsCountry} defaultValue="Country" {...register("country")}  rules={{ required: "Please Select your country"}} />
    <ErrorMessage errors={errors} className="err mb-4" name="country" as="p" />

    <p className=" text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl">By registering, you agree to the processing of your personal data by <a href="http://bahatitech.co.za" target="_blank" rel="noreferrer">Bahati Tech</a> as described in the <Link to="privacy" target="blank">Privacy Statement.</Link></p>
    <p className=" text-base pb-4 text-gray-800 sm:max-w-md lg:text-lg md:max-w-2xl"><span><input type="checkbox" name="marketing" onChange={onChange} {...register('marketing', { required: false })}/></span> Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.
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
<PopUp
title="Demo Request sent"
body="Thank you for filling in your details, your demo request has been sent. A Bahati Tech employee will contact you to shedule the requested demo." 
btnTxtPositive="Okay"
bg="bg-demo"
toggle={toggle}
isOpen={modal}
/>
    </>
 )
}

 