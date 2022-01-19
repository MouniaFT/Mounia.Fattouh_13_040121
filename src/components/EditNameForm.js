import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/user/fetchRequest'

const EditNameForm = ({ firstName, lastName, token, setEditName }) => {
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const dispatch = useDispatch()
  const updateUserName = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({ firstName: newFirstName, lastName: newLastName, token })
    )
    setEditName(false)
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
      </h1>
      <form className="editNameForm">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder={firstName}
            required
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder={lastName}
            required
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={updateUserName}>
          Save
        </button>
        <button className="cancel-button" onClick={() => setEditName(false)}>
          Cancel
        </button>
      </form>
    </>
  )
}

export default EditNameForm
