

function EachFriend(props){
    const {details, createRoom} = props
    const {_id, Email} = details
    
    const handleClick=()=>{
        createRoom(_id)
    }

    return(
        <li  className="noneList" key={_id}>
          <button type="button" onClick={handleClick}>{Email.slice(0,(Email.length - 10))}</button>
            {/* <div className="flexRow " onClick={handleClick}>
                <div className="flexAutoRow">
                    <div className="iconCrcl">
                        <img src="" />
                    </div>
                </div>
                <div className="flexMinWidthRow">
                    <span>{Email.slice(0,(Email.length - 10))}</span>
                </div>
            </div> */}


        </li>
    )

}
export default EachFriend