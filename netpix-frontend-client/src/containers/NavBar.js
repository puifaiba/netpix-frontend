import React, { } from "react"
import { NavLink } from "react-router-dom"

const link = {
    width: "100px",
    padding: "20px",
    margin: "0 5px 5px",
}

export default function NavBar() {

    //displays login or logout based on the current status
    const displayConditional = () => {
        let logged_in = !!(localStorage.getItem("user_id"))
        if (logged_in) {
            return (
                <div>
                    <NavLink to="/browse" exact style={link}>
                        Home
                    </NavLink>
                    <NavLink to="/logout" exact style={link}>
                        Log Out
                    </NavLink>

                </div>
            )
        }
        else {
            return (
                <div>
                    <NavLink to="/login" exact style={link} onClick={() => alert("⚠︎ Oh no! You're not l🤠gged in")}>
                        Home
                    </NavLink>
                    <NavLink to="/login" exact style={link}>
                        Log In
                    </NavLink>
                </div>
            )
        }
    }

    return (
        <div className="navbar">
            {displayConditional()}
        </div>
    )
}
