

function calc(){
var input1 = document.getElementById("input1").value

var input2 = document.getElementById("input2").value

var operator = document.getElementById("operator").value
if(operator == "+"){
   var res = parseInt(input1) + parseInt(input2) 
   
}
if(operator == "-"){
   var res = parseInt(input1) - parseInt(input2) 
   
}
if(operator == "*"){
   var res = parseInt(input1) * parseInt(input2) 

}
if(operator == "/"){
   var res = parseInt(input1) / parseInt(input2) 
   
}

document.getElementById("h1").innerHTML= res
}