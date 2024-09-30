var val1 = 3;
var val2 = 8;
var myName = "semmy wallem taju";

document.getElementById("my-btn").addEventListener("click", function() {
    myName = "Piter pan";
    myFunction(myName, val1, val2);
});

function myFunction(name,a,b) {
    name = "puteri siregear";
    var value = a*b;
    var join = "name"+ name + "("+value+")";
    document.getElementById("value-demo").innerHTML =join;
}