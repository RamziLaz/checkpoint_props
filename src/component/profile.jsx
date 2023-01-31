import React from 'react'
import photo from "../assets/1.jpg"
import Handlename from './handlename'

function Profile({fullname,bio,profession}) {
    return (
        <div  style={{ backgroundColor: "pink" }}>
            <Handlename fullName={fullname} />
            <p>my name is {fullname}</p>
            <p>my bio is {bio}</p>
            <p>my profession is {profession}</p>     
        </div>
    )
}

export default Profile
