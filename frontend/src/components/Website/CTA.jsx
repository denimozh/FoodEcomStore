import Button from '../UI/Button'
import React from 'react'

const CTA = () => {
  return (
    <div className='pt-24 pb-32'>
      <div className=''>
        <p className='text-3xl text-center font-medium'>Join Our Membership Program For £5/Month</p>
        <p className='text-2xl text-center pt-8 font-medium text-orange-500'>Collect Points and a Monthly Healthy Package of Food</p>
      </div>
      <div className='pt-16 flex flex-row justify-center items-center'>
        <input className='pl-4 w-3/6 h-14 bg-white text-black outline-none rounded-lg placeholder:text-lg placeholder:text-black placeholder:tracking-wide' placeholder="Enter your email"/>
        <Button text={"Sign Up"}/>
      </div>
    </div>
  )
}

export default CTA