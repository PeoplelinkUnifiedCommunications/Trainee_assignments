import React, { useState, } from "react";
function Slide(props) {
const [values,setValues]=useState(3)
    const setValue = (e) => {
        setValues(e.target.value)
        props.onChangeValue(e.target.value)
    }
  console.log(values)
    return (
        <div className="slide">
            <div className="range">
                <input type="range" min="1" max="6" value={values}
                    onChange={setValue}
                />
            </div>
            <div className="percentage">
                {values}
            </div>
        </div>
    );
}
export default Slide