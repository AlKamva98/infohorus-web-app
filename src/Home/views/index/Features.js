import React from "react";

 function Features(){
 return(
  
       <section className="py-12 bg-cyan-900">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 tracking-tight text-center">Features</h2>
          <p className="mt-2 text-lg text-center text-gray-200">Check out our list of awesome features below.</p>
          <div className="grid grid-cols-4 gap-4 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            
            <div className="flex flex-col items-center text-center justify-between col-span-4 px-8 py-12 space-y-4 drop-shadow-lg bg-cyan-500 sm:rounded-xl">
              <div className="p-3 text-white bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4 className="text-xl font-medium text-gray-100">Third-Party Collaboration Assessment and Tracking</h4>
              <p className="text-base text-center text-gray-200">Identify and track requirements of external stakeholder engagements in the mitigation of risk, responding to attacks, and recovering from incidents.</p>
            </div>
            <div className="flex flex-col items-center text-center justify-between col-span-4 px-8 py-12 space-y-4 bg-cyan-500 sm:rounded-xl">
              <div className="p-3 text-white bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              </div>
              <h4 className="text-xl font-medium text-gray-100">Executive Level Dashboard Reporting</h4>
              <p className="text-base text-center text-gray-200">High-level reporting on the state of cybersecurity culture and risk exposure levels vs risk profile and risk appetite. These reports display the organisation's overall cybersecurity risk posture.</p>
            </div>
            <div className="flex flex-col items-center text-center justify-between col-span-4 px-8 py-12 space-y-4 bg-cyan-500 sm:rounded-xl">
              <div className="p-3 text-white bg-gray-100 rounded-full drop-shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h4 className="text-xl font-medium text-gray-100">Ransomware Incident Tracking Reports across industries</h4>
              <p className="text-base text-center text-gray-200">Timeous ransomware incident reporting and tracking to help you stay up to date with ransomware incidents by industry and geographical territories.</p>
            </div>
          </div>
        </div>
      </section>
   )
 }
 
export default Features;

