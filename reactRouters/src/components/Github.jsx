import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  
    const data= useLoaderData();

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.github.com/users/alexharkness/followers')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 rounded-lg'> 
      <h1 className="text-xl mb-4">Github followers: {data.length}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((follower) => (
          <div key={follower.id} className="bg-gray-800 p-2 rounded">
            <img 
              src={follower.avatar_url} 
              alt={follower.login} 
              className="w-16 h-16 rounded-full mx-auto mb-2" 
            />
            <p>{follower.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;

export const githubInfo=async () => {
   const  response= await fetch('https://api.github.com/users/alexharkness/followers');
    return response.json();
}