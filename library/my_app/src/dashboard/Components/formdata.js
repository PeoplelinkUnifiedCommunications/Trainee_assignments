import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Formdata = () => {
  const [list, setList] = useState(["kavya","heelooo"]);
  const [name, setName] = useState("");

  console.log( Object.keys(list).student_name );
  console.log( Object.values((list) ));

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    setList([...list, name]);
    console.log(...list);
    setName("");
  };
  return (
    <>
      <div className="flexCol">
        <form className="flexCol" onSubmit={hadleSubmit}>
          <span className="pdngVSM">
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </span>
          <span>
            <Button color="primary" variant="contained" type="submit">
              submit
            </Button>
          </span>
        </form>
        <div>
          {list.map((val, index) => (
            <p key={index}>{val}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Formdata;
