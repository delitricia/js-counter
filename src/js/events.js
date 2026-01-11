import {add, reset, decrease} from './counter.js'

const btnAdd = document.getElementById("add");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

btnAdd.addEventListener("click", add);
btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);
