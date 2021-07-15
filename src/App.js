import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layouts from './Layouts'
import './Dash/scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages
const Login = React.lazy(() => import('./Dash/views/pages/login/Login'))
const Register = React.lazy(() => import('./Dash/views/pages/register/Register'))
const Page404 = React.lazy(() => import('./Dash/views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./Dash/views/pages/page500/Page500'))
//
class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <Layouts {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
