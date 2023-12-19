import React from 'react'
import Button from '../UI/Button'
import chef from "./images/chef.png"
import customer from "./images/customer.avif";
import MopedIcon from '@mui/icons-material/Moped';
import { orange } from '@mui/material/colors';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const HeroSection = () => {
  return (
    <div className='pt-16 flex justify-between w-full gap-4'>
      <div className='flex flex-row'>
        <div className='pr-48 basis-3/6'>
          <div className='pb-10'>
            <div className='bg-white rounded-full w-64 h-12 display-flex flex items-center drop-shadow-xl'>
              <p className='p-12 text-orange-500 font-medium'>MORE THAN FASTER</p>
            </div>
          </div>
          <div className='pb-4'>
            <p className='font-bold text-6xl tracking-wide leading-snug'>Instant Food, for Instant Hunger</p>
          </div>
          <div className='pt-8 pb-6 leading-8'>
            <p className='text-lg'>
              Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company
              which delivers food to a customer.
            </p>
          </div>
          <div className='pt-8'>
            <Button width={40} height={14} text={"Get Started"}/>
          </div>
        </div>
        <div className='basis-3/6 relative'>
          <div className='bg-white w-auto rounded-lg h-auto absolute top-5 -left-5 shadow-xl'>
                <div className='px-6 py-3'>
                  <div className='pb-2 flex items-center'>
                    <MopedIcon sx={{color: orange[600], fontSize: 40}}/>
                    <p className='font-semibold text-xl pl-4'>Fast Delivery</p>
                  </div>
                  <p>Fastest Growing and Processing <br />Delivery chain in London</p>
                </div>
          </div>
          <div className='bg-white w-auto rounded-lg h-auto absolute bottom-5 -left-3 shadow-xl'>
                <div className='px-6 py-3'>
                  <div className='flex flex-row items-center'>
                    <div>
                      <img src={customer} alt="" className='rounded-full w-[50px] h-[50px]'/>
                    </div>
                    <div>
                      <div className='pb-1'>
                        <p className='font-semibold text-xl pl-4'>Our customers are happy</p>
                      </div>
                      <div className='flex items-center pb-1 pl-4'>
                        <svg class="w-4 h-4 text-orange-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <p className='font-medium'>3.5k</p>
                        <div className='pl-2 flex items-center'>
                          <svg class="w-4 h-4 text-orange-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                          <p className='text-base'>Over 100k Customers Served</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='bg-white w-auto rounded-lg h-auto absolute top-48 -right-20 shadow-xl'>
                <div className='px-6 py-3'>
                  <div className='pb-2 flex items-center'>
                    <FmdGoodIcon sx={{color: orange[700], fontSize: 40}}/>
                    <p className='font-semibold text-xl pl-3'>Nearest Place</p>
                  </div>
                  <p>We have over 300 Delivery chain <br />all across London</p>
                </div>
            </div>
          <div className='bg-orange-300 rounded-full'>
            <img src={chef} alt="" className='pl-28'/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection