import { useEffect, useState } from "react"
import Axios from 'axios'
import { config } from "../../Common/Urls"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useContext } from "react"
import { store } from "../../App"
import { useNavigate } from "react-router-dom";
import EachFriend from "../EachFriend";

function Friends() {  
    const navigate = useNavigate()

    const [token] = useContext(store)
    const [friendsList, setFriendsList] = useState([])
    const [isLoading, setLoading] = useState(false)

    const createRoom=(id)=>{
        console.log("id:::::::::",id)

    }

    const getViewList=()=>{
        if(friendsList.length === 0){
            return <h1>No Friends</h1>
        }else{
            return(
                <div>
                    {friendsList.map((each)=><EachFriend key={each._id} createRoom={createRoom} details={each}/>)}
                </div>
            )
        }
    }

    useEffect(()=>{
        if(token === ""){
            navigate("/")
        }
        setLoading(true)
        Axios.get(`${config.url}/contacts`,{
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            setFriendsList(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[token])

    return (
        <div className="bg-container">
           {isLoading ? <CircularProgress/> : getViewList()}
        </div>
    )
}
export default Friends