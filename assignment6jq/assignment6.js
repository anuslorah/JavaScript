//get all objects that the script needs
var $ = function (id) {
    return document.getElementById(id);
};

//get user entries
var calculate = function () {
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);
    var isValid = true;

    //validate entries
    if (isNaN(miles) || miles <= 0  || isNaN(gallons) || gallons <= 0) {
        alert("Both entries must be numeric!");
    } else {
        var MPG = (miles / gallons);
        $("mpg").value = MPG.toFixed(1);
    }
};
//clear form
var clear = function () {
	$("miles").value = "";
	$("gallons").value = "";
	$("mpg").value = "";
};
//onload event waits the user to click the button and then calculates the MPG by running the calcualteMPG function*/
window.onload = function () {
    $("calculate").onclick = calculate;
	$("clear").onclick = clear;
	$("miles").ondblclick = clear;
	$("miles").focus();
};