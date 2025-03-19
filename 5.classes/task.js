// # Задача 1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        }
        else if (value > 100) {
            this._state = 100;
        }
        else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.state = 90;
// sherlock.fix();
// console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = type;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type = "book") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


// ## Задача 2. Библиотека
//  Создайте класс `Library` со свойствами:

//    - `name`;
//    - `books`.

//    Конструктор класса должен принимать название библиотеки `name` (строка). Значением свойства `books` должен быть пустой массив.

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// ## Задача 3. Журнал успеваемости *

class Student {
    constructor(name, marks = {}) {
        this.name = name;
        this.marks = marks;
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        } else {
            let sum = this.marks[subject].reduce((acc, current) => acc + current, 0);
            let result = sum / this.marks[subject].length;
            return result;
        }
    }
    getAverage() {
        const keys = Object.keys(this.marks);
        if (keys.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < keys.length; i++) {
            let subject = keys[i];
            let average = this.getAverageBySubject(subject);
            sum += average;
        }
        return sum / keys.length;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75