import { useState } from 'react'


function LoginPage({ setUser }) {
    const [newUser, setNewUser] = useState(
        { name: '' }
    )
    const handleSubmit = (event) => {
        event.preventDefault()
        setUser(newUser)
        console.log(newUser)
        setNewUser({ name: '' })
    }

    const handleChange = (event) => {
        setNewUser({ [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="name" value={newUser.name} onChange={handleChange}></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage