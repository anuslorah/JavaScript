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

/*$("form[name='mpg']").validate({
    rules: {
        miles: "required",
        gallons: "required"
     },
    
    onError : function($form) {
      alert("Both entries must be numeric!");
    },
                               
    onSuccess : function($form).click(function) {
        function calculate() {
            var $MPG = (miles / gallons);
            document.getElementById("mp").value = MPG.toFixed(1);
        }
      return false; // Will stop the submission of the form
    }
        
})

$("form[name='mpg']").validate ({
    rules: {
        miles: "required",
        gallons: "required",
        number: true
    },
    messages: {
        alert("Both entries must be numeric!")
    }


    $( "input[miles='miles']" );
    $( "input[gallons='gallons']" );
    //check if both entries are numeric


function calculate() {
    var miles = parseFloat(document.getElementById("miles").value);
    var gallons = parseFloat(document.getElementById("gallons").value);

    //check if both entries are numeric
    if (isNaN(miles) || miles <= 0  || isNaN(gallons) || gallons <= 0) {
        alert("Both entries must be numeric!");
    } else {
        var MPG = (miles / gallons);
        document.getElementById("mp").value = MPG.toFixed(1);
    }
}
*/