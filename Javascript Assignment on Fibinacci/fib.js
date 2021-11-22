var p = document.querySelector("#display");
function func() {
  p.innerHTML = "";
  var num = document.querySelector("#inputVal").value;
  let n1 = 0,n2 = 1,nextTerm;
  while (n1 <= num) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}


var p1 = document.querySelector("#display1");
let noOfElements = 0;
function count() {
    p1.innerHTML = "";
    let noOfElements = 0;
    var num = document.querySelector("#inputVal").value;
    let n1 = 0,n2 = 1,nextTerm;
  
    while (noOfElements < num) 
    {
      p1.innerHTML += n1 + "<br>";
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      noOfElements =noOfElements+ 1;
    }
}

function cum(button){
  var x=button.id
  // console.log(x)
  if(x == "upTo"){
   func(x); 
  }else if(x == "total"){
   count(x)
 }
}

