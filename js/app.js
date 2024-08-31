function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let expression = document.getElementById("display").value;

    if (expression) {
      let result = Function('"use strict"; return (' + expression + ')')();
      document.getElementById("display").value = result;
    }
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
