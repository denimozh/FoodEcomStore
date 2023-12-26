import React from 'react'
import StoreNavbar from '../../components/MainShop/StoreNavbar'
import ListFoodTypes from '../../components/MainShop/ListFoodType/ListFoodTypes'

const StorePage = () => {
  return (
    <div>
        <div className='bg-orange-50 shadow-lg'>
          <div className='px-56'>
            <StoreNavbar />
          </div>
        </div>
        <div className='px-56'>
          <ListFoodTypes />
        </div>
    </div>
  )
}

export default StorePage