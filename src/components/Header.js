import React,{useState,useEffect} from 'react';
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import {Button,Image,Navbar} from 'react-bootstrap'
import'./Header.css'
import Auth from '@aws-amplify/auth';

function Header (){
    const [clicked,setClicked] =  useState(false);
    const [signedIn, setSignedIn]= useState(false);

   const handleClick = () =>{
      setClicked(!clicked)
    }
 useEffect(()=>{
    checkUserSignedIn();
    },[])

async function checkUserSignedIn(){
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
      console.log("Signed out");
      
    }

  
 
  return (
      <Navbar fixed="top" className="NavbarItems">
        <Link to="/"><Image className="img-fluid" src="./images/logo.png" alt="logo"  width="450" height="250"/></Link>
        <div className="menu-icon" onClick={handleClick}> 
          <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className ={clicked ? 'nav-menu active' : 'nav-menu pt-3'}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                {item.title} 
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="signin-icon">
          {signedIn ? (<Link to="/"><Button className="mx-4" onClick={signOut}>Sign Out</Button></Link>):(<Link to="/register"><Button className="mx-4">Start My Free Trial</Button></Link>)}
        </div>
      </Navbar>
  )}


export default Header;