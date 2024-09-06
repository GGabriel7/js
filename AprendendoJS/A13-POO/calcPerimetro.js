class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        return this.sideLength * this.sides;
    }

    describe() {
        console.log(`A ${this.name} tem ${this.sides} lados, cada um com ${this.sideLength} unidades de comprimento.`)
    }
}

const square = new Shape('square', 4, 5);
console.log(square.calcPerimeter());

const triangle = new Shape('triangle', 3 ,3);
console.log(triangle.calcPerimeter());

console.log(square);
triangle.describe();

class Square extends Shape {

    constructor(sideLength) {
        super('square', 4, sideLength);
    }

    calcArea() {
        return this.sideLength ** 2;
    }
}

const square2 = new Square(5);
console.log(square2.calcArea());
console.log(square2.calcPerimeter());