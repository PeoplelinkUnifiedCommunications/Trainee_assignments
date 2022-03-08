const LoginSuccess=(props)=>{
    const {name,logoutData}=props;
    const data=JSON.parse(localStorage.getItem(`${name}`))
    const RemoveItem=()=>{
        localStorage.removeItem(`${name}`)
        logoutData()
    }
    return(
        <div>
            <h1>`Welcome {data.name}`</h1>
            <button onClick={RemoveItem}>Logout</button>
            
        </div>
    )
}
export default LoginSuccess;