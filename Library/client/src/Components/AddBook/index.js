import AdminNav from "../AdminNav"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { store } from '../../App'
import { useState , useContext} from 'react'
import Axios from 'axios'
import { config } from '../../config';




function AddBook() {

    const [token] = useContext(store)
    const [BookDetails, setBookDetails] = useState({ title: "", imageLink: "", author: "", publication: "", description: "" })
    
    const insertBooks = (Book) => {
        Axios.post(`${config.url}/insertBook`,
            Book,{
                headers: {
                    'x-token': [token]
                },
                contentType: "application/json"
            }).then((res) => {
                alert(res.data)
                setBookDetails({ title: "", imageLink: "", author: "", publication: "", description: "" })
            }).catch((err) => {
                console.log(err)
                alert(err.response.data)
            })
    }

   
    const handleChange = (e) => {
        setBookDetails({ ...BookDetails, [e.target.name]: e.target.value })
    }

    const submitHandle = (e) => {
        e.preventDefault()
        insertBooks(BookDetails)
    }



    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol mrgnVLG alignCntr">
                <div className="flexAuto borderRadius borderWidth solidBorder borderRed pdngHLG">
                    <form onSubmit={submitHandle} className='flexCol alignCntr mrgnVLG'>
                        <h1 className='Login-heading'>Add Book to Library</h1>
                        <div className='flexRow'>
                            <TextField
                                fullWidth
                                required
                                onChange={handleChange}
                                value={BookDetails.title}
                                name="title"
                                label="Book Title"
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div className='flexRow'>
                            <TextField
                                fullWidth
                                required
                                name="author"
                                label="Author"
                                onChange={handleChange}
                                value={BookDetails.author}
                                variant="outlined"
                                margin='dense' />
                        </div>
                        <div className='flexRow'>
                            <TextField
                                fullWidth
                                required
                                name="publication"
                                onChange={handleChange}
                                value={BookDetails.publication}
                                label="Publication"
                                margin='dense'
                                variant="outlined" />
                        </div>
                        <div className='flexRow'>
                            <TextField
                                fullWidth
                                required
                                name="imageLink"
                                onChange={handleChange}
                                value={BookDetails.imageLink}
                                label="Image Link"
                                margin='dense'
                                variant="outlined" />
                        </div>
                        <div className='flexRow'>
                            <TextField
                                fullWidth
                                required
                                name="description"
                                onChange={handleChange}
                                value={BookDetails.description}
                                label="Book description"
                                margin='dense'
                                variant="outlined" />
                        </div>

                        {/* {<p className="errorMsg">{errMsg}</p>} */}
                        <div className='flexRow jcCntr mrgnTMD'>
                            <Button type="submit" variant="contained" color="secondary">
                                Register
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBook