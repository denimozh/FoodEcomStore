import React from 'react'
import { AboutUs, Blog, Bottom, CTA, HeroSection, MenuSection, Navbar, ServiceSection, TeamSection } from '../../components'

const MainPage = () => {
  return (
    <div className=''>
        <div className='bg-orange-50'>
            <div className='px-40'>
                <Navbar />
                <div className='pb-40 pt-5'>
                    <HeroSection />
                </div>
            </div>
        </div>
        <div className='px-40'>
            <MenuSection />
            <ServiceSection />
            <TeamSection />
        </div>
        <div className='bg-orange-50'>
            <div className='px-40'>
                <AboutUs />
            </div>
        </div>
        <div className='px-40'>
            <Blog />
        </div>
        <div className='bg-orange-50'>
            <div className='px-40'>
                <CTA />
            </div>
        </div>
        <div className='bg-slate-950'>
            <div className='px-40 '>
                <Bottom />
            </div>
        </div>
    </div>
  )
}

export default MainPage