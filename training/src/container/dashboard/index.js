import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [count, setcount] = useState(0)
    const handelIncriment = () => {
        setcount(count + 1)
    }
    const handelDecriment = () => {
        setcount(count - 1)
    }
    const [time, setTime] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTime((time) => time + 1)
        }, 1000);
    }
    )
    return (
        <div className='flexCol respdngSM'>
            <p className='darkTxt pdngBSM'>
                {count}
            </p>
            <div className='flexRow'>
                <button onClick={handelIncriment} className="pdngSM mrgnRSM blueBg brdrRadiusSM whiteTxt boldTxt">+</button>
                <button onClick={handelDecriment} className="pdngSM blueBg brdrRadiusSM whiteTxt boldTxt">-</button>
            </div>
            <div className='flexRow pdngVMD'>
                <p>
                    you are {time} sec fast
                </p>
            </div>
        </div>

    )
}

export default Dashboard;