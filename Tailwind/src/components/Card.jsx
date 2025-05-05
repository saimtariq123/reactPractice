import React from 'react'

const Card = ({username="saim"}) => {
  return (
    
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="flex flex-col items-center gap-1 mt-4">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-1 text-sm text-gray-600">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    
  )
}

export default Card
