import React from "react";
import "./avatarstyle.css";

function Avatarslist(props) {
  return (
    <div className="avatars_list">
      <div className="avatar_image">
        <img
          src={props.img}
          alt=""
          style={{
            width: `${props.kitchen ? "40px" : "24px"}`,
            height: `${props.kitchen ? "40px" : "24px"}`,
          }}
        />
      </div>
    </div>
  );
}

export default Avatarslist;
