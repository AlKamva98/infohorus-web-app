import React from 'react'
import HeroHome from "./HeroHome";
import Features from "./Features";
//home page
const Index = props => {
const signedIn =false;
 return (
  <div clasName="w-full bg-white">
   <HeroHome signedIn={signedIn} />
   <Features />
  </div>
 )
}



export default Index
