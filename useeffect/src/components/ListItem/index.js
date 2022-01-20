const ListItem=(props)=>{
    const {List}=props
    const {id,title}=List
    return(
        <li className="list-item">
            <p className='item'>{id}</p>
            <p>{title}</p>
        </li>
    )
}
export default ListItem