import "./index.css";

function Listitems(props) {
    const {eachlist} = props
    const {name, email, age} = eachlist
    return (
        <div className="container">
            <p class="ok">{name}</p>
            <p class="ok">{email}</p>
            <p class="ok">{age}</p>
        </div>
    )
  }
export default Listitems;