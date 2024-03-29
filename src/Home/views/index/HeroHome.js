import React from 'react';
import {Link} from 'react-router-dom'

function HeroHome(props) {
  const {signedIn} = props;

  return (
   <section className="px-2 py-12 bg-bgCol md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <div class="slide-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block text-gray-100 xl:inline">Welcome to</span>
                  <span className="block text-cyan-300 xl:inline"> Infohorus!</span>
                </h1>
    </div>
    <div class="slide-in">
                <p className="mx-auto text-base text-gray-300 sm:max-w-md lg:text-xl md:max-w-3xl">Infohorus offers cybersecurity services that combine diverse expertise in the areas of cybersecurity, defensive social engineering, cyber negotiations, intelligence, and other specialized operations to enhance critical infrastructure cyber resilience.</p>
    </div>
                <div className=" flex flex-col sm:flex-row sm:space-x-4">
                  <div className='slide-right'>
                    {signedIn ? (<Link to="/main/questions" className="flex items-center w-full btn px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-nlue-700 sm:w-auto">
                    Take Assessment
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} className /><polyline points="12 5 19 12 12 19" className /></svg>
                  </Link>):(<Link to="/main/demo" className="flex items-center w-full btn px-6 py-3 mb-3 text-lg text-white bg-cyan-700 rounded-md sm:mb-0 hover:bg-cyan-400 sm:w-auto">
                    Request a Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} className /><polyline points="12 5 19 12 12 19" className /></svg>
                  </Link>)}</div>
                  <Link to="/main/about" className="inline-flex items-center justify-center btn px-6 py-3 mb-3 text-cyan-200 bg-bgCol  border-cyan-200 rounded-md hover:bg-cyan-400 hover:text-white">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-full overflow-hidden  sm:rounded-xl">
                <img src="\images\home.gif" className="h-full" alt="home gif" />
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}

export default HeroHome;