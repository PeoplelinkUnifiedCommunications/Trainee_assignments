

function EachFriend(props){
    const {details, createRoom} = props
    const {_id, Email} = details
    
    const handleClick=()=>{
        createRoom(_id)
    }

    return(
        <li  className="noneList" key={_id}>
          <button type="button" onClick={handleClick}>{Email.slice(0,(Email.length - 10))}</button>
        </li>
    )

}
export default EachFriend