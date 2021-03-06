import React from 'react'
import { Amplify, API, Auth, Storage,graphqlOperation } from 'aws-amplify';
const awsConfig = require('../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


export const Form = (props) => {
 const {formHead, formBtnText} = props;


 return (
  <div>
   
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">{formHead}</h4>
                <div className="relative w-full mt-10 space-y-8" >
                  <div className="relative">
                    <label className="font-medium text-gray-900">First Name</label>
                    <input type="text" className="flex w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name"   />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Last Name</label>
                    <input type="text" className="flex w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name"  />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" />
                  </div>
                  <div className="relative">
                    <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">{formBtnText}</button>
                    
                  </div>
                </div>
              </div>
            </div>
 )
}
