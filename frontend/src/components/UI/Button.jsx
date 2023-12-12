import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
        <button className={`text-slate-200 text-xl rounded-lg font-medium w-40 h-14 bg-orange-400 hover:bg-orange-600`}>
            <p className='pb-1'>{text}</p>
        </button>
        
    </div>
  )
}

export default Button