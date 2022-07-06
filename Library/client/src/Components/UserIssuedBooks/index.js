import UserNav from '../UserNav'
import { store } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

function UserIssuedBooks() {

    const [token] = useContext(store)
    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState(false)

    const returnBook = (id) => {
        Axios.delete(`${config.url}/returnBook/${id}`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            alert("Book returned successfully")
            const List = booksData.filter((each)=>each._id !== id)
            setBooksData(List)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        setLoading(true)
        Axios.get(`${config.url}/userIssuedBooks`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setBooksData(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })


    }, [token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth jcCntr">
                {<UserNav />}
            </div>
            <div className='flexMinWidthCol'>
                {loading ? <CircularProgress disableShrink /> : <div>

                    {
                        booksData[0] === undefined ? <h1>No Books</h1> :
                            <div className="flexMinWidthCol vrtlScroll hideScroll">
                                {booksData.map((each) => <li className='flexRow' key={each._id}>
                                    <div key={each._id} className="flexRow mrgnVMD goastBg pdngSM listItem">
                                        <div className="mrgnRLG flexAuto bookImageDiv">
                                            <img src={each.imageLink} alt="bookImage" />
                                        </div>
                                        <div className="mrgnRLG flexMinWidthCol">
                                            <div className="flexRow jcSpaceBtw">
                                                <p className='ellipsisTxt'>{`Title    : ${each.title}`}</p>
                                            </div>
                                            <p>{`Book Id  : ${each.bookId}`}</p>
                                            <p>{`Author   : ${each.author}`}</p>
                                            <div>
                                                <Button variant="contained" onClick={() => { returnBook(each._id) }} color="secondary">
                                                    Return Book
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </li>)}
                            </div>
                    }
                </div>}
            </div>
        </div>
    )

}
export default UserIssuedBooks