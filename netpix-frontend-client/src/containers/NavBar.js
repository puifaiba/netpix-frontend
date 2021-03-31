import React, {Component} from "react"
import {NavLink} from "react-router-dom"

const link = {
  width: "100px",
  padding: "20px",
  margin: "0 5px 5px",
}

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/browse" exact style={link}>
          Home
        </NavLink>
        <NavLink to="/login" exact style={link}>
          Login
        </NavLink>
      </div>
    )
  }
}
