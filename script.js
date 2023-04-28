

// clear the input
function clearScreen(){
    const input = document.getElementById('screen');
    input.value = ' ';
}

function backSpace(){
    const back = document.getElementById('screen');
    const value = back.value;
    // back.value = value.substring(0,value.length-1);
    back.value = value.slice(0,-1);
}

function display(value){
    const input = document.getElementById('screen');
    input.value += value;
}

 function calculate(){
    const input = document.getElementById('screen');
    const expression = input.value;
    const result = eval(expression)
    if(Number.isInteger(result)){
        input.value = result.toString();
    }else{
        input.value = result.toFixed(3)
    }
 }

