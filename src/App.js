import React from 'react'
// import { Counter } from './features/counter/Counter'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Login />
      {/* <Counter /> */}
      <Footer />
    </div>
  )
}

export default App
