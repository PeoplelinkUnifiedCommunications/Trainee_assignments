import React, {useState} from "react";
import axios from "axios";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const [name , setName] = useState("")

  const saveName = (event)=>{
    setName(event.target.value)
    
  }

  const handleSubmit=(event)=>{
     event.preventDefault()
     console.log(name)
     axios.post("https:/")
  }

  const getQuote = ()=>{
     axios.get("http://localhost:8000/page",  { crossdomain: true }).then(response => {
        setText(response.data.text);
        setAuthor(response.data.author);
      });
  }

  const sencondQuote=()=>{
    axios.get("http://localhost:8000/second",  { crossdomain: true }).then(response => {
      const {data} = response
      const {text, author} = data
      console.log(text)
      console.log(author)
    });
  }
  


return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name}  onChange={saveName} type="text" required/>
        <button type="submit">
          save
        </button>
      </form>
      <button onClick={getQuote}>
        Generate Quote
      </button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
      <button onClick={sencondQuote}>second</button>
    </div>
  )
}
export default Quotes;