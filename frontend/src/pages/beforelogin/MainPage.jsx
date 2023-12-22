import React from 'react'
import { AboutUs, Bottom, CTA, HeroSection, MenuSection, Navbar, TeamSection } from '../../components'

const MainPage = () => {
  return (
    <div className=''>
        <div className='bg-orange-50'>
            <div className='px-56'>
                <Navbar />
                <div className='pb-36 pt-5'>
                    <HeroSection />
                </div>
            </div>
        </div>
        <div className='px-56'>
            <div className='pt-40 pb-32'>
                <MenuSection />
            </div>
        </div>
        <div className='bg-orange-50'>
            <div className='px-56'>
                <TeamSection />
            </div>
        </div>
        <div className=''>
            <div className='px-56'>
                <AboutUs />
            </div>
        </div>
        <div className='bg-orange-50'>
            <div className='px-56'>
                <CTA />
            </div>
        </div>
        <div className='bg-slate-950'>
            <div className='px-56'>
                <Bottom />
            </div>
        </div>
    </div>
  )
}

export default MainPage