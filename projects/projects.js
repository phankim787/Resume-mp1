
let result;
let first;
let second;

function addition(){
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    result = first + second;
    displayResult(result);
}



function subtraction(){
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    result = first - second;
    displayResult(result);
}
function multiplication(){
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    result = first * second;
    displayResult(result);
}

function division(){
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    if (second === 0){
        document.getElementById("output").innerHTML=`cannot divide by 0`;
    } else{
        result = (first / second);
        displayResult(result);
    }

}
function power(){
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    let count = 1;
    for (let i = 1; i<= second; i++) {
        count = count * first;
    }
    displayResult(count);
}
function clear(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML= "";
    document.getElementById("output").removeAttribute("style");

}

function displayResult(result){
    const output = document
    if (result < 0) {
        document.getElementById("output").setAttribute("style", "color:red");
    } else {    // positive
        document.getElementById("output").setAttribute("style","color:black");
    }
    document.getElementById("output").innerHTML = String(result);
}
