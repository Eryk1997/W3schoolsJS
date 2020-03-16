function colorButton(){
    document.getElementById('fisrt').style.backgroundColor = getRandomColor();
    document.getElementById('second').style.backgroundColor = getRandomColor();
    document.getElementById('third').style.backgroundColor = getRandomColor();
    document.getElementById('plus').style.backgroundColor = getRandomColor();

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}