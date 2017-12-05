$(document).ready(function () {
    
    //add input boxes
    
    var max_fields = 24; //maximum input boxes allowed
    var wrapper = $("#sortable1"); //fields wrapper
    var add_button = $(".add_field_button"); //add button ID
   
    var x = 1; //initlal text box count
    
    $(add_button).click(function (e) { //add input on button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<li><input type="text" size="40" name="mytext[]"/> <a href="#" class="remove_field">Remove</a></li>'); //add input box
        }
    });
   
    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault();
        $(this).parent('li').remove();
        x--;
    });
    
    //sortable list 
    $(function () {
        $("#sortable1, #sortable2").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });
    
    //date picker
    $(function () {
        $("#datepicker").datepicker();
    });
    
    
    $("#dialog").dialog ( {
        autoOpen: false
    });
    
    $("#instructions").click(function () {
        $("#dialog").dialog("open");
    });
   
     $(function() {
        $("#draggabledate").draggable();
    });
    
     $(function() {
        $("#draggabletodo").draggable();
    });
    
     $(function() {
        $("#draggabledone").draggable();
    });
    
     $(function() {
        $("#draggableprint").draggable();
    });
});