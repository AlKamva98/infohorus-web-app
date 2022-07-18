import React from 'react';
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'
import {MenuItems} from './MenuItems'
import { Transition } from '@tailwindui/react'

 function Header (props) {
   const {signedIn, show, signOut} = props;
    return (      
      <nav className="relative z-40 drop-shadow w-full py-10 text-cyan-700  body-font fixed">
        <div className="container flex fixed bg-bgCol top-0 inset-x-0  flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl">
          <Link to="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><Image className="img-fluid" src="\images\logonew.png" alt="logo"  width="200" height="75"/></Link>
            <ul className="md:flex gap-8 p-6 text-xl bg-bgCol font-semibold items-center">
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
              {signedIn ?(<Link to="/" onClick={signOut} className="inline-flex items-center justify-center px-4 py-2 text-lg leading-6 btn text-cyan-200 bg-bgCol  border-cyan-200 rounded-md hover:bg-cyan-400 hover:text-white whitespace-no-wrap  font-semibold  rounded-md  focus:outline-none focus:shadow-none">Sign Out</Link>):(<Link to="/login" className="inline-flex items-center justify-center px-4 py-2 text-lg leading-6 btn text-cyan-200 bg-bgCol  border-cyan-200 rounded-md hover:bg-cyan-400 hover:text-white whitespace-no-wrap  font-semibold  rounded-md  focus:outline-none focus:shadow-none">
              Sign In
              </Link>)}
            </span>
          </div>
        </div>
      </nav>
          );
  }

  

  export default Header;
