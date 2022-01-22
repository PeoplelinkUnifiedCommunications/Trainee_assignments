import React from 'react';
import './List.css';

function List(){
        return(
            <div className="container">
                <h1 class="heading">List tags</h1>
    <h1>Fast Food unordered list</h1>
    <div>
    <ul>
    <li>Noodles</li>
    <li>Burger</li>
    <li>Pizza</li>
    <li>Maggie</li>
</ul>
<h1>Fast Food ordered list</h1>

<ol>
    <li>Noodles</li>
    <li>Burger</li>
    <li>Pizza</li>
    <li>Maggie</li>
</ol>
</div>
            </div>
        )
    }


export default List;