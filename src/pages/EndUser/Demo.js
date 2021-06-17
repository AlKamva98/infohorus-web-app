import {Header} from '../../components/index/Header';
import {Form} from '../../components/Form';
import Footer from '../../components/index/Footer';
import React from 'react'

export const Demo = () => {
 return (
  <div>
   <Header/>
   <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                      <h4 className="text-2xl font-extrabold mr-20 pb-4 tracking-tight text-center text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">Get a Free Demo of Infohorus Ransomware Risk Management platform.</h4>
    <p className=" mx-28 text-base pb-4 text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">See for yourself how Infohorus can help you improve, assess and improve your cybersecurity posture, build a collaborative cybersecurity culture across your organization and prepare to respond and recover from any attacks you may encounter.</p>
    <p className=" mx-28 text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">Infohorus Ransomware Risk Management platform is everything you need to be able to:</p>
    <ul className="list-disc mx-32 text-base pb-4 text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
     <li>Manage your enterprise-level and business process-level risks that expose your organization to ransomware attacks</li>
     <li>Create a coordinated and collaborative cybersecurity program that includes every level of the organization.
     </li>
     <li>Benchmark your readiness in responding and dealing with a ransomware attack</li>
     <li>Track the implementation of actions required to address existing gaps in your program at a strategic and operational level</li>
     <li>Assign implementation actions to specific owners in different parts of your organization</li>
     <li >Present operational and executive reports</li>
     <li >… and a lot more all in one place</li>
    </ul>
    <p className=" mx-28 text-base pb-4 text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">See for yourself by filling out the form to schedule a free demo customized to your specific organization.</p>
                  
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <Form formHead="Schedule Demo" formBtnText="Submit" />
            </div>
          </div>
        </div>
        </div>
      </section>
   <Footer/>
  </div>
 )
}
