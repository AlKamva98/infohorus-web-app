import React,{useState} from 'react';
import {Input} from "reactstrap";
import {Header} from '../../components/index/Header';
import {Amplify, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import {PopUp} from '../../components/Modal.js'
import * as queries from '../../graphql/queries'
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha"; 
import { useForm, Controller } from "react-hook-form";
import Footer from '../../components/index/Footer';
import './body.css';
const awsConfig = require('../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)

function Contact(){
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
   
  const [verified, setVerified] = useState(false);
  const { register, handleSubmit,reset, formState: { errors }, control } = useForm();
  const onSubmit = async (data) =>{ 
    
    try{
      getCreds().then((uCred)=>{
        sendEmail(data, uCred);
        reset({fname:"", email:"", phone:"", taMessage:""  });
      })
      console.log("This is the users data:"+JSON.stringify(data));
      console.log("Data sent to the API");
    }
      catch(err){
        console.log("API err:", err )
      }
    };
    

    async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getUser, { id: 'ak100' }));
      return cred;
    }
    
    function onChange(value) {
      console.log("Captcha value:", value);
      console.log("Verified state is:", verified)
      setVerified(true);
      console.log("Verified state is:", verified)
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
                            `<p>${data.taMessage}</p><br/>\n` +
                            `<p>If you want to contact me to discuss this further, my email address is ${data.email} and my phone number is ${data.phone}.</p>` +
                            `<p>I will be waiting for you to contact me.</p><br/>\n` +
                            `<p></p><br/>\n` +
                            `<p>Kind Regards,</p>\n`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Contact Us message'
                }
            },
            Source: "hello@bahatitech.co.za", /* required */
            ReplyToAddresses: [
                "hello@bahatitech.co.za",
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

 return(<>
 <Header/>
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
                    <Controller type="text" as={Input} control={control} name="fname" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name" {...register("fname")} rules={{required:"Name is required"}} />
                    <ErrorMessage errors={errors} className="err mb-4" name="fname" as="p" />
                  </div>
                  
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Email</label>
                    <Controller as={Input} type="text" control={control} name="email" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" {...register("email")} rules={{required:"Email is required"}} />
                  <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />                   
                  </div>
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Phone</label>
                    <Controller as={Input} type="text" control={control} name="phone" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Phone number" {...register("phone")} rules={{required:"Phone Number is required"}} />
                  <ErrorMessage errors={errors} className="err mb-4" name="phone" as="p" />                   
                  </div>
                  
                  <div className="relative">
                    <label className="font-semibold text-xl text-gray-900">Message</label>
                    <Controller as={Input} type="textarea" control={control} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"placeholder="Message" name="taMessage" rows="4" {...register("taMessage")} rules={{required:"Message is required"}}/>
			<ErrorMessage errors={errors} className="err mb-4" name="taMessage" as="p" />                  
</div>
                  <div className="relative">
                    <ReCAPTCHA
                  sitekey="6LeW3GYbAAAAAHtVDnd1YtQDmMUOJT2vh5YXIbuD"
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