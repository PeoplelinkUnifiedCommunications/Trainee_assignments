import './index.css'

function Experience(){
    return(
        <div className="experience-bg-container">
            <div className='experience-text-card'>
                <h1 className='experience-heading'>Over the <br/> past 11 years,</h1>
                <p className='experience-paragraph'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p className='experience-paragraph'>Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.</p>
                <p className='experience-paragraph'>Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored at providing fast, automated VAT Registration / filings &amp; Returns solutions for multi-channel sellers across Europe.</p>
                <p className='experience-paragraph'>Prior to hellotax, I was Senior frontend engineering contractor with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.</p>
                <p className='experience-paragraph'>I once also led the frontend team at a Russian startup, Conectar through building multiple React applications into a single robust learning platform.</p>
            </div>
            <div className='experience-image-container'>
                <img  className='experiance-image' src="https://www.learnqoch.com/wp-content/uploads/2021/09/coding-tech.jpg" alt="experiance"/>
            </div>
        </div>
    )
}
export default Experience