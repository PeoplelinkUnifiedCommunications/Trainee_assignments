import UserNav from '../UserNav'
import { store } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';

function UserIssuedBooks() {

    const [token] = useContext(store)
    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState(false)

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