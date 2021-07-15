import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


 function About() {
  return ( <>
    <section className = "px-2 py-4 bg-gray-300 md:px-0" >
    <div className = "container items-center max-w-6xl px-8 mx-auto xl:px-5" >
    <div className = "flex flex-wrap items-center sm:-mx-3" >
    <div className = "w-full md:w-11/12 md:px-3 " >

    <h1 className = "text-4xl font-extrabold text-center pb-6 tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl" >
    <span className = "block xl:inline" > Why Infohorus? </span> </h1>
<Carousel dynamicHeight={false} autoFocus={true} infiniteLoop={true} interval={12000} autoPlay={true} className = "w-full bg-gray-500 mx-auto ">
  <div  className="flex flex-wrap items-center bg-cover bg-no-repeat bg-center bg-slide-one w-full mx-auto "> 
    <div className="w-4/5 mx-auto my-24 mb-24 pt-3 pb-3 pr-3 pl-3 opacity-70 bg-white rounded-md ">
       <p className = "mx-auto text-lg text-center pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" > Ransomware is the fastest - growing attack vector targeting all sorts of companies, institutions, and organizations. No organization is immune to cyber - attacks. Cyber attackers can demand money from companies and institutions of all sizes and industries including nonprofits, enterprises, and startups. </p> 
    <p className = "mx-auto text-lg text-center pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" > The race against ransomware attacks on our critical infrastructure is intensifying and continuous. New threats, new attackers, and new targets are reported every day. Cybercriminals are constantly evolving and expanding their strategies to breach defenses. </p> 
    </div>
    </div>

    <div className="flex flex-wrap items-center w-full mx-auto bg-cover bg-no-repeat bg-center bg-slide-two ">
 <div className="w-4/5 mx-auto mt-36 mb-36 pt-3 pb-3 pr-3 pl-3 opacity-70 bg-white rounded-md ">
    <p className = "mx-auto text-lg  text-center pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" >
    Does your organization have a strategy, plans, and resources to counter the threat? How quickly would you be able to respond and recover from an attack? What are your policies regarding dealing with extortionists holding your entire organization and those who rely on your products and services to ransom? Ransomware penetrates organizations in multiple ways, so fighting it requires an integrated risk management strategy. </p>
</div>
    </div>
    <div className="flex flex-wrap items-center w-full mx-auto bg-cover bg-no-repeat bg-center bg-slide-three ">
 <div className="w-4/5 mx-auto mt-32 mb-32 pt-3 pb-3 pr-3 pl-3 opacity-70 bg-white rounded-md ">
    
        <p className = "mx-auto text-lg text-center  pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" > With Bahati Tech 's Infohorus platform, we help organizations manage their risk and exposure to ransomware attacks. We help you to build a comprehensive response strategy to minimize the risk, prepare and test your response strategies and have a recovery plan in place that will minimize disruption to your operations. Our approach is to help our customers bolster their cybersecurity posture and create a culture of cybersecurity awareness woven into every activity at all levels of the organization.</p>  
    </div>
    </div>
    <div className="flex flex-wrap items-center w-full mx-auto bg-cover bg-no-repeat bg-center bg-slide-four ">
 <div className="w-4/5 mx-12 mt-32 mb-32 pt-3 pb-3 pr-3 pl-3 opacity-70 bg-white rounded-md ">
   <p className = "mx-auto text-lg text-center pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" > Bahati Tech assists organizations with cybersecurity and privacy consulting services and products. We provide services such as Training, Cyber Security Programs, Data Protection Programs, readiness and gap assessments, and integrated ransomware risk management tools and services </p> 
    <p className = "mx-auto text-lg text-center pb-4 text-gray-900 sm:max-w-md lg:text-2xl md:max-w-3xl" > Bahati Tech is an award - winning cybersecurity and data protection company. Click here to <a href="https://bahatitech.com/" target="_blank" rel="noreferrer" > learn more</a>.</p >
    </div>
    </div>
    </Carousel>

  
    <div className = "relative flex flex-col sm:flex-row sm:space-x-4" >
    </div> 
    </div>    
    </div> 
    </div> 
    </section> 
    </>
  );
}
export default About;