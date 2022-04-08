import React, { useState, useEffect } from "react";
import axios from "axios";
import Getusers from "../getInformation.js";

function Holder() {
  const [nameList, setNameList] = useState([]);

  const getData = async () => {
    const url = "http://172.16.16.67:8000/users";
    try {
      const response = await axios.get(url);
      setNameList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 5000);
    getData();
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="unorderList">
      {nameList.map((eachItem) => (
        <Getusers key={eachItem._id} info={eachItem} />
      ))}
    </ul>
  );
}

export default Holder;
