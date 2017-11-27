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
     ["coconut water", "tomato juice", "coconut milk", "carrot juice"], 
     ["kale", "avocado", "cucumber", "wheatgrass"], 
     ["sunflower seeds", "tofu", "hazelnuts", "cashews"])

//generate smoothie2
var smoothie2 = smoothieIngredients2.smoothiemaker();

//update html
var drink1 = document.getElementById("smoothie1");
drink1.innerHTML = smoothie1;

var drink2 = document.getElementById("smoothie2");
drink2.innerHTML = smoothie2;

//update html
var x = document.getElementsByTagName("title");
document.getElementById("heading").innerHTML = x[0].innerHTML;


//print current page
function printMe() {
    window.print();
}

$(document).ready(function(){
    
    //hide everything except the fruit, veggie and custom buttons
    $("#one").hide();
    $("#two").hide();
    $("#flip").hide();
    $("#panel").hide();
    $("#three").hide();
    $("#four").hide();
    $("#print").hide();

    //when button id="fruit" is clicked
    $('#fruit').on('click', function(){
    
        //fade out the h2
        $('h2').fadeOut(1000);

        //show div id="one"
        $("#one").show();
        
        //fade in div id="print:
        $("#print").fadeIn(2500);
        
        //hide other divs
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#fruit").hide();
        $("#veggie").hide();
        $("#custom").hide();
    });
    
    //when button id="veggie" is clicked
    $('#veggie').on('click', function(){
        
        //hide h2
        $("h2").hide();
        
        //animate h3 to grow until width =70%, opacity reduces to 0.7 
        //and marginLeft is 5px, increase font size to 30px
        $("h3").animate({
            width: "70%",
            opacity: 0.7,
            marginLeft: "5px",
            fontSize: "30px",
        }, 1500 );
        
        $("#two").show();
        $("#print").show(); 
        $("#flip").show();
        $("#one").hide();
        $("#three").hide();
        $("#four").hide();
        $("#fruit").hide();
        $("#veggie").hide();
        $("#custom").hide();
        
        //when div id="flip is clicked, toggle div is="panel to show or not to show
        $("#flip").click(function(){
            $("#panel").slideToggle("slow");
        });
    });
    
    $('#custom').on('click', function(){
        $("h2").hide();
        $("#three").show();
        $("#print").show();
        $("#four").hide();
        $("#one").hide();
        $("#two").hide();
        $("#fruit").hide();
        $("#veggie").hide();
        $("#custom").hide();
        
        //insert custom smoothie from form into element with id "custom"
        //reset form in case there is a cashed version
        $("#c").trigger('reset');
        //get form values
        
        /*
        $("c").submit(function(event) {
            $(this).serializeArray();
            event.preventDefault();
            jQuery.each( $(this).serializeArray(), function( index, value ) {
                console.log( "index", index, "value", value );
            });
        });
        */
        
        var $liquidBase = $("#liquidBase").val(0);
        var $fruit = $("#fruit").val(1);
        var $protein = $("#protein").val(2);
        var $smoothieName = $fruit + " smoothie";
        var $text = ("<h3>" + $smoothieName + "</h3>"
                + $liquidBase + "<br>"
                + $fruit + "<br>"
                + $protein);
        $("#showsmoothie").click(function(){
            $("#three").hide();
            $("#four").show();
            $("#customsmoothie").append($text);
        });
        
     });

});