import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const StoreNavbar = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between pt-4 pb-4'>
            <div className='flex flex-row gap-10 '>
              <p className='text-xl text-orange-600 font-medium'>HOME</p>
              <p className='text-xl text-orange-600 font-medium'>MENU</p>
            </div>
            <div className='flex pb-1'>
                <p className='text-2xl text-orange-500'>Food<b>Dev</b></p>
            </div>
            <div className='flex flex-row items-center gap-6'>
              <div className='flex flex-row bg-black rounded-full px-3 py-3'>
                <div className='pl-1'>
                  <ShoppingCartIcon style={{ color: 'white' }}/>
                </div>
                <p className='xl pl-2 text-white font-medium'>Basket</p>
                <p className='xl pl-2 pr-1 text-white font-medium'>1</p>
              </div>
              <Link to='/'>
                <div className=' flex flex-row items-center bg-slate-100 rounded-full px-3 py-3 shadow-lg hover:bg-slate-200'>
                  <div className='pl-1'>
                    <PersonIcon />
                  </div>
                  <p className='text-xl pl-1 pr-1'>Log In</p> 
                </div>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default StoreNavbar