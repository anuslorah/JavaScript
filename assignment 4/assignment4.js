//create the object with constructor template
function Smoothie (liquidBase, fruit, protein) {
    
    this.liquidBase = liquidBase;
    this.fruit = fruit;
    this.protein = protein;
    
    //pick out smoothie ingredients
    this.smoothiemaker = function(){
        liquidBase = liquidBase[Math.floor(Math.random()*liquidBase.length)];
        fruit = fruit[Math.floor(Math.random()*fruit.length)];
        protein = protein[Math.floor(Math.random()*protein.length)];
        
        //name the smoothie after the fruit
        var smoothieName = fruit + " smoothie";
       
        //make smoothie ingredient list
        var smoothie = "<h3>" + smoothieName + "</h3>"
            + liquidBase + "<br>"
            + fruit + "<br>"
            + protein;
             
        return smoothie;
    };
}

//create object 1
var smoothieIngredients1 = new Smoothie(
     ["milk", "almond milk", "soy milk", "apple juice"], 
     ["orange", "banana", "pineapple", "strawberry"], 
     ["peanut butter", "almonds", "hemp seeds", "yogurt"]);

//generate smoothie 1
var smoothie1 = smoothieIngredients1.smoothiemaker();

//create object 2
var smoothieIngredients2 = new Smoothie(
     ["coconut water", "hemp milk", "coconut milk", "carrot juice"], 
     ["grapefruit", "cherry", "grape", "blueberry"], 
     ["sunflower seeds", "tofu", "hazelnuts", "cashews"])

//generate smoothie2
var smoothie2 = smoothieIngredients2.smoothiemaker();

//insert custom smoothie from form into element with id "custom"
function customSmoothie() {
    var x = document.forms["c"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("custom").innerHTML = text;
}

//update html
var drink1 = document.getElementById("smoothie1");
drink1.innerHTML = smoothie1;

var drink2 = document.getElementById("smoothie2");
drink2.innerHTML = smoothie2;

//update html
var x = document.getElementsByTagName("title");
document.getElementById("heading").innerHTML = x[0].innerHTML;

//update styling
changeColor("#660066");
function changeColor(hex) {
    var elems = document.querySelectorAll("h1");
    for (var index = 0; index < elems.length; index++) {
        elems[index].style.color = hex;
    }
}

//add undelining
underLine();
function underLine(){
    var elems = document.getElementsByClassName("s"); 
    for (var index = 0; index < elems.length; index++) {
        elems[index].style.textDecoration = "underline";
    }
}
//print current page
function printMe() {
    window.print();
}