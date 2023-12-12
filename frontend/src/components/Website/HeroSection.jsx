import React from 'react'
import Button from '../UI/Button'

const HeroSection = () => {
  return (
    <div className='pt-14'>
      <div className='bg-white rounded-full w-64 h-12 display-flex flex items-center drop-shadow-xl'>
        <p className='p-12 text-orange-500 font-medium'>MORE THAN FASTER</p>
      </div>
      <div className='flex pt-10'>
        <div className='basis-1/3'>
          <div>
            <p className='font-bold text-6xl tracking-wide leading-snug'>Instant Food, for Instant Hunger</p>
          </div>
          <div className='pt-8 leading-relaxed'>
            <p className='text-lg'>
              Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company
              which delivers food to a customer.
            </p>
          </div>
          <div className='pt-8'>
            <Button width={40} height={14} text={"Get Started"}/>
          </div>
        </div>
        <div className='basis-2/3'>
          <img src='../images/chef2.jpg' alt=""/>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection