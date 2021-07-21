 import React from 'react';
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'
import {MenuItems} from './MenuItems'
import { Transition } from '@tailwindui/react'
import logo from '../assets/mainlogo.png'

 function Header (props) {
   const {signedIn, show, signOut} = props;
    return (      
      <section className="relative w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex bg-white flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <Link to="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><Image className="img-fluid" src={logo} alt="logo"  width="200" height="75"/></Link>
            <ul className="top-0 left-0 z-0 flex text-xl font-semibold items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url} x-data="{ hover: false }">
                <span className="block">{item.title}</span>
                <Transition show={show} className="absolute inset-0 inline-block w-full h-1 h-full"  enter="transition ease duration-200" enter-start="scale-0" enter-end="scale-100" leave="transition ease-out duration-300" leave-start="scale-100" leave-end="scale-0" >
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
              </span> </Transition>
                </Link>
              </li>)})}
        </ul>
            <div className="relative z-10 inline-flex  items-center space-x-3 md:ml-5 lg:justify-end">
            
            <span className="inline-flex">
              {signedIn ?(<Link to="/" onClick={signOut} className="inline-flex items-center font-semibold justify-center btn px-4 py-2 text-gray-600 bg-gray-100 border border-gray-100 text-lg leading-6 whitespace-no-wrap rounded-md shadow-sm hover:bg-gray-600 hover:text-white ">Sign Out</Link>):(<Link to="/login" className="inline-flex items-center justify-center px-4 py-2 text-lg leading-6 btn text-gray-600 whitespace-no-wrap bg-gray-100 font-semibold border border-gray-200 rounded-md shadow-sm hover:bg-gray-600 hover:text-white focus:outline-none focus:shadow-none">
              Sign In
              </Link>)}
            </span>
          </div>
        </div>
      </section>
          );
  }

  

  export default Header;
