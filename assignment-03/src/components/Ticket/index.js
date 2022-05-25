
import Navbar from '../Navbar'
import { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
// import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import TableRow from '../TableRow'
import './index.css'



function Ticket() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("MALE")
    const [aCount, setAdultCount] = useState(1)
    const [childrenCount, setChildrenCount] = useState(0)
    const [date, setDate] = useState("")
    // const [editId, setEditId] = useState("")
    // const navigate = useNavigate()
    const id = uuid()
    const [tickets, setTicketsList] = useState([])

    const saveGender = (event) => {
        setGender(event.target.value)
    }

    const saveDate = (event) => {
        setDate(event.target.value)
    }

    const saveName = (event) => {
        setName(event.target.value)
    }

    const saveEmail = (event) => {
        setEmail(event.target.value)
    }

    const saveAdultsCount = (event) => {
        setAdultCount(parseInt(event.target.value))
    }

    const saveChildrenCount = (event) => {
        setChildrenCount(parseInt(event.target.value))
    }



    const onBookTicket = (event) => {
        event.preventDefault()
        const newTicket = [id, name, email, gender, aCount, childrenCount, date]
        let list = tickets
        list.push(newTicket)
        setName("")
        setEmail("")
        setAdultCount("1")
        setChildrenCount("0")
        setGender("Male")
        setDate("")
        setTicketsList(list)

    }


    const onDeleteItem = (id) => {
        const existingList = tickets
        const newList = existingList.filter(each => each[0] !== id)
        setTicketsList(newList)
    }

    const onEditItem = (id) => {
        const existingTickets = tickets
        const ticketToEdit = existingTickets.filter(each => each[0] === id)
        const newLists = existingTickets.filter(each => each[0] !== id)
        setName(ticketToEdit[0][1])
        setEmail(ticketToEdit[0][2])
        setAdultCount(ticketToEdit[0][4])
        setChildrenCount(ticketToEdit[0][5])
        setGender(ticketToEdit[0][3])
        setDate(ticketToEdit[0][6])
        setTicketsList(newLists)
    }




    return (
        <>
            <Navbar />
            <div className='ticket-page-card-bg-container'>
                <form onSubmit={onBookTicket} className='ticket-card-container'>
                    <h1>Passenger Information</h1>
                    <h4>(Give your details to reserve seat)</h4>
                    <div className='input-filed-for-ticket-booking'>
                        <span className="input-element-icon"><BsFillPersonFill /></span>
                        <input placeholder='Enter Name' value={name} onChange={saveName} id="Name" className='input-element-booking' type="text" required />
                    </div>
                    <div className='input-filed-for-ticket-booking'>
                        <span className="input-element-icon"><MdEmail /></span>

                        <input placeholder='Mail' value={email} onChange={saveEmail} className='input-element-booking' type="email" required />
                    </div>
                    <div className='input-filed-for-ticket-booking'>
                        <input value={date} onChange={saveDate} className='input-element-booking' type="date" required />
                    </div>
                    <div className='gender-quantity-container'>
                        <p className='gender-select-lable'>Gender</p>
                        <p className='gender-select-lable'>Adults</p>
                        <p className='gender-select-lable'>Children</p>
                    </div>
                    <div className='gender-quantity-container'>

                        <select value={gender} onChange={saveGender} id="Gender" className='option-style gender-select-bg' required>
                            <option value={"MALE"} name="gender">Male</option>
                            <option value={"FEMALE"} name="gender">Female</option>
                            <option value={"OTHER"} name="gender">Other</option>
                        </select>

                        <select value={aCount} onChange={saveAdultsCount} className='option-style gender-select-bg' required>
                            <option value={1} name="adultsCount">1</option>
                            <option value={2} name="adultsCount">2</option>
                            <option value={3} name="adultsCount">3</option>

                        </select>
                        <select value={childrenCount} onChange={saveChildrenCount} className='option-style gender-select-bg' required>
                            <option value={0} name="childrenCount">0</option>
                            <option value={1} name="childrenCount">1</option>
                            <option value={2} name="childrenCount">2</option>
                            <option value={3} name="childrenCount">3</option>
                        </select>
                    </div>
                    <div>
                        <button className='book-ticket-button proceed-button' type='submit'>Submit</button>
                    </div>
                </form>
                <table className='table-bg'>
                    <thead>
                        <tr>
                            <th className='table-heading'>Name</th>
                            <th className='table-heading'>Email</th>
                            <th className='table-heading'>Gender</th>
                            <th className='table-heading'>adultsCount</th>
                            <th className='table-heading'>childrenCount</th>
                            <th className='table-heading'>Journey Date</th>
                            <th className='table-heading'>Edit / delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((each) => {
                            return (
                                <TableRow key={each[0]} content={each} onDelete={onDeleteItem} onChange={onEditItem} />)
                        })}
                    </tbody>
                </table>

            </div>

        </>
    )
}
export default Ticket
