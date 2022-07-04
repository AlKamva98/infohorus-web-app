import React from 'react'
import HeroHome from "./HeroHome";
import Features from "./Features";
import About from "../about/About"
import ContactSec from './ContactSec';
//home page
const Index = props => {
const signedIn =false;
 return (
  <div clasName="w-full bg-white">
   <HeroHome signedIn={signedIn} />
   <Features />
   <About/>
   <ContactSec/>
  </div>
 )
}



export default React.memo(Index)
