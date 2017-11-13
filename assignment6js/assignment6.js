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