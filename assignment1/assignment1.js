//assignment1.js

//declare variables
var input;
var total;

var tax = 10;
var taxrate = (tax+100)/100;

//function to get user data and print out the input
function enterData() {

    var input = prompt("Please enter the total!", "0.00");
    if (input != null) {
        total = taxrate * input;
        total = total.toFixed(2);
        var message = "You entered: $"+ input + "<br>" + "Your total at " + tax +"% is $" + total;
        var el = document.getElementById('total');
        el.innerHTML = message;
    }
}