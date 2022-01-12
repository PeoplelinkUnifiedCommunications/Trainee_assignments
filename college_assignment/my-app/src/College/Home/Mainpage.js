import React from 'react';
import './Mainpage.css';
import aicte from './aicte.png';
import naac from './naac.jpg';
import nba from './nba.png';
import ugc from './ugc.png';

function MainPage () {
    return (
        <div className='background_container'>
            <div className='body_content'>
                <div className='accred_container'>
                    <img className='accreditation'  src= {aicte} />
                    <img className='accreditation'  src= {naac} />
                    <img className='accreditation'  src= {nba} />
                    <img className='accreditation'  src= {ugc} />
                </div>
                <p className='clg_description'>ACE Engineering College was established by Yadala Satyanarayana Memorial Educational Society with the fundamental objective of nurturing the group of nascent talent of young minds aspiring to make career in engineering into a pool of valuable and employable engineers. In addition, they understand their responsibility to willfully render services to the society with dignity and accountability.
                    Prof. Y. V. Gopala Krishna Murthy, an Educationist, Engineer, Motivator, and founder of ACE Engineering Academy is at the helm of academic affairs in the college. The Academy, a premier coaching center for GATE, ESE(IES) and Public Service Commission selections conducted by various state governments for recruitment of engineering graduates, is the most sought after coaching center and has been consistently contributing toppers to all the premier technological institutions in India viz., IITs, IISc, NITs and other universities. The Academy, in the last two decades of its committed services in the training and coaching sectors for engineering graduates across the country, has produced toppers in Engineering Services, as also state service Commissions recruitments.
                    ACE Engineering College was established in 2007 in a sprawling campus spreading over 10 acres of land. Situated in serene locales on the suburbs of Hyderabad on Hyderabad –Warangal National Highway, ACE provides an excellent ambience conducive for fruitful engagement of learners and faculty. Surrounding lush greenery filled plains and adjoining urban forest department land add to the tranquility that reminds one of ancient Indian gurukula. The college is well connected by road. It is just 20 Km from Uppal and about 28 Km from Secunderabad. The college offers B.Tech courses in CE, EEE, ME, ECE, CSE, CSE (AI & ML), CSE (DS), CSE (IoT) & IT Branches. CE, EEE, ME, ECE and CSE course are NBA accredited. The college is Conferred Autonomous status for ten years w.e.f AY 2020-21</p>
                <div className='footer_container'>
                    <h3 className='contact_us'>Contact Us <hr/></h3>
                    <div>
                    <span className='footer'><b>Location: </b>Ankushapur, Ghatkesar Mandal,
                        Medchal District,
                        Telangana. 501 301. </span>
                        <span className='footer'><b>Phone: </b>+91-91333 08494, 99123 91169</span> 
                        <span className='footer'><b> Email: </b>admissions@aceec.ac.in</span> 
                        <span className='footer'><b> Website: </b><a href='https://www.aceec.ac.in/' target="_blank">www.aceec.ac.in</a></span>
                    </div>
                </div>
            </div>
            
        </div>
    ) 
} 

export default MainPage;