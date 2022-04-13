import React, { useEffect, useState, useRef } from 'react'

function Chat({ socket, username, room }) {
    const [message, setMessage] = useState('')
    const [chatList, setChatlist] = useState([])
    const messageEndRef = useRef()

    useEffect(() => {
        socket.on('received_message', (data) => {
            setChatlist([...chatList, data])
        })
        scrollToBottom()
    })

    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
    const userInput = (e) => {
        setMessage(e.target.value)
    }
    const sendMessage = async (e) => {
        e.preventDefault()
        const date = new Date(Date.now())
        let timeType
        if (date.getHours() < 12) {
            timeType = 'AM'
        } else {
            timeType = 'PM'
        }
        const messageData = {
            room: room,
            username: username,
            message: message,
            time: date.getHours() + ':' + date.getMinutes() + ' ' + timeType
        }
        if (messageData.message !== '') {
            await socket.emit('send_message', messageData)
            setChatlist([...chatList, messageData])
            setMessage('')
        }
    }

    return (
        <div className='chat'>
            <div className='chatHeader'>
                <p>Messenger</p>
            </div>
            <div className='chatBody'>
                {chatList.map((userChat, index) => (
                    <div key={index} className={username === userChat.username ? 'messageSent' : 'messageReceived'}>
                        <div className={username === userChat.username ? 'span1' : 'span2'}>
                            <span className='name'>{userChat.username}</span>
                            <div>
                                <span className='msg flexCol'>{userChat.message}
                                    <span className='time'>{userChat.time}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
            <form className='chatFooter' onSubmit={sendMessage}>
                <input className='chatInput' value={message} type='text' placeholder='Type Message...' onChange={userInput}></input>
                <button className='chatBtn' type='submit'>Send</button>
            </form>
        </div>
    )
}


export default Chat