import React, { useEffect, useState } from 'react'

function Chat({ socket, username, room }) {
    const [message, setMessage] = useState('')
    const [chatList, setChatlist] = useState([])

    useEffect(() => {
        socket.on('received_message', (data) => {
            setChatlist((list) => [...list, data])
        })
    }, [socket])

    const sendMessage = async (e) => {
        e.preventDefault()
        const messageData = {
            room: room,
            username: username,
            message: message,
            time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }
        await socket.emit('send_message', messageData)
        setChatlist((list) => [...list, messageData])
    }
    return (
        <div className='chat'>
            <div className='chatHeader'>
                <p>Messenger</p>
            </div>
            <div className='chatBody'>
                {chatList.map((userChat) => (
                    <div className={username === userChat.username ? 'messageSent' : 'messageReceived'}>
                        <span>{userChat.message}</span>

                        {/* <div>
                                <p>{userChat.message}</p>
                            </div> */}
                    </div>
                ))}
            </div>
            <form className='chatFooter' onSubmit={sendMessage}>
                <input className='chatInput' type='text' placeholder='Type Message...' onChange={(e) => setMessage(e.target.value)}></input>
                <button className='chatBtn' type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Chat