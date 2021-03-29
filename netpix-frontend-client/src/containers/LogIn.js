import React, { Component } from 'react'

export default class LogIn extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="username" placeholder="Enter your username"></input>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}
