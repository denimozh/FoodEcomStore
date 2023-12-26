import React from 'react'

const ListComponent = ({url, text}) => {
  return (
    <div className='justify-center items-center'>
        <img src={url} alt='icon' className='w-[60px] h-[55px]'/>
        <p className='text-center'>{text}</p>
    </div>
  )
}

export default ListComponent