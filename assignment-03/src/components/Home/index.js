import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

function Home(){
    return(
       <div className="booking-page-bg-container">
           <Navbar/>
           <div className='home-page-navbar-content-container'>
               <h1>Welcome To Travel &#128512;</h1>
               <Link to="/ticket"><div>
                   <button className='book-ticket-button' type='button'>Book Ticket</button>
               </div>
               </Link>
           </div>
       </div>
    )
}
export default Home