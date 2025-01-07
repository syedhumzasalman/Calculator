
let input = document.getElementById("input");


function display(num){
    input.value += num;
}


function equal(){
   let finalNumber = input.value;
   let finalResult = eval(finalNumber);
   input.value = finalResult;
}


function clr(){
    input.value = "";
}

function del(){
    input.value = input.value.slice(0,-1)
}


function histroy(){
    
}











