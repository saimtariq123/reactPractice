import React from 'react';
import UserContext from '../assets/context/userContext';

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }

  return <div>Welcome {user.username}</div>;
}

export default Profile;
