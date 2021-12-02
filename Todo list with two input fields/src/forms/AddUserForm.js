import React, { useState } from 'react'
import './AddUserForm.css'
function AddUserForm (props) {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	const handleSubmit =(event) => {	
		event.preventDefault()
		if (!user.name || !user.username) return

		props.addUser(user)
		setUser(initialFormState)}
	return (
		<form onSubmit={handleSubmit}>
			<label>NAME </label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} /><br /><br />
			<label>USERNAME </label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} /><br /><br />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm