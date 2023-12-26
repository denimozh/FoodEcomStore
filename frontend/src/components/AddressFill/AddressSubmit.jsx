import React from 'react'
import pasta from "./images/pasta.png"
import { Link } from 'react-router-dom'

const AddressSubmit = () => {
  return (
    <div className='bg-gradient-to-br from-[#FF8008] to-[#FFC837] flex justify-center'>
        <div>
            <div className='px-56 pb-16'>
                <div className='-translate-y-14'>
                    <div className='pl-32'>
                        <img src={pasta} alt=" " className='scale-125 '/>
                    </div>
                    <div className=' basis-1/2 bg-white px-20 py-10 rounded-lg shadow-lg -translate-y-14'>
                        <p className='text-5xl font-bold text-orange-500 text-center'>Tuck into a <span className='text-orange-600'>healthy</span> meal today</p>
                        <p className='text-xl text-center font-normal pt-6 pb-6'>Let us know where to deliver your healthy takeway to</p>
                        <div className='border rounded-full px-2 py-1 flex flex-row justify-between border-black '>
                            <input className='bg-white-400 pl-5 outline-none w-4/5 placeholder:text-black rounded-full' placeholder="Enter your postcode"></input>
                            <Link to="/store">
                                <button className='bg-orange-500 text-xl py-4 px-9 rounded-full text-white font-medium tracking-wide hover:bg-orange-400'>Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddressSubmit