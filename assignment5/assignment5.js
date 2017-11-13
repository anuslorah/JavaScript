function calculate() {
    var billSubtotal = parseFloat(document.getElementById("billSubtotal").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);
    var text1;
    var prompt1 = document.getElementById("prompt1");
    var text2;
    var prompt2 = document.getElementById("prompt2");

    //check if bill subtotal is a valid number
    if (isNaN(billSubtotal) || billSubtotal <= 0) {
        text1 = "Please enter a positive number!";
    } else if (billSubtotal >= 1000){
        text1 = "Please enter a number that is smaller than 1000!";
    } else {
        text1 = " ";
    }
    prompt1.innerHTML = text1;
    
    //check if tax rate is a valid number
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 25) {
        text2 = "Please enter a number between 0 and 25!";
    } else {
        text2 = " ";
    }
    prompt2.innerHTML = text2;
    
    if (text1 == text2) {
        var salesTax = (billSubtotal * (taxRate/100));
        document.getElementById("salesTax").value = salesTax.toFixed(2);
        var total = (billSubtotal + salesTax);
        document.getElementById("total").value = total.toFixed(2);
    }
}