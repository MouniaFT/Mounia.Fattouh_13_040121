import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../features/user/fetchRequest'
import EditNameForm from './EditNameForm'

const AccountHeader = () => {
  const dispatch = useDispatch()
  const { isLogin, token } = useSelector((state) => state.loginReducer)
  const { firstName, lastName } = useSelector((state) => state.userReducer)
  const [isEditName, setEditName] = useState(false)

  useEffect(() => {
    if (isLogin) {
      dispatch(getUser({ token }))
    }
  })

  return (
    <div className="header">
      {!isEditName ? (
        <>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={() => setEditName(true)}>
            Edit Name
          </button>
        </>
      ) : (
        <EditNameForm
          key={token}
          token={token}
          firstName={firstName}
          lastName={lastName}
          setEditName={setEditName}
        />
      )}
    </div>
  )
}

export default AccountHeader
