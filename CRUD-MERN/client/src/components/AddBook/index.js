import AdminNav from "../AdminNav"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import axios from "axios";

function AddBook() {
    const [bookDetails, setBookDetails] = useState({ bookName: "", author: "", publication: "", year:"" })

    const handleChange = (e) => {
        setBookDetails({ ...bookDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/addBook', bookDetails).then((res) => {
            console.log(res.data)
            setBookDetails({ bookName: "", author: "", publication: "" , year:""})
            alert(res.data)
        }).catch((err) => {
            console.log("...error...", err.response.data)
            setBookDetails({ bookName: "", author: "", publication: "", year:"" })
            alert(err.response.data)
        })
    }

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol alignCntr jcCntr">
                <div className="pdngHLG border">
                    <form onSubmit={handleSubmit} className="flexCol mrgnVLG jcCntr">
                        <div>
                            <TextField
                                required
                                label="Book Name"
                                name="bookName"
                                value={bookDetails.bookName}
                                onChange={handleChange}
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Author"
                                name="author"
                                value={bookDetails.author}
                                onChange={handleChange}
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Publication"
                                name="publication"
                                value={bookDetails.publication}
                                onChange={handleChange}
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Year"
                                name="year"
                                value={bookDetails.year}
                                onChange={handleChange}
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div className='flexRow jcCntr mrgnTMD'>
                            <Button type="submit" variant="contained" color="secondary">
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBook