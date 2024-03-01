const display = document.getElementById("display");
function appendToDisplay(input){

    display.value += input;

}



function clearDisplay(){

    display.value = "";

}


function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

