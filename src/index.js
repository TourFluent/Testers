import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import AboutUs from './views/about-us'
import TourPackages from './views/tour-packages'
import PackageInfo from './views/package-info'
import SignIn from './views/sign-in'
import LogIn from './views/log-in'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LandingPage} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={TourPackages} exact path="/tour-packages" />
        <Route component={PackageInfo} exact path="/package-info" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={LogIn} exact path="/log-in" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
