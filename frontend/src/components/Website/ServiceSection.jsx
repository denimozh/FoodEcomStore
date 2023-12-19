import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { orange } from '@mui/material/colors';

const ServiceSection = () => {
  return (
    <div>
      <div>
        <p className='text-center text-3xl font-semibold pb-10 pt-20'>Our Excellent Services</p>
        <p className='text-center text-lg'>Check out some of the proud premium services we offer to our customers <br/> and why we are
        the best rated food delivery service in London</p>
      </div>
      <div className='flex flex-row pt-12 gap-6 pb-24'>
        <div className='bg-white rounded-lg justify-center px-4 py-6 basis-1/4'>
          <div className='flex justify-center'>
            <div className='pt-4 items-center '>
              <DeliveryDiningIcon sx={{color: orange[700], fontSize: 200}} className='bg-slate-100 rounded-full'/>
            </div>
          </div>
          <div className='pt-8'>
            <p className='text-2xl font-medium text-center'>Super Fast Delivery</p>
          </div>
          <div className='pt-4'>
            <p className='text-center'>We provide a fast and efficient delivery system making sure your food doesn't get hot</p>
          </div>
        </div>
        <div className='bg-white rounded-lg justify-center px-4 py-6 basis-1/4'>
          <div className='flex justify-center'>
            <div className='pt-4 items-center '>
              <DinnerDiningIcon sx={{color: orange[700], fontSize: 200}} className='py-1 px-1 bg-slate-100 rounded-full'/>
            </div>
          </div>
          <div className='pt-8'>
            <p className='text-2xl font-medium text-center'>Top Notch Healthy Food</p>
          </div>
          <div className='pt-4'>
            <p className='text-center'>We provide a menu complete with healthy food which is great for your diet</p>
          </div>
        </div>
        <div className='bg-white rounded-lg justify-center px-4 py-6 basis-1/4'>
          <div className='flex justify-center'>
            <div className='pt-4 items-center'>
              <GroupsIcon sx={{color: orange[700], fontSize: 200}} className='bg-slate-100 rounded-full'/>
            </div>
          </div>
          <div className='pt-8'>
            <p className='text-2xl font-medium text-center'>The Best Cooks In London</p>
          </div>
          <div className='pt-4'>
            <p className='text-center'>We hire and to make sure that each member of our team is certified and trained</p>
          </div>
        </div>
        <div className='bg-white rounded-lg justify-center px-4 py-6 basis-1/4'>
          <div className='flex justify-center'>
            <div className='pt-4 items-center'>
              <CurrencyExchangeIcon sx={{color: orange[700], fontSize: 200}} className=''/>
            </div>
          </div>
          <div className='pt-8'>
            <p className='text-2xl font-medium text-center'>Our 2 for One Gurantee</p>
          </div>
          <div className='pt-4'>
            <p className='text-center'>If your food doesn't arrive hot or in the correct condition we offer a full money back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection