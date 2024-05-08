import React from 'react'

// ** TYPES
import { Users } from '../types/userTypes'

const UsersPage = async () => {

  const users: Users[] = await getData();

  return (
    <>
      <h1>Users</h1> <hr />
      <p> {new Date().toLocaleTimeString()} </p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li> )}

      </ul>
    </>
  )
}

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'});

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default UsersPage