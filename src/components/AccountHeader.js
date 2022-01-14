import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../features/user/fetchRequest'

const AccountHeader = () => {
  const dispatch = useDispatch()
  const { isLogin, token } = useSelector((state) => state.loginReducer)
  const { firstName, lastName } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (isLogin) {
      dispatch(getUser({ token }))
    }
  })

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}

export default AccountHeader
