import React from 'react';
import './Testimonials.style.scss'

const Testimonials = () => {
    return (
        <div className="testimonials-page">
            <div className="testimonials-wrapper">
                <div className="testimonials-title">What they've said</div>

                {/* Desktop */}
                <div className="testimonials-desktop">
                    <div className="card-wrapper">
                        {/* Card */}
                        <div className="testimonials-card">
                            <div className="card-image">
                                <img src="images/avatar-anisha.png"/>
                            </div>
                            <div className="card-title">Anisha Li</div>
                            <div className="card-content">
                                <p>
                                    "...has supercharged our team's workflow. The <br/>
                                    maintain visibility on larger milestone at all times <br/>
                                    keeps everyone motivated."
                                </p>
                            </div>
                        </div>
                        <div className="testimonials-card">
                            <div className="card-image">
                            <img src="images/avatar-ali.png"/>
                            </div>
                            <div className="card-title">Ali Bravo</div>
                            <div className="card-content">
                                <p>
                                    "We have been able to cancel so many other subscriptions <br/>
                                    since using Manage. There is no more cross-channel <br/>
                                    confusion and everyone is much more focused."
                                </p>
                            </div>
                        </div>
                        <div className="testimonials-card">
                            <div className="card-image">
                            <img src="images/avatar-richard.png"/>
                            </div>
                            <div className="card-title">Richard Watts</div>
                            <div className="card-content">
                                <p>
                                    "Manage allows us to provide structure and <br/>
                                    keeps us organized and focused. I can't stop recording <br/>
                                    them to everyone I talk to!"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-button">
                        <div className="button-style">
                            <div className="button-text">Get started</div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="testimonials-mobile">
                    <div className="card-wrapper">
                        {/* Card */}
                        <div className="testimonials-card">
                            <div className="card-image">
                                <img src="images/avatar-anisha.png"/>
                            </div>
                            <div className="card-title">Anisha Li</div>
                            <div className="card-content">
                                <p>
                                    "...has supercharged our team's workflow. The <br/>
                                    maintain visibility on larger milestone at all times <br/>
                                    keeps everyone motivated."
                                </p>
                            </div>
                        </div>
                        <div className="testimonials-card">
                            <div className="card-image">
                            <img src="images/avatar-ali.png"/>
                            </div>
                            <div className="card-title">Ali Bravo</div>
                            <div className="card-content">
                                <p>
                                    "We have been able to cancel so many other subscriptions <br/>
                                    since using Manage. There is no more cross-channel <br/>
                                    confusion and everyone is much more focused."
                                </p>
                            </div>
                        </div>
                        <div className="testimonials-card">
                            <div className="card-image">
                            <img src="images/avatar-richard.png"/>
                            </div>
                            <div className="card-title">Richard Watts</div>
                            <div className="card-content">
                                <p>
                                    "Manage allows us to provide structure and <br/>
                                    keeps us organized and focused. I can't stop recording <br/>
                                    them to everyone I talk to!"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dot-slide">
                        <div className="dot-item"></div>
                        <div className="dot-item"></div>
                        <div className="dot-item"></div>
                        <div className="dot-item"></div>
                    </div>
                    <div className="testimonials-button">
                        <div className="button-style">
                            <div className="button-text">Get started</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
