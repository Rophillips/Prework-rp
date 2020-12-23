javascript.js
document.getElementById("growBtn") .addEventListener("click", function () {
    document.getElementById("box") .style.height = "250px";
});
document.getElementById("blueBtn") .addEventListener("click", function () {
    document.getElementById("box") .style.color = "blue";
});
document.getElementById("fadeBtn") .addEventListener("click", function () {
    document.getElementById("box") .style.fade = "dwindle";
});
document.getElementById("resetBtn") .addEventListener("click", function (){
    document.getElementById("box") .style.height = "150px";
});

<script>