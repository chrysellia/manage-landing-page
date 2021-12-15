import React from 'react'
import Navbar from '../Navbar/Navbar.component'
import Hero from '../Hero/Hero.component'
import Body from '../Body/Body.component'
import Testimonials from '../Testimonials/Testimonials.component'

const MainComponent = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Body/>
            <Testimonials/>

        </div>
    )
}

export default MainComponent
