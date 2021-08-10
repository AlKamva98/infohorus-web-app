import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { Card,Button, Form, Col, Row } from 'react-bootstrap'
import { DocsLink } from 'src/Dash/reusable'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Approved Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow>
            <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 1: train employees on how to deal with ransomware</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 2: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   
     <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 3: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
  </Card>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          Pending Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 1: train employees on how to deal with ransomware</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 2: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>
   </Card.Body>
   </Card>
   
     <Card className="col-md-4 mt-3 mx-4 shadow-sm">
    <Card.Body>
     <span>Recomendation 3: train employees on how to deal with phishing emails</span>

   <Button className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button>
   <p className="text-center pt-2 col-12 btn-link pointer">Review</p>   </Card.Body>
  </Card>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
