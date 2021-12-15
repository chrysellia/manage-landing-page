import React from 'react'
import './Body.style.scss'

const Body = () => {
    return (
        <div className="body-page">
            <div className="body-wrapper">

                <div className="body-content">
                    <div className="body-title">What's different about <br/> Manage?</div>
                    <div className="body-description">
                        <p>
                            Manage provides all the functionality your <br/>
                            team needs without the complexity. Our <br/>
                            software is tailor-made for modern digital <br/>
                            product teams.
                        </p>
                    </div>
                </div>

                <div className="body-services">
                    <div className="services-wrapper">
                        <div className="services-card">
                            <div className="services-title">
                                <div className="services-rank">1</div>
                                <div className="main-title">Track company-wide progress</div>
                            </div>
                            <div className="services-description">
                                <p>
                                    See how your day-to-day tasks fit into the wider vision. <br/>
                                    Go from tracking progess at the milestone level all the <br/>
                                    way done to the smallest of details. Never lose sight of <br/> the bigger picture again.
                                </p>
                            </div>
                        </div>

                        <div className="services-card">
                            <div className="services-title">
                                <div className="services-rank">2</div>
                                <div className="main-title">Advanced built-in reports</div>
                            </div>
                            <div className="services-description">
                                <p>
                                    Set internal delivery estimates and track progress toward <br/>
                                    company goals. Our customisable dashboard helsp you <br/>
                                    build oout the reports you nedd to keep key stakeholders <br/> informed.
                                </p>
                            </div>
                        </div>

                        <div className="services-card">
                            <div className="services-title">
                                <div className="services-rank">3</div>
                                <div className="main-title">Everything you nedd in one place</div>
                            </div>
                            <div className="services-description">
                                <p>
                                    Stop jumping from one service to another to <br/>
                                    communicate, store files, track tasks and share <br/>
                                    documents. Manage offers an all-in-one team <br/> productivity solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
