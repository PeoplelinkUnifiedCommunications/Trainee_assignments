import { useContext, useEffect } from "react"
import { store } from '../../App'
import { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import AdminNav from '../AdminNav'
import { config } from '../../config';
import Axios from 'axios'
import EachBookItem from "../EachBookItem";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



function TotalBooks() {
    const [token] = useContext(store)
    const [loading, setLoading] = useState(true)
    const [booksData, setBooksData] = useState({})
    const [search, setSearch] = useState("")

    const [viewList, setViewList] = useState([])

    const onViewDetails=(id)=>{
        const list = viewList
        if (list.includes(id)){
            setViewList(list)
        }else{
            list.push(id)
            setViewList(list)
        }
        
    }

    const closeView=(id)=>{
        const list = viewList.filter((each)=>each !== id)
        setViewList(list)
    }

    const renderHomePageContent = (token) => {
        Axios.get(`${config.url}/totalBooks`, {
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
    }

    const renderNav = () => {
        return <AdminNav />
    }



    useEffect(() => {
        renderHomePageContent(token)
    })

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth jcCntr">
                {renderNav()}
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
                                {(booksData.filter((each)=>each.bookId.includes(search)|| (each.title.toLowerCase()).includes(search) || (each.author.toLowerCase()).includes(search))).map((each) => 
                                <EachBookItem viewList={viewList} totalView={onViewDetails} closeView={closeView} key={each._id} details={each} />)}
                            </div>}
                        </div> </>}

            </div>
        </div>
    )
}
export default TotalBooks