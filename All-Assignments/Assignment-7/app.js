function getInputNumber(num){
    var number = document.getElementById("inputNumber");

    number.value += num;
}

function clearScreen(){
    var number = document.getElementById("inputNumber");

    number.value = "";
}

function output(){
    var number = document.getElementById("inputNumber");

    var calulate = number.value;
    calulate = calulate.replace(/x/g , "*");
    number.value;
    number.value = eval(calulate);
}

function deleteChar(){
    var number = document.getElementById("inputNumber");

    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}

