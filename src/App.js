import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass='min_height'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Projects'>
              <Projects />
            </Route>
            <Route path='/Contact'>
              <Contact />
            </Route>
            <Route path='/Company'>
              <Company />
            </Route>
            <Route path='/NewProject'>
              <NewProject />
            </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
