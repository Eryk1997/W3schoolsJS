var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
show = document.getElementById('demo');
eployeeLength = obj.employees.length;

fullName = (object, i) => {
    return object.employees[i].firstName + " " +
    object.employees[i].lastName + "<br>";
};

for (var i = 0; i < eployeeLength ; i++){
    //show.innerHTML += obj.employees[i].firstName + " " + obj.employees[i].lastName + '<br>';
    show.innerHTML += fullName(obj, i);
}
