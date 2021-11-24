

// Basic about classe....

class Rectangle{
    constructor(_width, _height, _color){
        console.log("the Rectangle");
        this.width = _width;
        this.heigth = _height;
        this.color = _color;
    }
    getArea (){
        return this.width * this.heigth;
    }
    printDescription (){
        console.log(`I am rectangle ${this.width} x ${this.heigth} and I am of ${this.color}`);
    }
}
let myRectangle1 = new Rectangle(3,5,"blue"); 
let myRectangle2 = new Rectangle(10,7,"red");
myRectangle2.printDescription();
// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());


// Getter and Setter 

class Square {
    constructor(_width) {
        this.width = _width;
        this.heigth = _width;
    }
    get area() {
        return this.width * this.heigth;
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.heigth = this.width;
    }
}
let square1 = new Square(4);
square1.area=25;
console.log(square1.area);  
console.log(square1.width);
console.log(square1.heigth);

//  Static...

class Square1 {
    constructor(_width) {
        this.width = _width;
        this.heigth = _width;
    }
    static equal(a, b) {
        return a.width * a.heigth === b.width * b.heigth;
    }
    static validation(width, height) {
        return width === height;

    }
}
console.log(Square1.validation(7, 6));
