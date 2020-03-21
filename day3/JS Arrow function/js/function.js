hello = function(){
    return "Hello world"
}

idHello = document.getElementById('hello');
idHello.innerHTML = hello();

////////////////////////////////////////////////////////////////////////////////

hello2 = () => {
    return "Hello world";
}

idHello2 = document.getElementById('hello2');
idHello2.innerHTML = hello2();


////////////////////////////////////////////////////////////////////////////////

hello3 = () => "Hello world";

idHello3 = document.getElementById('hello3');
idHello3.innerHTML = hello3();

////////////////////////////////////////////////////////////////////////////////

hello4 = (val) => {
    return "Hello " + val;
}

idHello4 = document.getElementById('hello4');
idHello4.innerHTML = hello4("Eryk");

////////////////////////////////////////////////////////////////////////////////

hello5 = val => "Hello " + val;
idHello5 = document.getElementById('hello5');
idHello5.innerHTML = hello5("Wojtek");