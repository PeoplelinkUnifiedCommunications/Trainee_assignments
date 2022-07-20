import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [add, setAdd] = useState(5)
    const [sub, setSub] = useState(6)

    // console.log("add...........", add)
    // console.log("sub...........", sub)
    console.log("Normal adition.........", sub + add)

    useEffect(() => {
        console.log("useeffect addition........", sub + add)
    }, [add, sub])


    return (
        <div>
            <div>
                <input type="number" onChange={(e) => setAdd(parseInt(e.target.value))} />
                <input type="number" onChange={(e) => setSub(parseInt(e.target.value))} />
            </div>
        </div>
    )
}

export default UseEffect