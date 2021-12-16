import React, { useState, useEffect } from "react";

function Practice() {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    useEffect(() => {
        console.log("component has changed");
    }, [name, age]);

    return <div onClick={() => setName("siva")}>Some jsx here...</div>;
}

export default Practice;
