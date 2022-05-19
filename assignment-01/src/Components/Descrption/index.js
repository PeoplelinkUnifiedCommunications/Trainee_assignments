import './index.css'

function Descrption(){
    return(
        <div className="description-card-container">
            <div className='description-design-part-bg'> 
               <div className='description-design-part'>
                  <h1 className="description-heading">Design</h1>
                  <p className='description-paragraph'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
                </div>
            </div>
            <div className='description-cavalier-content-bg'>
              <div className="description-cavalier-content">
                <h1 className="description-heading">Engineering</h1>
                <p className='description-paragraph'>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
              </div>
            </div>
            
        </div>
    )
}
export default Descrption