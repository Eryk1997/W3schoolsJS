function calculat() {
    //var numbers = document.getElementById('cal').value.split("+");
    var operator = document.getElementById('cal').value.split("");
    var numbers = [];

    if (operator.includes('+')) {
        numbers = document.getElementById('cal').value.split("+");
        return parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if (operator.includes('-')) {
        numbers = document.getElementById('cal').value.split("-");
        return parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if (operator.includes('*')) {
        numbers = document.getElementById('cal').value.split("*");
        return parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if (operator.includes('/')) {
        numbers = document.getElementById('cal').value.split("/");
        return parseFloat(numbers[0]) / parseFloat(numbers[1]);
    }
}