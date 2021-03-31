import React, { useState } from 'react'
import { useHistory } from 'react-router'


export default function LogIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const SESSION_URL = "http://localhost:3000/sessions"
    const history = useHistory()

    const getUser = e => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        const request = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user),
            method: "POST"
        }
        setPassword("")
        setUsername("")
        fetch(SESSION_URL, request).then(res => res.json())
            .then(res => localStorage.setItem("user_id", res.user.id))
            .then(r => history.push("/browse"))
            .catch(error => alert(error.message))
    }

    return (
        <div className="login-form">
            <form onSubmit={getUser}>
                <input type="text" onChange={e => setUsername(e.target.value)} name="username" value={username} placeholder="Enter your username"></input>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} placeholder="Enter your password" />
                <button className="login-button" type="submit">Log In</button>
            </form>
        </div>
    )
}
