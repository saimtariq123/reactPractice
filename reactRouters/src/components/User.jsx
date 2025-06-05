import React from 'react'

import { useParams } from 'react-router-dom';
function User() {
    const userId= useParams().userId;
  return (
    <div>
      <p>user id: {userId}</p>
    </div>
  )
}

export default User
