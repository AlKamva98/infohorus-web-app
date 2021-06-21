import React, {useState,useEffect} from 'react';
import Modal from '../../utils/Modal';
import {Link} from 'react-router-dom'
import Auth from '@aws-amplify/auth';
import "./index.css";
import {Player} from 'video-react';


function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [signedIn, setSignedIn]= useState(false);

    useEffect(()=>{
    handleSignedIn();
    },[])

async function handleSignedIn(){
 const user = await Auth.currentAuthenticatedUser();
  if(user !== undefined){
    setSignedIn(true);
  }else{
    setSignedIn(false);
  }
}


  return (
   <section className="px-2 py-4 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Welcome to</span>
                  <span className="block text-blue-600 xl:inline"> Infohorus!</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Infohorus offers cybersecurity services that combine diverse expertise in the areas of cybersecurity, defensive social engineering, cyber negotiations, intelligence, and other specialized operations to enhance critical infrastructure cyber resilience.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  {signedIn ? (<Link to="/questions" className="flex items-center w-full btn px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-nlue-700 sm:w-auto">
                    Take Assessment
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} className /><polyline points="12 5 19 12 12 19" className /></svg>
                  </Link>):(<Link to="/demo" className="flex items-center w-full btn px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                    Request a Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} className /><polyline points="12 5 19 12 12 19" className /></svg>
                  </Link>)}
                  <Link to="/about" className="inline-flex items-center justify-center btn px-6 py-3 mb-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                {/* <img src=".\images\bg2.png" className /> */}
                <Player 
                playsInline
                poster=".\images\bg2.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}

export default HeroHome;