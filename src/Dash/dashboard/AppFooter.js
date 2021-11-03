import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          
        </a>
        <span className="ms-1"></span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
