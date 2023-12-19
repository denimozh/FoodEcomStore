import React from 'react'
import Team1 from "./images/chefTeam1.jpg"
import Team2 from "./images/chefTeam2.jpg"
import Team3 from "./images/chefTeam3.jpg"
import Team4 from "./images/chefTeam4.jpg"

const TeamSection = () => {
  return (
    <div>
      <div>
        <p className='text-center'>Our Special Chefs</p>
        <p className='text-center'>You're in the right place! We've changed our name to better reflect our goal to make cooking more accessible for everyone.</p>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team1} alt='chef1'/>
            <div className='absolute bottom-0'>
              <p>adam</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team2} alt='chef2'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium pr-2'>Adam Gorland</p>
              <p className='text-white text-center pr-2'>Head Cook Of MayFair Establishment</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team3} alt='chef3'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium pr-2'>Adam Gorland</p>
              <p className='text-white text-center pr-2'>Head Cook Of MayFair Establishment</p>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='relative'>
            <img src={Team4} alt='chef4'/>
            <div className='absolute bottom-0 bg-gradient-to-t from-black from-40% py-4 w-full'>
              <p className='text-white text-center font-medium pr-2'>Adam Gorland</p>
              <p className='text-white text-center pr-2'>Head Cook Of MayFair Establishment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection