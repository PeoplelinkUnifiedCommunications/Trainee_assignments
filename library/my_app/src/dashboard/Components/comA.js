import React, { useContext } from "react";
import ComB from "./comB";

const ComA = () => {
  const [username , setuserName] = useContext("kavya")
  return (
    <div className="flexCol">
      <UserContext.Provider value={user}>
      <h1>{`Hello ${username}!`}</h1>
      <ComB user={user} />
    </UserContext.Provider>
    </div>
  );
};

export default ComA;
