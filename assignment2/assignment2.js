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

//update html
var drink1 = document.getElementById("smoothie1");
drink1.innerHTML = smoothie1;

var drink2 = document.getElementById("smoothie2");
drink2.innerHTML = smoothie2;