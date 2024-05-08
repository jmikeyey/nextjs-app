import React from 'react'

// ** TYPES
import { Users } from '../types/userTypes'

const UsersPage = async () => {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 10 }}
  );
  const users: Users[] = await res.json();

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

export default UsersPage