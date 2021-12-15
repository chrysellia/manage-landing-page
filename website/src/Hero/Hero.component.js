import React from 'react';
import './Hero.style.scss';

const Hero = () => {
    return (
        <div className="hero-page">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <div className="hero-title">Bring everyone <br/> together to build <br/> better products.</div>

                    <div className="hero-description">
                        <p>
                            Manage makes it simple for software teams<br/>
                            to plan day-to-day tasks while keeping the <br/>
                            larger team goals in view.
                        </p>
                    </div>

                    <div className="click-button">
                        <div className="button-design">
                            <div className="button-content">Get started</div>
                        </div>
                    </div>
                </div>

                <div className="hero-bloc">
                    <div className="bloc-wrapper">
                        <div className="bloc-image">
                            <img src="images/illustration-intro.svg"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero