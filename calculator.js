let input = document.getElementById("input");

function display(num) {
  input.value += num;
}

function equal() {
  input.value = eval(input.value);
}

function clr() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}

function histroy() {}
