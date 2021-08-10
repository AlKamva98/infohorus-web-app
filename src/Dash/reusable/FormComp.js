import react from 'react'
import { useForm, Controller } from "react-hook-form";
import {Button, Container} from 'react-bootstrap'
import PropTypes from 'prop-types'

function FormComp(props) {
 const initialFormState ={};
 
const onSubmit = async (data) =>{    
console.log("This is the data from the form", data)
  }

 return (
  <div>
     
  </div>
 )
}

FormComp.propTypes = {

}

export default FormComp

