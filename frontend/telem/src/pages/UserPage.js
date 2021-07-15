import React from 'react'
import { Router,Link } from 'react-router-dom'
import Form from '../components/otherpages/Form'

function UserPage() {
    return (
        <div> 
                     <Form/>
                    <Link to ="/usersignup">New User</Link>
              
        </div>
    )
}

export default UserPage
