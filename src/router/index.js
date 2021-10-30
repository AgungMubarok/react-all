import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import About from '../pages/About'
import App from '../pages/App'

export default function Routers() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <App />
        </Route>
        
        <Route exact path="/about">
          <About />
        </Route>

      </Switch>

    </Router>
  )
}
