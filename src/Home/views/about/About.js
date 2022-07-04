import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


 function About() {
  return ( <>
    <section className = "px-12 py-4 mx-auto items-center bg-home md:px-0" >
    <div className = "container max-w-6xl px-8 mx-auto xl:px-5" >
    <div className = "flex flex-wrap  sm:-mx-3" >
    <div className = "w-full md:w-11/12 md:px-3 " >

    <h1 className = "text-4xl font-bold text-gray-100 tracking-tight text-center pb-6 sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl" >
    <span className = "block xl:inline" > Why Infohorus? </span> </h1>
<Carousel dynamicHeight={false}  infiniteLoop={true} interval={12000} autoPlay={true} className = "w-full  mx-auto ">
  <div  className="flex flex-wrap items-center w-full mx-auto "> 
    <div className="w-4/5 mx-auto pt-3 pb-3 pr-3 pl-3 opacity-70 bg-cyan-500 rounded-md ">
       <p className = "mx-auto text-base text-center pb-4 text-white sm:max-w-md lg:text-lg md:max-w-3xl" > Ransomware is the fastest - growing attack vector targeting all sorts of companies, institutions, and organizations. No organization is immune to cyber - attacks. Cyber attackers can demand money from companies and institutions of all sizes and industries including nonprofits, enterprises, and startups. </p> 
    <p className = "mx-auto text-base text-center pb-4 text-white sm:max-w-md lg:text-base md:max-w-3xl" > The race against ransomware attacks on our critical infrastructure is intensifying and continuous. New threats, new attackers, and new targets are reported every day. Cybercriminals are constantly evolving and expanding their strategies to breach defenses. </p> 
    </div>
    </div>

    <div className="flex flex-wrap items-center w-full mx-auto  ">
 <div className="w-4/5 mx-auto my-auto  pt-3 pb-3 pr-3 pl-3 opacity-70 bg-cyan-500 rounded-md ">
    <p className = "mx-auto text-base  text-center pb-4 text-white sm:max-w-md  md:max-w-3xl" >
    Does your organization have a strategy, plans, and resources to counter the threat? How quickly would you be able to respond and recover from an attack? What are your policies regarding dealing with extortionists holding your entire organization and those who rely on your products and services to ransom? Ransomware penetrates organizations in multiple ways, so fighting it requires an integrated risk management strategy. </p>
</div>
    </div>
    <div className="flex flex-wrap items-center w-full mx-auto ">
 <div className="w-4/5 mx-auto my-auto pt-3 pb-3 pr-3 pl-3 opacity-70 bg-cyan-500 rounded-md ">
    
        <p className = "mx-auto text-base text-center  pb-4 text-white sm:max-w-md  md:max-w-3xl" > With Bahati Tech 's Infohorus platform, we help organizations manage their risk and exposure to ransomware attacks. We help you to build a comprehensive response strategy to minimize the risk, prepare and test your response strategies and have a recovery plan in place that will minimize disruption to your operations. Our approach is to help our customers bolster their cybersecurity posture and create a culture of cybersecurity awareness woven into every activity at all levels of the organization.</p>  
    </div>
    </div>
    <div className="flex flex-wrap items-center w-full mx-auto">
 <div className="w-4/5 mx-auto mt-4 pt-3 pb-3 pr-3 pl-3 opacity-70 bg-cyan-500 rounded-md ">
   <p className = "mx-auto text-base text-center pb-4 text-white sm:max-w-md lg:text-base md:max-w-3xl" > Bahati Tech assists organizations with cybersecurity and privacy consulting services and products. We provide services such as Training, Cyber Security Programs, Data Protection Programs, readiness and gap assessments, and integrated ransomware risk management tools and services </p> 
    <p className = "mx-auto text-base text-center pb-4 text-white sm:max-w-md lg:text-base md:max-w-3xl" > Bahati Tech is an award - winning cybersecurity and data protection company. Click here to <a href="https://bahatitech.com/" target="_blank" rel="noreferrer" > learn more</a>.</p >
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
export default React.memo(About);