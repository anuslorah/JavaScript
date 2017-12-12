$(document).ready(function () {
    
    //create variable for accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    //iterate through items in accordion
    for (i = 0; i < acc.length; i++) {
        //on click toggle the sibling to be active (i.e. show the div panel) 
        acc[i].onclick = function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
    
    
    $("#accordion").accordion( {
        event: "click",
        heightStyle: "content",
        collapsible: true
    });
    
     $("#tabs").tabs();
});