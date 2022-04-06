import React from 'react'
import './bodyContainer.css'
import '../header/header.css'

function BodyContainer() {
    return (
        <div className=''>
            <div className='dContainer'>
                <div className=''>
                    <div className='jtc flexRow'>
                        <img src="discordd.svg" alt="logo" className='icon' />
                        <p className='jtcText'>Join the Community</p>
                    </div>
                    <div className='sign flexRow'>
                        <p className='signText'>SIGN IN</p>
                        <p className='signText' style={{ marginLeft: "0.5rem" }}>|</p>
                        <p className='signText'>SIGN UP</p>
                    </div>
                    <div>
                        <button className='ttuBtn'>
                            Talk To Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='bodyCont'>
                <div className='flexCol'>
                    <div className=''>
                        <div>
                            <img src="home-banner1.png" alt="home-banner" className='banner' />
                        </div>
                        <div className=''>
                            <h4 className='introHeading head4'>INTRODUCING ENABLEX</h4>
                            <h1 className='head1'>Build Powerful Apps With EnableX</h1>
                            <h2 className='head2'>The Engagement Platform For <br /> LiveVideo, Voice and Messaging</h2>
                            <p className='para'>Carrier-grade, customisable and AI-enabled solutions for secured business <br />
                                communications without any additional infrastructure. </p>
                        </div>
                    </div>
                    <div>
                        <button className='tffBtn'>Try for Free</button>
                        <button className='csBtn'>Contact Sales</button>
                    </div>
                    <div>
                        <img className='companyLogos' src="bfc-logo.png" alt='bfc-logo' />
                        <img className='companyLogos' src="GlobalLogic-Logo.png" alt='bfc-logo' />
                        <img className='companyLogos' src="gslab.png" alt='bfc-logo' />
                        <img className='companyLogos' src="qsesl.png" alt='bfc-logo' />
                        <img className='companyLogos' src="softtech-img.png" alt='bfc-logo' />
                        <img className='companyLogos' src="digital-agent.png" alt='bfc-logo' />
                    </div>
                    <div>
                        <button className='vcsBtn'>View Customer Stories</button>
                    </div>
                </div>
                <div className='featuresContainer flexRow'>
                    <div className='card'>
                        <h2 className='h2'>Build In-app</h2>
                        <h2 className='h2'>Omnichannel Conversations.</h2>
                        <p className='p'>Its that easy with</p>
                        <h3 className='pStyle'>EnableX Communication APIs</h3>
                        <div>
                            <img className='buildApp' src="build-app1.png" alt='build-app' />
                        </div>
                        <p className='para1'>Use the programming language of your choice to quickly and easily build production-ready Live Video, Voice, and Messaging applications on the Developer-trusted, API-powered platform. </p>
                        <div style={{ textAlign: "center" }}>
                            <button className='btn1'>Programmable APIs and SDKs</button>
                        </div>
                    </div>

                    <div className='card'>
                        <h2 className='h2'>You Design.</h2>
                        <h2 className='h2'>It Codes.</h2>
                        <p className='p'>Its that Magical with</p>
                        <h3 className='pStyle'>EnableX Visual Builder</h3>
                        <div>
                            <img className='buildApp' src="pink-visual.png" alt='build-app' />
                        </div>
                        <p className='para1'>Embed powerful video calling to your app or sites in minutes. Powered by the world’s only Visual Builder tool, you can design your very own UI with just a few clicks, drags and drops.</p>
                        <div style={{ textAlign: "center" }}>
                            <button className='btn1'>No-Code Visual Builder</button>
                        </div>
                    </div>
                </div>

                <div className='smallCardsContainer'>
                    <div className='featureCards'>
                        <img className='featureIcons' src="video.png" alt='video' />
                        <p>Video</p>
                    </div>
                    <div className='featureCards'>
                        <img className='featureIcons' src="emotion.png" alt='video' />
                        <p>Emotion AI</p>
                    </div>
                    <div className='featureCards'>
                        <img className='featureIcons' src="voice.png" alt='video' />
                        <p>Voice</p>
                    </div>
                    <div className='featureCards'>
                        <img className='featureIcons' src="sms.png" alt='video' />
                        <p>SMS</p>
                    </div>
                    <div className='featureCards'>
                        <img className='featureIcons' src="chat.png" alt='video' />
                        <p>Chat</p>
                    </div>
                    <div className='featureCards'>
                        <img className='featureIcons' src="number.png" alt='video' />
                        <p>Virtual Number</p>
                    </div>
                </div>
                <div className='bgColor flexRow'>
                    <div className='flexRow'>
                        <img className='smallLogo' src="background-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Background Blurring</p>
                    </div>
                    <div className='flexRow'>
                        <img className='smallLogo' src="recording-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Recording</p>
                    </div>
                    <div className='flexRow'>
                        <img className='smallLogo' src="whiteboard-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Whiteboarding</p>
                    </div>
                    <div className='flexRow'>
                        <img className='smallLogo' src="screen-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Screen Sharing</p>
                    </div>
                    <div className='flexRow'>
                        <img className='smallLogo' src="lock-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Lock Room</p>
                    </div>
                    <div className='flexRow'>
                        <img className='smallLogo' src="lobby-room-pink.png" alt='bg' />
                        <p style={{ alignSelf: "center" }}>Waiting Lobby</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyContainer