import React from 'react'
import Navbar from '../Navbar/Navbar.component'
import Hero from '../Hero/Hero.component'
import Body from '../Body/Body.component'
import Testimonials from '../Testimonials/Testimonials.component'
import PreFooter from '../PreFooter/PreFooter.component'
import Footer from '../Footer/Footer.component'

const MainComponent = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Body/>
            <Testimonials/>
            <PreFooter/>
            <Footer/>
        </div>
    )
}

export default MainComponent
