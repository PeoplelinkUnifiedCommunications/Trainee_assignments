import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [apiResponse, setApiResponse] = useState("");

    useEffect(() => {
        fetch("http://localhost:9000/testAPI")
            .then((response) => response.text())
            .then((response) => setApiResponse(response))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <p>{apiResponse}</p>
        </div>
    );
}

export default App;
