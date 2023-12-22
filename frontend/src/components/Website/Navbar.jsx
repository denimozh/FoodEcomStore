import React from 'react'
import Button from '../UI/Button'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between pt-6'>
        <div className='flex pb-1'>
          <p className='text-2xl text-red-500'>Food<b>Dev</b></p>
        </div>
        <div className='pl-6'>
          <div className='flex items-center bg-slate-50 rounded-full py-4 pl-4 border-2 shadow-xl'>
            <div className='flex pr-6'>
              <p className='px-6 font-medium hover:decoration-orange-500 hover:text-orange-500'>Home</p>
              <p className='px-6 font-medium hover:decoration-orange-500 hover:text-orange-500'>Menu</p>
              <p className='px-6 font-medium hover:decoration-orange-500 hover:text-orange-500'>Order</p>
            </div>
          </div>
        </div>
          <div className='flex gap-8'>
            <Button text={"Log in"}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar