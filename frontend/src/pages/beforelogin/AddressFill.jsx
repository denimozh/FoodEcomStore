import React from 'react'
import { Navbar } from '../../components'
import AddressSubmit from '../../components/AddressFill/AddressSubmit'
import { Bottom } from '../../components'

const AddressFill = () => {
  return (
    <div className=''>
      <div className='px-56 pb-12 '>
        <Navbar />
      </div>
      <AddressSubmit />
      <div className='bg-slate-900'>
        <Bottom />
      </div>
    </div>
  )
}

export default AddressFill