import React, { useState} from "react";
function Slide() {
    const [value, onChange] = useState(0);

    return (
        <div className="slide">
            <div className="range">
                <input type="range" min="0" max="100" value={value}
                    onChange={({ target: { value: radius } }) => {
                        onChange(radius)
                    }}
                />
            </div>
            <div className="percentage">
                {value}%
            </div>
        </div>
    );
}
export default Slide;