import React from 'react'
import Button from '../UI/Button'
import aboutUsChef from './images/aboutUsChef.png'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { orange } from '@mui/material/colors';

const AboutUs = () => {
  return (
    <div>
      <div className='flex gap-40 pt-32 '>
        <div className='basis-3/5 bg-orange-300 rounded-br-[80px] relative'>
          <img src={aboutUsChef} alt=' ' className='pl-56'/>
          <div className='absolute bottom-40 left-16 bg-white rounded-lg -rotate-12'>
            <div className='px-3 py-3'>
              <div className=' bg-red-200 rounded-full py-2 px-2'>
                <LocalDiningIcon sx={{ color: orange[800], fontSize: 80}}/>
              </div>
            </div>
          </div>
          <div className='absolute -right-16 -top-14 bg-white rounded-lg px-5 py-5'>
            <p className='font-semibold pb-2'>Quality Check</p>
            <div className='flex flex-row bg-orange-300 rounded-lg px-1 py-1 border-2 border-orange-400'>
              <div className='pl-1'>
                <FreeBreakfastIcon sx={{ color: orange[800]}}/>
              </div>
              <p className='pl-2 pr-4'>Breakfast</p>
            </div>
            <div className='pt-2'>
              <div className='flex flex-row bg-orange-300 rounded-lg px-1 py-1 border-2 border-orange-400'>
                <div className='pl-1'>
                  <LunchDiningIcon sx={{ color: orange[800]}}/>
                </div>
                <p className='pl-2 pr-4'>Lunch</p>
              </div>
            </div>
            <div className='pt-2'>
              <div className='flex flex-row bg-orange-300 rounded-lg px-1 py-1 border-2 border-orange-400'>
                <div className='pl-1'>
                  <DinnerDiningIcon sx={{ color: orange[800]}}/>
                </div>
                <p className='pl-2 pr-4'>Dinner</p>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-2/5'>
          <p className='font-medium text-3xl'>About Us We have proven to deliver quality</p>
          <p className='tracking-wide pt-8 pb-8'>Food Dev is a fast growing and promising food delivery service in the UK. With excellent customer service you can count on us to deliver.</p>
          <Button text={"Read More"}/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs