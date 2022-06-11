import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contato</Link>
        <Link to='/Company'>Empresa</Link>
        <Link to='/NewProject'>Novo Projeto</Link>
      </div>
      <Switch>
      <Container customClass='min_height'>
          <Route exact path='/'>
            <Home />
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
      <p>Footer</p>
    </Router>
  )
}

export default App
