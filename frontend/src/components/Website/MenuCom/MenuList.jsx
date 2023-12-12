import React from 'react'
import MenuItem from './MenuItem'

const MenuList = () => {
  return (
    <div className='flex flex-row gap-4'>
      <MenuItem name={"Beef Dinner"} cost={"$50"} rating={"4"} url={"/images/steakChips.png"}/>
      <MenuItem name={"Beef Dinner"} cost={"$50"} rating={"4"} url={"/images/steakChips.png"}/>
      <MenuItem name={"Beef Dinner"} cost={"$50"} rating={"4"} url={"/images/steakChips.png"}/>
    </div>
  )
}

export default MenuList