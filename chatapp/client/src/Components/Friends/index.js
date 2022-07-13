import { useEffect, useState } from "react"
import Axios from 'axios'
import { config } from "../../Common/Urls"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useContext } from "react"
import { store } from "../../App"
import { useNavigate } from "react-router-dom";
import EachFriend from "../EachFriend";
import io from "socket.io-client"
import Chats from "../Chats";

const socket = io.connect("http://localhost:8001")

function Friends() {

    const navigate = useNavigate()

    const [token] = useContext(store)
    const [friendsList, setFriendsList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [showMsgs, setShowMsgs] = useState(false)
    const [previousMsgs, setPreviousMsgs] = useState([])
    const [friendName, setFriend] = useState("")
    const [room, setRoom] = useState("")


    const createRoom = (id) => {
        const friend = friendsList.filter((each) => each._id === id)
        const roomId = friend[0].Email > token ? `${friend[0].Email}${token}` : `${token}${friend[0].Email}`
        setRoom(roomId)
        setFriend(friend[0].Email)
        Axios.get(`${config.url}/getRoomMessages`, {
            headers: {
                'x-token': [roomId]
            },
            contentType: "application/json"
        }).then((res) => {
            setPreviousMsgs(res.data)
            socket.emit("join_room", room, token)
            socket.on("message", (data) => {
                setShowMsgs(true)
                console.log(data)
            })
        }).catch((err) => {
            console.log("err of room msgs", err)
        })

    }

    const getViewList = () => {
        if (friendsList.length === 0) {
            return <h1>No Friends</h1>
        } else {
            return (
                <div>
                    {friendsList.map((each) => <EachFriend key={each._id} createRoom={createRoom} details={each} />)}
                </div>
            )
        }
    }

    useEffect(() => {
        if (token === "") {
            navigate("/")
        }
        setLoading(true)
        Axios.get(`${config.url}/contacts`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setFriendsList(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [token])
    console.log("rooooooooooooom", room)

    return (

        <div className="bg-container">
            {!showMsgs ? <>{isLoading ? <CircularProgress /> : getViewList()}</> : <>
                <button onClick={() => { setShowMsgs(false) }}>Back</button>
                {<Chats socket={socket} token={token} room={room} previousMsgs={previousMsgs} friendName={friendName} />}</>}
        </div>
    )
}
export default Friends