

function add(){
const numberElement = document.getElementById("number");
    numberElement.textContent = Number(numberElement.textContent) + 1;
}

function reset(){
const numberElement = document.getElementById("number");
   numberElement.textContent = 0;
}

function decrease(){
const numberElement = document.getElementById("number");
    numberElement.textContent = Number(numberElement.textContent) > 0 ? Number(numberElement.textContent) -1 : 0;
};

export {add, reset, decrease}

