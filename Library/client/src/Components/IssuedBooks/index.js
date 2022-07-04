import AdminNav from "../AdminNav"
import { store } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


function IssuedBooks() {

    const [token] = useContext(store)
    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")


    useEffect(() => {
        setLoading(true)
        Axios.get(`${config.url}/issuedBooks`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setBooksData(res.data)
            console.log(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    },[token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth jcCntr">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol alignStart jcStart pdngHLG">
            
                {loading ?  <div className="flexRow fullHeight jcCntr alignCntr"><CircularProgress disableShrink /></div> :
                    <>
                        {booksData[0] !== undefined && <h1>Books</h1>}
                        <div className='flexRow borderRadius borderWidth solidBorder alignCntr pdngHSM'>
                                <div className="flexAuto">
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    className="pdngHSM jcCntr"
                                    placeholder="Search…"
                                    value={search}
                                    onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                        </div>
                        <div className="flexRow alignCntr mrgnTLG jcCntr">
                            {booksData[0] === undefined ? <h1>No Books</h1> : <div className="flexMinWidthCol vrtlScroll hideScroll">
                                {(booksData.filter((each)=>each.bookId.includes(search)|| (each.title.toLowerCase()).includes(search)|| (each.issuedTo.toLowerCase().includes(search)) || (each.author.toLowerCase()).includes(search))).map((each) => 
                                <li className='flexRow' key={each._id}>
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
                                        <p>{`Issued To : ${each.issuedTo}`}</p>
                                    </div>

                                </div>
                            </li>)}
                            </div>}
                        </div> </>}
            </div>
        </div>
    )
}
export default IssuedBooks