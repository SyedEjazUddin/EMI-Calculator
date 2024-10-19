
function emi(){
    var prince = parseFloat(document.getElementById("prince").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var box2 = document.querySelector(".box2");

    // Only calculate EMI if all inputs are valid numbers
    if (!isNaN(prince) && !isNaN(rate) && !isNaN(time) && prince > 0 && rate > 0 && time > 0) {
        var result = (prince * rate * Math.pow((1 + rate), time)) / (Math.pow((1 + rate), time) - 1);
        box2.innerText = result.toFixed(2);
        box2.style.display = "block";
    } else {
        box2.innerText = ''; // Clear any previous result
        box2.style.display = "none"; // Hide the box initially or if inputs are invalid
    }
}

emi();

var select = document.getElementById("select")
var prince = document.getElementById("prince");
var rate = document.getElementById("rate");
var time = document.getElementById("time");
var box2 = document.querySelector(".box2");

select.addEventListener("click", function(){
    box2.textContent = "";
    prince.value = "";
    rate.value = "";
    time.value = "";
})