import React from 'react';
import { Link } from 'react-router-dom'

const UserProfile = ({ item }) => {
    console.log(item)
    return (
        <Link to={`/users/${item.idUser}`}>
            <h3>{item.name}</h3>
        </Link>
    )
}

export default UserProfile
