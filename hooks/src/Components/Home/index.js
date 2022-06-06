import React, { useEffect, useState } from "react";
function Home() {
 
  // const [ message, setMessage ] = useState("Hey, How are you?")

  const [ count, setCount ] = useState(0)

  // useEffect(() => {
  //   console.log("TRIGGERED");

  //   setTimeout(() => {
  //     setMessage("Fine, Thankyou")
  //   },1000);
  // })
  // return(
  //   <h1>{message}</h1>
  // )

  useEffect(() => {
    console.log("TRIGGERED");

    setTimeout(() => {
      setCount((count) => count+1)
    },1000);
  },[])

  return(
    <h1>I have rendered {count} times</h1>
  )

}
export default Home;
