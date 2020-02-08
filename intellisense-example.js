function Person(firstName, lastName){
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

var psn =  new Person("Juan","Perez");

console.log(psn.getFullName());