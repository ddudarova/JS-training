// point1
function propsCount(currentObject){
    console.log(Object.keys(currentObject).length);
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
propsCount(mentor);

//point2
const car = {
    color: 'Blue',
    brand: 'Ford',
    model: 'Fiesta',
    year: 1995,
    wasStolen: false
}

function showProps(obj){
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
}

showProps(car);

//point3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        console.log(this.name + ' ' + middleName + ' ' + this.surname);
    }
    showCourse(){
        const currentYear = (new Date()).getFullYear();
        return currentYear - this.year;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2017);
stud1.showFullName('Petrovych');
console.log("Current course: " + stud1.showCourse());

//point4
class Worker{
    constructor(fullName, dayRate, workingDays) {
        this.fullName =fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        const salary = this.dayRate * this.workingDays;
        console.log(this.fullName + ' ' + 'salary is ' + salary);
    }
    #experience = 1.2;
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.#experience;
    }
    get experience() {
        return this.#experience;
    }
    set experience(value) {
        this.#experience = value;
    }
}

const workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23),
];
for(let worker of workers){
    console.log(worker.fullName);
    worker.showSalary();
    console.log("Experience: " + worker.experience);
    console.log(worker.fullName + ' ' + 'salary is ' + worker.showSalaryWithExperience());
    worker.experience = 1.5;
    console.log("New experience: " + worker.experience);
    console.log(worker.fullName + ' ' + 'salary is ' + worker.showSalaryWithExperience());
}

workers.sort(function (a, b){
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
})
console.log('Sorted salary:');
for(let worker of workers){
    console.log(worker.fullName + ':' + worker.showSalaryWithExperience())
}

//point5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea() {
        return 0.5 * this.a *this.h;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * (this.r * this.r)
    }
}

function handleFigures(figures){
    for(let figure of figures){
        console.log('Geometric Figure: ' + figure.toString() + ' - area: '+ figure.getArea());
    }
    console.log('Total area: ' + figures.reduce((sum, elem) => sum + elem.getArea(), 0));
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

handleFigures(figures);