import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../features/login/fetchRequest'
import { useHistory } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()
  const { isLogin, isError } = useSelector((state) => state.loginReducer)

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(getLogin({ email, password }))
  }

  useEffect(() => {
    if (isLogin) {
      history.push('/profile')
    }
  })

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handelSubmit} méthode="POST">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          {isError ? (
            <p className="errorMessage">Username or Password is incorrect</p>
          ) : (
            ''
          )}
        </form>
      </section>
    </main>
  )
}

export default Login
