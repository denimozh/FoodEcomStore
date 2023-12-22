import React from 'react'
import Team1 from "./images/chefTeam1.jpg"
import Team2 from "./images/chefTeam2.jpg"
import Team3 from "./images/chefTeam3.jpg"
import Team4 from "./images/chefTeam4.jpg"

const TeamSection = () => {
  return (
    <div className='pt-20 pb-32'>
      <div>
        <div className='flex flex-row gap-4 justify-center items-center pr-6 pb-12'>
          <p className='text-center text-5xl font-semibold'>Our </p>
          <p className='text-center text-5xl font-semibold '>Special</p>
          <p className='text-5xl font-semibold text-orange-500 border-b-4 border-orange-300 pt-1 rounded-md'>Chefs</p>
        </div>
        <p className='text-center pb-14 text-lg'>You're in the right place! We've changed our name to better reflect our goal to <br/>make cooking more accessible for everyone.</p>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team1} alt='chef1' className=''/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium pr-2'>Anna Gorland</p>
              <p className='text-white text-center pr-2 pt-1'>Head Cook Of MayFair Establishment</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team2} alt='chef2' className=''/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium '>Edward Monrow</p>
              <p className='text-white text-center pt-1'>Head Cook Of Hamlet Establishment</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team3} alt='chef3'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium'>Ejan Anthony</p>
              <p className='text-white text-center pt-1'>Head Cook Of Embankment Establishment</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team4} alt='chef4'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium pl-2'>Ralph Wayne</p>
              <p className='text-white text-center pl-2 pt-1'>Head Cook Of Camden Establishment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection