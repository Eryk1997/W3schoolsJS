function showCars(id, cars){
    //var cars = new Array("Volvo", "Renault")
    document.getElementById(id).innerHTML = cars;
}

function showCarsUl(cars){
    var text = [];
    for (var index = 0; index < cars.length; index++) {
        text += "<li>" + cars[index] + "</li>";
    }
    return text;
}