// ## Задача 1. Форматтер чисел

function parseCount(number) {
    number = Number.parseFloat(number);
    if (Number.isNaN(number)) {
        throw new Error('Невалидное значение');
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }
}

// ## Задача 2. Треугольник 

class Triangle {
    constructor(value1, value2, value3) {
        if ((value1 + value2) < value3 || (value1 + value3) < value2 || (value3 + value2) < value1) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    }
    get perimeter() {
        return (this.value1 + this.value2 + this.value3);
    }
    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.value1) * (p - this.value2) * (p - this.value3)).toFixed(3);
        return Number(area);
    }
}

function getTriangle(value1, value2, value3) {
    try {
        return new Triangle(value1, value2, value3);
    }
    catch (error) {
        return {
            get perimeter() { return "Ошибка! Треугольник не существует"; },
            get area() { return "Ошибка! Треугольник не существует"; }
        };
    }
}
