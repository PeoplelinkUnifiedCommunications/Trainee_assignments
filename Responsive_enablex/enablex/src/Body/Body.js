import React from 'react'
import './body.css'

function Body() {
    return (
        <div className='bodyContainer'>
            <div>
                <div>
                    <h4 className='head1'>INTRODUCING ENABLEX</h4>
                    <h1 className='head2'>Build Powerful Apps With EnableX</h1>
                    <h2 className='head3'>The Engagement Platform For <br /> LiveVideo, Voice and Messaging</h2>
                    <p className='p1'>Carrier-grade, customisable and AI-enabled solutions for secured business <br />
                        communications without any additional infrastructure. </p>
                </div>
                <div>
                    <img src="home-banner1.png" alt="home-banner" className='bannerPic' />
                </div>
            </div>
            <div className='btnContainer flexRow'>
                <button className='tffBtn'>Try for Free</button>
                <button className='csBtn'>Contact Sales</button>
            </div>
            <div className='cLogoContainer'>
                <div className='c'>
                    <div className='logos'>
                        <img className='companyLogos' src="./Logos-Practice/Samarpan-Final-Logo.png" alt='bfc-logo' />
                        <img className='companyLogos' src="./Logos-Practice/czentrix.png" alt='bfc-logo' />
                    </div>
                    <div className='logos'>
                        <img className='companyLogos' src="./Logos-Practice/engage.png" alt='bfc-logo' />
                        <img className='companyLogos' src="./Logos-Practice/infosys.png" alt='bfc-logo' />
                    </div>
                    <div className='logos'>
                        <img className='companyLogos' src="./Logos-Practice/vlcc.png" alt='bfc-logo' />
                        <img className='companyLogos' src="./Logos-Practice/lifecell.png" alt='bfc-logo' />
                    </div>
                </div>
            </div>
            <div>
                <button className='vcsBtn'>View Customer Stories</button>
            </div>

            <div className='cardContainer'>
                <div className='card1'>
                    <div>
                        <div>
                            <h2 className='biHeading'>Build In-app <br />
                                Omnichannel Conversations.</h2>
                            <p className='iteHeading'>Its that easy with</p>
                            <h3 className='exHeading'>EnableX Communication APIs</h3>
                        </div>
                        <div>
                            <img className='buildImg' src="build-app1.png" alt='build-app' />
                        </div>
                        <p className='p2'>Use the programming language of your choice to quickly and easily build production-ready Live Video, Voice, and Messaging applications on the Developer-trusted, API-powered platform. </p>
                        <button className='pasBtn'>Programmable APIs and SDKs</button>
                    </div>

                    <div>
                        <img className='imgBuild' src="build-app1.png" alt='build-app' />
                        <button className='passBtn'>Programmable APIs and SDKs</button>
                    </div>
                </div>

                <div className='card2'>
                    <div>
                        <div>
                            <h2 className='biHeading1'>You Design.<br />It Codes.</h2>
                            <p className='iteHeading1'>Its that Magical with</p>
                            <h3 className='exHeading1'>EnableX Visual Builder</h3>
                        </div>
                        <div>
                            <img className='buildImg' src="pink-visual.png" alt='build-app' />
                        </div>
                        <p className='p3'>Embed powerful video calling to your app or sites in minutes. Powered by the worlds only Visual Builder tool, you can design your very own UI with just a few clicks, drags and drops.</p>
                        <button className='ncvBtn'>No-code Visual Builder</button>
                    </div>
                    <div>
                        <img className='imgBuild' src="pink-visual.png" alt='build-app' />
                        <button className='nccvBtn'>Programmable APIs and SDKs</button>
                    </div>
                </div>

            </div>

            <div className='flexRow logoContainer'>
                <img className='smallLogo' src="screen-pink.png" alt='bg' />
                <img className='smallLogo' src="recording-pink.png" alt='bg' />
                <img className='smallLogo' src="whiteboard-pink.png" alt='bg' />
                <img className='smallLogo' src="lock-pink.png" alt='bg' />
                <img className='smallLogo' src="lobby-room-pink.png" alt='bg' />
                <img className='smallLogo' src="background-pink.png" alt='bg' />
                <img className='smallLogo' src="breakroom-pink.png" alt='bg' />
            </div>
        </div>
    )
}

export default Body