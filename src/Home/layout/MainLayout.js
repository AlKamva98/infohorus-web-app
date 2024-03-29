import React from 'react'
import { Content, Footer, Header } from '../shared/index'


const MainLayout = (props) => {
  const {signedIn, signOut} = props;
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header className="fixed drop-shadow-md" signedIn={signedIn} show={true} signOut= {signOut} />
        <div className="w-screen">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
