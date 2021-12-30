import React, {useRef, useEffect} from 'react'

function Ref(){
    const count = useRef(null)
    console.log('render')
    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log(count.current.value)
    }
    useEffect(()=>{
      count.current.focus()
    }, [])
    return(
    <div>
      <form onSubmit={SubmitHandler}>
        <input ref={count} type="text"/><br/>
        <button type="submit">submit</button>
      </form>
    </div>
    )

}
export default Ref;