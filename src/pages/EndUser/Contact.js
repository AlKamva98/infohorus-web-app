import React,{useState} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import {Header} from '../../components/index/Header';
import Footer from '../../components/index/Footer';
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
 <div>
   <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
               <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">Contact us</h4>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-medium text-gray-900">Name</label>
                    <input type="text" onChange={onChange} name="fname" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name" />
                  </div>
                  
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input type="text" onChange={onChange} name="email" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Message</label>
                    <textarea type="text" onChange={onChange} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"placeholder="Message" name="taMessage" rows="4"/>
                  </div>
                  <div className="relative">
                    <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Submit</button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <p className="mb-2 font-medium text-gray-700 uppercase"></p>
                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Contact Us</h2>
                  </div>
                  <p className="text-lg text-gray-700 pb-4">Brought first let lesser appear that give two called forth fill. Firmament. Saying deep, abundantly blessed so. Itself said seed evening and air seed beast of fruitful, open.</p>
                  <img className="img-fluid text-center pb-4"  src="./images/jumbobg.png" width="500" height="400" alt="vector"/>
                  <p className="text-lg text-gray-700">All seed for cattle good which. Stars us saying grass morning spirit seed one fourth very said you sixth spirit. Created days</p>
                  
                </div>
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

export default Contact;