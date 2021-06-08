import {Header} from '../../components/index/Header';
import {Form} from '../../components/Form';
import Footer from '../../components/index/Footer';
import React from 'react'

export const Demo = () => {
 return (
  <div>
   <Header/>
   <Form
   head="Demo" subhead="Schedule a Demonstration of our Product" text="Fill in your name and contact details so that we can schedule the demo" 
   formHead="Schedule Demo" formBtnText="Submit" 
  
   />
   <Footer/>
  </div>
 )
}
