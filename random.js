function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var result = getRndInteger(min, max);
document.getElementById("value").innerHTML = result;