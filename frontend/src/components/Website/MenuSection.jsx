import React from 'react'
import MenuList from './MenuCom/MenuList'

const MenuSection = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <p className='text-3xl font-semibold pb-5'>Preview Our Menu</p>
        <div className='flex'>
          <div className='flex flex-row items-center gap-10'>
            <p className='hover:text-orange-400 font-medium'>All</p>
            <p className='hover:text-orange-400 font-medium'>Burger</p>
            <p className='hover:text-orange-400 font-medium'>Sushi</p>
            <p className='hover:text-orange-400 font-medium'>Cake</p>
            <p className='hover:text-orange-400 font-medium'>Steak</p>
            <p className='hover:text-orange-400 font-medium'>Drink</p>
          </div>
        </div>
      </div>
      <div className='pt-20'>
        <MenuList/>
      </div>
    </div>
  )
}

export default MenuSection