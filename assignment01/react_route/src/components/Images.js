import React from 'react';
import bird from "./bird.jpg";
import road from "./road.jpg";
import sea from "./sea.jpg";

import './Images.css'

function Images() {
    return (
        <div>
            <div class="container">

<div class="image-container">
    <img src={bird} alt="bird" class="image-style"/>
</div>
<div class="image-container">
    <img src={road} alt="road" class="image-style"/>
</div>
<div class="image-container">
    <img src={sea} alt="sea" class="image-style"/>
</div>
</div>
        </div>
    )
}

export default Images;