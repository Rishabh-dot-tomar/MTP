import React from 'react'
import {Link} from 'react-router-dom'
import NewUserForm from '../components/otherpages/NewUserForm'

function UserPageSignup() {
    return (
        <div>
            <p>Enter Details</p>
            <NewUserForm/>
            <Link to ="/userpage">Already Registered</Link>
        </div>
    )
}

export default UserPageSignup
