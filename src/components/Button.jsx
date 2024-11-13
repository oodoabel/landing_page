import React from 'react'

const Button = ( { label, iconURL }) => {
  return (
    <button 
    className=' text-white flex justify-center  h-10 w-[9rem] p-2 items-center outline-none rounded-full bg-coral-red'
    
    >{label}
    <img src={iconURL} alt="arrow-right-icon" 
    className='w-3 h-3 ml-2 rounded-full'
    />
    </button>
    
  )
}

export default Button