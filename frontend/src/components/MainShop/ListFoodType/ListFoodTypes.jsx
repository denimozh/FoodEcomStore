import React from 'react'
import ListComponent from './ListComponent'
import Asian from "../images/icons/Asian.png"
import Italian from "../images/icons/Italian.png"
import Korean from "../images/icons/Korean.png"
import Salad from "../images/icons/Salad.png"
import Sandwich from "../images/icons/Sandwich.png"
import Smoothie from "../images/icons/Smoothie.png"
import Thai from "../images/icons/Thai.png"
import Vegan from "../images/icons/Vegan.png"

const ListFoodTypes = () => {
  return (
      <div className='flex flex-row justify-center pr-24'>
        <div className='flex flex-row gap-14 '>
            <ListComponent url={Asian} text={"Asian"}/>
            <ListComponent url={Italian} text={"Italian"}/>
            <ListComponent url={Korean} text={"Korean"}/>
            <ListComponent url={Salad} text={"Salad"}/>
            <ListComponent url={Sandwich} text={"Sandwich"}/>
            <ListComponent url={Thai} text={"Thai"}/>
            <ListComponent url={Vegan} text={"Vegan"}/>
            <ListComponent url={Smoothie} text={"Smoothie"}/>
        </div>
    </div>
  )
}

export default ListFoodTypes