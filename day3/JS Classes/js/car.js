class Car{
    constructor(name) {
        this.carName = name;
    }
    present (){
        return "I have a " + this.carName;
    }

    get cnam() {
        return this.carName;
    }
    set cnam(x) {
        this.carName = x;
    }
}

class Model extends Car{
    constructor(name, model){
        super(name)
        this.model = model
    }
    show(){
        return this.present() + " it is a " + this.model
    }
}

mycar = new Model("Renault", "Fluence")
document.getElementById('car').innerHTML = mycar.show()