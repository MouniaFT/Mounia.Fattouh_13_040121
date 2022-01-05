import React from 'react'
// import { Counter } from './features/counter/Counter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
      {/* <Counter /> */}
      <Footer />
    </Router>
  )
}

export default App
