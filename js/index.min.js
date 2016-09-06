
(function() {
var thing2 = "<img src=\"";
var person2 = "\" alt=\"badpic\">";
var thing = "<iframe width=\"1060\" height=\"720\" src=\"";

var person = "\" frameborder=\"1\" scrolling=\"no\" allowfullscreen></iframe>";

var newText=document.getElementById("myInput").value;

document.getElementById("stylesChanger").onclick=function() {

newText=document.getElementById("myInput").value;

document.getElementById("myInput2").value=thing+ newText+ person;

}

})();

(function() {

var thing2 = "<img src=\"";
var person2 = "\" alt=\"Brandon\">";
var thingYY = "<iframe width=\"1100\" height=\"720\" src=\"";

var personYY = "\" frameborder=\"1\" scrolling=\"yes\" allowfullscreen></iframe>";

var newText3=document.getElementById("myInputYY").value;

document.getElementById("stylesChanger3").onclick=function() {

newText3=document.getElementById("myInputAA").value;

document.getElementById("myInputBB").value=thing2+ newText3+ person2;

}

})();

(function() {
var thing2 = "<img src=\"";
var person2 = "\" alt=\"badpic\">";
var thingYY = "<iframe width=\"1100\" height=\"720\" src=\"";

var personYY = "\" frameborder=\"1\" scrolling=\"yes\" allowfullscreen></iframe>";

var newText2=document.getElementById("myInputYY").value;

document.getElementById("stylesChanger2").onclick=function() {

newText2=document.getElementById("myInputYY").value;

document.getElementById("myInputZZ").value=thingYY+ newText2+ personYY;

}
})();