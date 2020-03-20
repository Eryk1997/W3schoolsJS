class User{
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFistName() { return this.firstName }
    getLastName() { return this.lastName }
    getAge() { return this.age }
    getFullName() { return this.firstName + " " + this.lastName}

    setFirstName(firstName) { this.firstName = firstName}
    setLastName(lastName) { this.lastName = lastName}
    setAge(age) { this.age = age}
}

/*var myFunction = {
    getAllInfo: function(){
        return this.firstName + " " + this.lastName + " " + this.age;
    }
}*/

class MyFunction {
    getAllInfo(){
        return this.firstName + " " + this.lastName + " " + this.age;
    }
}
var myFunction = new MyFunction();
// export {User};
// module.exports.AspectType
person = new User("Eryk", "Janocha", 22);
document.getElementById('user').innerHTML = person.getLastName();
var x = myFunction.getAllInfo.call(person);
document.getElementById('info').innerHTML = x;
