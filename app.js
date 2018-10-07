var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

random.addEventListener("click", function () {
    let a = "#"+((1<<24)*Math.random()|0).toString(16);
    let b = "#"+((1<<24)*Math.random()|0).toString(16);
    color1.value = a;
    color2.value = b;

    changeColor();
});

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
changeColor();