import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {routes} from '../../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import {
  CButton,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'

const ExampleToast = () => {
}
const AppBreadcrumb = (props) => {
  const currentLocation = useLocation().pathname
  const {saveChanges, approved, tasks} = props;
  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
  return currentRoute.name
}

const getBreadcrumbs = (location) => {
  const breadcrumbs = []
  location.split('/').reduce((prev, curr, index, array) => {
    const currentPathname = `${prev}/${curr}`
      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes),
        active: index + 1 === array.length ? true : false,
      })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)
  
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
  <CToast autohide={false} color="primary" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>Changes have been saved</CToastBody>
    <CToastClose className="me-2 m-auto" white />
  </div>
  </CToast>
  )
  return (
    <div className="flex justify-between space-x-96"> 
    <CBreadcrumb className="d-none d-md-flex me-auto">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        console.log(breadcrumb.name)
        return (
     <>   
       <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}>
            {breadcrumb.name}
          </CBreadcrumbItem>
    {breadcrumb.name ==="Colors" && 
    (<div className="relative z-10 inline-flex  items-center space-x-3 md:ml-5 lg:justify-end">
    <button onClick={()=>{
      saveChanges(approved, tasks);
      addToast(exampleToast);
    } } className="ml-8 inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save changes</button>
<CToaster ref={toaster} push={toast} placement="top-end" />
    </div>)}
       </>   
        )
      })}
    </CBreadcrumb>
    </div>
  )
}
  
export default React.memo(AppBreadcrumb)
