function validateRadio (radios)
{
    for (i = 0; i < radios.length; ++ i)
    {
        if (radios [i].checked) return true;
    }
    return false;
}



function validate() {
    if(document.contact.Name.value == "") {
        alert("Please provide your name!");
        document.contact.Name.focus();
        return false;
    }
         
    if(document.contact.Email.value == "") {
        alert("Please provide your Email!");
        document.contact.Email.focus();
        return false;
    }
        
    if( document.contact.How_did_you_find_me.value == "-1" ) {
        alert("Please select something from the drop down menu!");
        return false;
    }  
                    
    if(document.contact.Comments.value == "" || document.contact.Comments.value.length <= 5) {
        alert("You forgot to leave a message!");
        document.contact.Comments.focus();
        return false;
    }
          
    if(validateRadio (document.forms["contact"]["SeattleWeather"])) {
        return true;
    }else {
        alert('Please answer the question about weather too..');
        return false;
    }
    return( true );
}