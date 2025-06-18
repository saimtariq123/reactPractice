import React from 'react'

function Button(
    {children,
        bgColor='bg-blue-500',
        textColor='text-white',
        type='button',
        className='',
        ...props

    }
) {
  return (
    <button type={type}
     className={`px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
     </button>
  )
}

export default Button
