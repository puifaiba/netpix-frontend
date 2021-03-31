import { Redirect } from "react-router-dom";

export default function LogOut() {
    const LOG_OUT = "http://localhost:3000/logout"

    //sends a logout message to the backend
    const logoutbackend = () => {
        fetch(LOG_OUT).then(res => res.json())
            .then(console.log)
    }

    const logout = () => {
        if (localStorage.getItem("user_id")) {
            localStorage.removeItem("user_id")
            logoutbackend()
            return <Redirect push to="/" />
        }
    }

    return (
        <div>
            {logout()}
        </div>
    )

}