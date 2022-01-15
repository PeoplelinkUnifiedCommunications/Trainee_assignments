import React from 'react';
import birds from "./birds.jpg";
import './Final.css';


function Final(){
    return(
        <div>
        <div>
            <div className="container">
        <div>
        <h1>Birds</h1>
        <div className="image-container">
            <img src={birds} alt="birds" className="birds"/>
        </div>
    <p className="sub-heading">Wings</p>
    <p>The skeletal system of a bird is very lightweight but strong, which helps the bird fly. Some birds are very small, with the smallest being the bee hummingbird. According to the website "Kids Konnect," the bee hummingbird is 2 inches long. The largest bird is the ostrich, which can be as tall as 9 feet. Birds are biped animals, which means they have two feet that they use to walk, hop or run.</p>
    {/* <!-- <ul>
        <li>Birds of All Feather</li>
        <li>A Description of Bird's colors</li>
        <li>bird Traits</li>
        <li>Singing, Eggs and Beaks</li>
    </ul> --> */}

    <ol>
        <li>Birds of All Feather</li>
        <li>A Description of Bird's colors</li>
        <li>bird Traits</li>
        <li>Singing, Eggs and Beaks</li>
    </ol>

    {/* <!-- After changing from unorderd list to order list I observed that list arranged in a orderly manner represented with numbers or alphabatical order --> */}
    </div>
    </div>
</div>
        </div>
    )
}

export default Final;