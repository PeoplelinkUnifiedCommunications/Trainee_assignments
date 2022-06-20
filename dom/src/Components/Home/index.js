import React from "react";
import "./style.css";
function Home() { 
    // var heading = document.getElementById("heading");
    // console.log(heading.innerText)
    // heading.innerHTML="DOM Session";;

    // var paragraph = document.querySelector("p");
    // paragraph.innerHTML="HEY";
    

    //ByClassName

    // console.log(document.getElementsByClassName("btn"));

    // document.title="DOM Manipulation"

    // console.log(document.images); 

    //  var list = document.getElementsByClassName("list-itm")
    //  list[2].innerHTML ="Pineapple";
    //  list[1].innerHTML="Muskmelon";

    //  list[0].style.color="blue";

    //  var i=0;
    //  for(i=0; i < list.length; i++) {
    //      list[i].style.color="green";
    //      list[i].style.fontSize="35px";
    //  }

    //ByTagsName
    // var input = document.getElementsByTagName("input")
    // console.log(input);

    // var ul = document.getElementsByTagName("li")
    // console.log(ul);

    //querySelectors

    // var list1 = document.querySelector("li")
    // console.log(list1)

    // var list1 = document.querySelectorAll("li")
    // console.log(list1)


    //Traversing Nodes

    // var list = document.querySelector("#list");
    // console.log(list.parentNode);
    // console.log(list.parentElement);

    // var body = document.querySelector("body");
    // console.log(body.parentNode);
    // console.log(body.parentElement);


    // child node and child element

    // var list = document.querySelector("#list");
    // console.log(list.childNodes);
    // console.log(list.children[1]);

    // console.log(list.firstChild);
    // console.log(list.firstElementChild);


    // console.log(list.lastChild);
    //console.log(list.lastElementChild);

    // console.log(list.previousSibling);
    // console.log(list.previousElementSibling);


    // console.log(list.nextSibling);
    // console.log(list.nextElementSibling);
    

    //CREATING ELEMENTS
    var h1 = document.createElement('h1')
    console.log(h1);

    h1.id="heading";
    h1.className="heading1";
    h1.setAttribute('title', "I am heading");

    var heading = document.createTextNode('This is my heading');
    h1.appendChild(heading);
    
    
    return (
        <div className="homePage">
            <div className="container">
                <h1 id="heading">DOM Manipulation</h1>
                <br />
                <p>DOM stands for Document Object Model.
                Document is the special object of window.
                When a webpage is loaded, our browser creates DOM for page.
                </p>
                <img src="./Images/dom.png" alt="DOM"/>
                <ul id="list">               
                    <li className="list-itm">Apple</li>
                    <li className="list-itm">Papaya</li>
                    <li className="list-itm">Mango</li>
                    <li className="list-itm">Chikoo</li>               
                </ul>

                {/* <p>DOM Session</p> */}

            </div>
            <div className="container1">
                
            <input className="input" type="text" placeholder="Enter your wish" id="input" autoComplete="off" />&nbsp;
           
            <button className="btn" type="button">Read More...</button>
            </div>
            
        </div>

    )
}
export default Home;