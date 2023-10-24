
function displayMailingLabel(name, address, city, state, zip){
console.log("Name: " + name)
console.log("Address: " + address)
console.log("City: " + city)
console.log("State: " + state)
console.log("Zip: " + zip)
}
let someName = "Sam";
let someAddress ="somewhere on 4th street"
let someCity = "Phoenix"
let someState = "Arizona"
let someZip = "92471"

let number1 = 5;
let number2 = 8;

let moneyDue = 50;
let moneyPaid = 60;


function addNumbers(Num1, Num2){
    answer = Num1 + Num2;
    console.log(Num1 + " + " + Num2 + " = " + answer);
}

function displayReceipt(totalDue, amountPaid){
console.log("Total Due: " + totalDue);
console.log("Amount Paid: " + amountPaid);

let changeDue = amountPaid - totalDue;
console.log("Change Due: " + changeDue)

}

displayMailingLabel(someName, someAddress, someCity, someState, someZip);
console.log();
addNumbers(number1, number2);
console.log();
displayReceipt(moneyDue, moneyPaid);