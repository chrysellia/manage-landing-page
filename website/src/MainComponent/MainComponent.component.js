import React from 'react'
import Navbar from '../Navbar/Navbar.component'
import Hero from '../Hero/Hero.component'
import Body from '../Body/Body.component'
import Testimonials from '../Testimonials/Testimonials.component'
import PreFooter from '../PreFooter/PreFooter.component'
import Footer from '../Footer/Footer.component'
import './MainComponent.style.scss'

const MainComponent = () => {
    return (
        <div className="main-wrapper">
            <div className="main-background">
                <div className="background-vector">
                    <svg xmlns="http://www.w3.org/2000/svg" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
                </div>
            </div>
            <div className="main-component">
                <Navbar/>
                <Hero/>
                <Body/>
                <Testimonials/>
                <PreFooter/>
                <Footer/>
            </div>
        </div>
    )
}

export default MainComponent
