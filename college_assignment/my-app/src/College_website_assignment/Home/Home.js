import React from 'react' 

import aicte from './aicte.png'
import naac from './naac.jpg'
import nba from './nba.png'
import ugc from './ugc.png'

import './Home.css'

function Home() {
    return (
        <div className='main_container'>
            <div className='flex_column img_container'>
                <h1>Accrediated by</h1>
                <div>
                    <img className='accred_img'  src={naac} alt="accred"/>
                    <img className='accred_img' src={aicte} alt="accred"/>
                    <img className='accred_img'  src={ugc} alt="accred"/>
                    <img className='accred_img'  src={nba} alt="accred"/>
                </div>
            </div>

            <p className='description'>ACE Engineering College was established by Yadala Satyanarayana Memorial Educational Society with the fundamental objective of nurturing the group of nascent talent of young minds aspiring to make career in engineering into a pool of valuable and employable engineers. In addition, they understand their responsibility to willfully render services to the society with dignity and accountability.

                Prof. Y. V. Gopala Krishna Murthy, an Educationist, Engineer, Motivator, and founder of ACE Engineering Academy is at the helm of academic affairs in the college. The Academy, a premier coaching center for GATE, ESE(IES) and Public Service Commission selections conducted by various state governments for recruitment of engineering graduates, is the most sought after coaching center and has been consistently contributing toppers to all the premier technological institutions in India viz., IITs, IISc, NITs and other universities. The Academy, in the last two decades of its committed services in the training and coaching sectors for engineering graduates across the country, has produced toppers in Engineering Services, as also state service Commissions recruitments.

                ACE Engineering College was established in 2007 in a sprawling campus spreading over 10 acres of land. Situated in serene locales on the suburbs of Hyderabad on Hyderabad –Warangal National Highway, ACE provides an excellent ambience conducive for fruitful engagement of learners and faculty. Surrounding lush greenery filled plains and adjoining urban forest department land add to the tranquility that reminds one of ancient Indian gurukula. The college is well connected by road. It is just 20 Km from Uppal and about 28 Km from Secunderabad. The college offers B.Tech courses in CE, EEE, ME, ECE, CSE, CSE (AI & ML), CSE (DS), CSE (IoT) & IT Branches. CE, EEE, ME, ECE and CSE course are NBA accredited. The college is Conferred Autonomous status for ten years w.e.f AY 2020-21</p>
        
            <div className='footer'>
                <div>
                    <h4 className='contact'>Contact Us</h4>
                </div>
                <div>
                    <span><b>Location: </b>Ankushapur, Ghatkesar Mandal, Medchal District, Telangana 501 301</span>
                    <span><b>Phone: </b>9133308533, 9133308468, 9912391169</span>
                    <span><b>Email: </b>aceenggcollege@gmail.com</span>
                    <span><b>Website: </b>www.aceec.ac.in</span>
                </div>
            </div>
        </div>

        

    )
}

export default Home;