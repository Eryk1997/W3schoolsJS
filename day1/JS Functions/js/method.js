function toCelsius(){
  var fahrenheit = document.getElementById('fahrenheit').value;
  var x = (5 / 9) * (fahrenheit - 32);
  return x;
}

function operation(){
    var oper = document.getElementById('oper').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    switch (oper) {
      case "+":
        return parseFloat(number1) + parseFloat(number2);
        break;
      case "-":
        return parseFloat(number1) - parseFloat(number2);
        break;
      case "*":
        return parseFloat(number1) * parseFloat(number2);
        break;
      case "/":
        return parseFloat(number1) / parseFloat(number2);
        break;
    }
}
