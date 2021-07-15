import React from 'react'
import { Content, Footer, Header } from '../shared/index'

const MainLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header signedIn={false} show={true} signOut= {()=>{console.log("Signing Out!!!")}} />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
