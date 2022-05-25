
import Navbar from '../Navbar'


function SeatView() {
    const newTicket = localStorage.getItem("myList")
    console.log(newTicket)
    
    return (
        <>
            <Navbar />
            <div className='seat-page-card-bg-container'>
                <h1>Confirm Ticket Details</h1>
            </div>
        </>
    )
}
export default SeatView;