$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:5,
        slideMargin: 0,
        textAlign: "center";
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});