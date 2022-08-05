import React ,{useRef}from 'react'

const useRefCntr = () => {
    const data= useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("earsdyfugi",data.current.value)
        data.current.value="";
    }
  return (
    <div className='flexCol'>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={data}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default useRefCntr