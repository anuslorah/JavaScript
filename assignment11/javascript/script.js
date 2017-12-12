jQuery(document).ready(function (e) {
    //update styling
    changeColor("#660066");
    
    function changeColor(hex) {
        var elems = document.querySelectorAll("h2");
        for (var index = 0; index < elems.length; index++) {
            elems[index].style.color = hex;
        }
    }
    $("html").css("background-color", "#cccccc");
    
    
    changeColorSize("#993399", "16px");
    
    function changeColorSize(hex, px) {
        var elems = document.getElementsByTagName("h3");
        for (var index = 0; index < elems.length; index++) {
            elems[index].style.color = hex;
            elems[index].style.fontSize = px;
        }
    }
    
    //weather plugin
   
      // get location from user's IP address
      $.getJSON("https://ipinfo.io", function(info) {
        var locString = info.loc.split(", ");
        var latitude = parseFloat(locString[0]);
        var longitude = parseFloat(locString[1]);
        $("#location").html(
          "Location: " + info.city + ", " + info.region + ", " + info.country
        );

        // get weather using OpenWeatherMap API
        $.getJSON(
          "https://cors.5apps.com/?uri=http://api.openweathermap.org/data/2.5/weather?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&units=metric&APPID=c3e00c8860695fd6096fe32896042eda",
          function(data) {
            var windSpeedkmh = Math.round(data.wind.speed * 3.6);
            var Celsius = Math.round(data.main.temp);
            var iconId = data.weather[0].icon;
            var weatherURL = "http://openweathermap.org/img/w/" + iconId + ".png";

            var iconImg = "<img src='" + weatherURL + "'>";
            $("#sky-image").html(iconImg);
            $("#weather-id").html("Skies: " + data.weather[0].description);

            $("#temperature").html(Celsius);
            $("#toFahrenheit").click(function() {
              $("#temperature").html(Math.round(9 / 5 * Celsius + 32));
              $("#wind-speed").html(Math.round(windSpeedkmh * 0.621) + " mph");
            });
            $("#toCelsius").click(function() {
              $("#temperature").html(Celsius);
              $("#wind-speed").html(windSpeedkmh + " km/hr");
            });

            $("#wind-speed").html(windSpeedkmh + " km/h");
            $("#humidity").html("Humidity: " + data.main.humidity + " %");
          }
        );
      });

    //dropdown menu toggle
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});