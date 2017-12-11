$(document).ready(function(){
    $("#accordion").accordion( {
        event: "click",
        heightStyle: "content",
        collapsible: true
    });
    
    $("#tabs").tabs();
                
    $("#kitten").button();
    $("#kitten").click(function(){
        $("#dialog").dialog({
            modal:true
        });
    });   
});