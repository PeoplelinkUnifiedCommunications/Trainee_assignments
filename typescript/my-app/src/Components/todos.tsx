import React, { useState } from "react";
import "./todos.css";

const Todos = () => {
  const [input, setInput] = useState<string>("");
  const [store,setStore] = useState<string[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStore([...store, input]);
    setInput("");
  };
  console.log("fghjghj", input);
  return (
    <div className="flexCol pdngMD ">
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputStyle pdngMD"
          placeholder="enter your name"
          value={input}
          onChange={handleChange}
        />
        <button className="button" onClick={handleSubmit}>Go</button>
      </form>
      {store.map((item,index)=>(<p key={index}>{item}</p>))}
    </div>
  );
};

export default Todos;
