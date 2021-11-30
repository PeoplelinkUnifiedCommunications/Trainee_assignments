// Code to print Header......

let headers = ['S.No', 'FirstName', 'LastName', 'FullName', 'Email', 'mobileno', 'Dob', 'Age', 'LeapYear'];
let table = document.getElementById("tablePlaceholder")
let headerRow = document.createElement('tr');
let arrDetails = [];
headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header); 
});
table.appendChild(headerRow);

let serial = 1;

//  main Function.....

function addDetails() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("num").value;
    var Dob = document.getElementById("date").value;
    let fullName = firstName + " " + lastName;

    //  validation.......

    if (firstName == "" || lastName == "" || email == "" || mobileno == "" || Dob == "") {
        alert("the filled can't be empty");
        return false ;
    }
    if (mobileno.length !== 10) {
        alert("mobile number should contain 10 digits");
        return false ;
    }
    
    let details = {
            serial: serial,
            firstName: firstName, lastName: lastName, fullName: fullName,
            email: email, mobileno: mobileno, Dob: Dob, age: calculateAge(new Date(Dob)),
            isleapYear: leapYear(new Date(Dob)),

        }
    
    
    let exists = arrDetails.find((item) => item.firstName === firstName && item.lastName === lastName);
   console.log("exists =====", exists)
   if (!exists) {
        let row = document.createElement('tr');
        Object.values(details).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);setData(arr.target.value(props));
        arrDetails.push(details);
        serial += 1;
        document.getElementById("form").reset();
   } else {
       alert("already exists")
   }  
}

// function for Calculating the Age.

function calculateAge(Dob) {

    var ageDif = Date.now() - Dob.getTime();
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// function for checking whether it is leapYear or Not.

function leapYear(Dob) {
    if ((0 == Dob.getFullYear() % 4) && (0 != Dob.getFullYear() % 100) || (0 == Dob.getFullYear() % 400)) {
        return true;
    }
    else {
        return false;
    }
}








