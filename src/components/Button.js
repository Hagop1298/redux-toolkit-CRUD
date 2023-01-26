import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <div className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700' onClick={onClick}>
      {children}
    </div>
  )
}

export default Button