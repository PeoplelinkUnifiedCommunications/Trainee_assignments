// function displayGreeting(displayName){
//     console.log("Hello");
//     displayName();
//     console.log("good morning")

// }
// function displayPreeneetha(){
//     console.log("santhoshi")
// }
// displayGreeting(displayPreeneetha)
// let counter =0;
// setInterval(function(){
//     counter=counter + 2;
//     console.log(counter);
// },1000)
//  
// let person ={
//     name:"santhoshi",
//     age : 24,
//     city : "hyderabad"
// }
// console.log(person)


// ***************
let counterElement = document.getElementById("counterValue");
function onIncrement(){
    let previousCounter = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounter)+ 1;
    counterElement.textContent = updatedCounterValue;

}

function onDecrement(){
    let previousCounter = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounter) - 1;
    counterElement.textContent = updatedCounterValue;
    if(updatedCounterValue > 0){
        counterElement .style .color
    }
}
function onReset(){
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
}
