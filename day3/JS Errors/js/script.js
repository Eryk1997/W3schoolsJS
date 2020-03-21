function myFunction(){
    value = document.getElementById('value').value;
    try {
        if (value == '') throw 'empty input';
        if (value < 5) throw 'this value is to low';
        else if(value > 10) throw 'this value is to hight';
        else document.getElementById('resultValue').innerHTML = value;

    } catch (error) {
        document.getElementById('resultValue').innerHTML = error;
    }
    finally{
        document.getElementById('value').value = '';
    }

}
