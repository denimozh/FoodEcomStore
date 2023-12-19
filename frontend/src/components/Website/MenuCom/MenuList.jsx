import React from 'react'
import MenuItem from './MenuItem'
import salmonVeg from "./FoodImages/salmonVeg.png"
import lamb from "./FoodImages/lamb.jpg";
import salmonSalad from "./FoodImages/salmonSalad.jpg"

const MenuList = () => {
  return (
    <div>
      <div className='flex flex-row gap-4 pb-5'>
        <MenuItem name={"Beef Dinner"} cost={"$50"} rating={"4"} url={salmonVeg}/>
        <MenuItem name={"Lamb"} cost={"$30"} rating={"4"} url={lamb}/>
        <MenuItem name={"Salmon Salad"} cost={"$20"} rating={"4"} url={salmonSalad}/>
      </div>
      <div className="bg-loadMoreBG h-52 rounded-lg flex items-center justify-center">
        <p className='bg-slate-50 text-center text-3xl rounded-lg py-3 px-3'>Log In To View More And Order</p>
      </div>
    </div>
  )
}

export default MenuList