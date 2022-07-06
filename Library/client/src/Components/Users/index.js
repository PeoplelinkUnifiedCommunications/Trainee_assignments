import AdminNav from "../AdminNav"
import CircularProgress from '@material-ui/core/CircularProgress';
import { store } from '../../App'
import { useContext } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import { useState, useEffect } from 'react'
// import Button from '@material-ui/core/Button';
import './styles.css'


function Users() {

    const [token] = useContext(store)
    const [UsersList, setUsersList] = useState([])
    const [isLoading, setisLoading] = useState(true)
      

    useEffect(() => {
        Axios.get(`${config.url}/usersList`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setUsersList(res.data)
            setisLoading(false)
        }).catch((err) => {
            console.log(err)
            setisLoading(false)
        })
    }, [token])


    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol jcCntr pdngHLG alignCntr">
                {UsersList.length > 0 && <h1 className="alignSelfStart">Users</h1>}
                {isLoading ? <CircularProgress /> : <ul className="pdngHLG fullWidth booksListFlex">
                    {UsersList.map((each) => <li className="flexRow goastBg borderRadius mrgnVLG listItem" key={each._id}>
                        <div className="flexMinWidthCol pdngHLG mrgnVLG">
                            <div className="flexRow">
                                <div className="flexMinWidthCol">
                                    <p>Name: {each.Name}</p>
                                </div>
                                <div className="flexAuto">
                                    <p>Email : {each.email}</p>
                                </div>
                            </div>
                            <div className="flexRow">
                                <div className="flexMinWidthCol">
                                    <p>Year: {each.year}</p>
                                </div>
                                <div>
                                    {/* <Button color="secondary">View</Button> */}
                                </div>
                            </div>

                        </div>
                    </li>

                    )}
                </ul>}
            </div>
        </div>
    )
}
export default Users