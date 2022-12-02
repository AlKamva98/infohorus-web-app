import React, { useEffect, useState, useContext } from 'react'
import { Auth } from 'aws-amplify'
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default () => {
  const [userCode, setUserCode] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [image, setImage] = useState('')


  // useEffect(() => {
  //   Auth.currentSession().then(() => {
  //     setEnabled(true)
  //   })
  // }, [])

  const API = 'https://epfy1t1y99.execute-api.eu-west-1.amazonaws.com/dev/mfa'

  const getQRCode = () => {
    Auth.currentSession().then(res => {
      if (typeof accessToken !== 'string') {
        res.accessToken = res.accessToken.jwtToken
      }
console.log(res.accessToken.jwtToken)
console.log(res.accessToken)
      const uri = `${API}?accessToken=${res.accessToken}`
      console.log(uri)

      fetch(uri,{headers: {
        'x-api-key':'dfsd',
        Authorization: res.getIdToken().getJwtToken(),
      }})
        .then((data) => data.json())
        .then(setImage)
        .catch(console.error)
    });
  }

  const enableMFA = (event) => {
    event.preventDefault()

    console.log('USER CODE:', userCode)

    Auth.currentSession().then((res) => {
      if (typeof accessToken !== 'string') {
        res.accessToken = res.accessToken.jwtToken
      }

      const uri = `${API}?accessToken=${res.accessToken}&userCode=${userCode}`
      console.log(uri)

      fetch(uri, {method: 'POST',headers:{
          'x-api-key':'dfsd',
          Authorization: res.getIdToken().getJwtToken(),
        },
      })
        .then((data) => data.json())
        .then((result) => {
console.log(result)
          if (result.Status && result.Status === 'SUCCESS') {
            setEnabled(true)

            // const settings = {
            //   PreferredMfa: true,
            //   Enabled: true,
            // }
            
          Auth.currentUserInfo(res=>{
            
            Auth.setPreferredMFA(res,"TOTP")
          })
          
          } else {
            console.log(result)

            if (result.errorType === 'EnableSoftwareTokenMFAException') {
              alert('Incorrect 6-digit code!')
            } else if (result.errorType === 'InvalidParameterException') {
              alert('Please provide a 6-digit number')
            }
          }
        })
        .catch(console.error)
    })
  }

  const disableMFA = (event) => {
    event.preventDefault()

    Auth.currentSession().then((res) => {
      if (typeof accessToken !== 'string') {
        res.accessToken = res.accessToken.jwtToken
      }

      const uri = `${API}?accessToken=${res.accessToken}&userCode=${userCode}`
      console.log(uri)

      fetch(uri, {
        method: 'DELETE',
        headers: {
          'x-api-key':'dfsd',
          Authorization: res.getIdToken().getJwtToken(),
        },
      })
        .then((data) => data.json())
        .then(console.log)
        .catch(console.error)
    })
  }

  return (
    <div>
      
      <Col id="subDiv2" className="mx-auto py-8 w-1/2">
        <Card className="mx-auto mb-4  bg-light  shadow" >
            <Card.Body>
    <h2 className="mb-3 fw-normal text-center text-2xl fw-bold">Multi-Factor Authentication</h2>
    
    

      {enabled ? (
        <div>
          <div>MFA is enabled</div>

         <Redirect to={'/dash'} />
        </div>
      ) : image ? (
        <div className='px-5'>
          <h4 className="mb-3 fw-normal text-center">Scan this QR code: </h4>
          <img className='mx-auto' src={image} />

          <Form className="mx-auto" onSubmit={enableMFA}>
          <Input type="text" className="form-control" name="otp" placeholder="Enter OTP" autofocus
              value={userCode}
              onChange={(event) => setUserCode(event.target.value)}
              required
            />

            <Button className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Confirm Code</Button>
          </Form>
        </div>
      ) : (
<Button onClick={getQRCode} className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  >Enable MFA</Button>
   
      )}

</Card.Body>
        </Card>
        </Col>
    </div>
  )
}
