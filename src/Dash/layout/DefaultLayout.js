import React from 'react'
import {Redirect} from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../dashboard/index'

const DefaultLayout = (props) => {
  const {getUserStatus, signOut} = props;
      return (
    <div>
      {getUserStatus ?  <section>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
  </section>: <Redirect to="/login"/>}
    </div>
  )
}

export default DefaultLayout
