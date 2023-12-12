import React from 'react'
import Button from '../UI/Button'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between pt-6'>
        <div className='flex pb-1'>
          <p className='text-2xl text-red-500'>Food<b>Dev</b></p>
        </div>
        <div className='flex items-center'>
          <div className='flex pr-6'>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>Home</p>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>Menu</p>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>Service</p>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>About Us</p>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>Blog</p>
            <p className='px-6 hover:underline underline-offset-3 hover:decoration-orange-500 hover:text-orange-500'>Contact</p>
          </div>
          <div className='flex gap-8'>
            <Button text={"Sign Up"}/>
            <Button text={"Log in"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar