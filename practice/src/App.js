//import Practice from "./components/Practice";
import { useRef } from "react";
import "./App.css";

function App() {
    const data = useRef();
    const submitForm = (e) => {
        e.preventDefault();
        console.log(data.current.value);
        data.current.value = "";
    };

    return (
        <div className="App">
            <form onSubmit={submitForm}>
                <input ref={data} type="text" placeholder="Enter Name" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
