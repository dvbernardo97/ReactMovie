import userEvent from "@testing-library/user-event"
import React from "react"
import {Link} from 'react-router-dom'

function NavBar({user}) {
    return <nav>
        <p> Welcome {user.name}!</p>
        <Link to="/">Movies List Pag</Link>
        &nbsp; : &nbsp;
        <Link to="/actors">Actors List Page</Link>
    </nav>

}


export default NavBar