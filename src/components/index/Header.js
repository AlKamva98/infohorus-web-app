 import React,{useState,useEffect} from 'react';
import {MenuItems} from '../MenuItems'
import {Link} from 'react-router-dom'
import {Button,Image,Navbar} from 'react-bootstrap'
import { Transition } from '@tailwindui/react'
import Auth from '@aws-amplify/auth';

export  function Header () {
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
   const signOut=async()=>{
      console.log("Signing out");
      await Auth.signOut();
      window.location.reload();
      console.log("Signed out");
    }  
    const show = true;

    return (      
      <section className="relative w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <Link className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><Image className="img-fluid" src="./images/logok.png" alt="logo"  width="150" height="50"/></Link>
            <ul className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url} x-data="{ hover: false }">
                <span className="block">{item.title}</span>
                <Transition show={show} className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"  enter="transition ease duration-200" enter-start="scale-0" enter-end="scale-100" leave="transition ease-out duration-300" leave-start="scale-100" leave-end="scale-0" >
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
              </span> </Transition>
                </Link>
              </li>)})}
        </ul>
            <div className="relative z-10 inline-flex  items-center space-x-3 md:ml-5 lg:justify-end">
            {signedIn ? null:(<Link to="/register" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 btn text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Sign up
            </Link>)}
            <span className="inline-flex rounded-md shadow-sm">
              {signedIn ?(<Link to="/"><Button className="inline-flex btn items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={signOut}>Sign Out</Button></Link>):(<Link to="/signIn" className="inline-flex btn items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign In
              </Link>)}
            </span>
          </div>
        </div>
      </section>
          );
  }
