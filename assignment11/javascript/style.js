//update styling
changeColor("#660066");
function changeColor(hex) {
    var elems = document.querySelectorAll("h2");
    for (var index = 0; index < elems.length; index++) {
        elems[index].style.color = hex;
    }
}