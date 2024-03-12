// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

console.log("--------1---------");

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = name + email;
  this.phone = phone;
}

let user1 = new User(
  23,
  "Jenny",
  "Philips",
  "philips@gmail.com",
  "+35202582225",
);
console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log("--------2---------");
let users = [];

const usersFill = (id, name, surname, email, phone) =>
  users.push(new User(id, name, surname, email, phone));

usersFill(1, "John", "Himself", "@gmail.com", "+3584335437");
usersFill(15, "Joan", "Stivenson", "@gmail.com", "+3584335436");
usersFill(23, "Smith", "Fray", "@gmail.com", "+3584335434");
usersFill(44, "Jenifer", "Kollins", "@gmail.com", "+3584335439");
usersFill(8, "Karson", "Terkinsky", "@gmail.com", "+3584335432");
usersFill(25, "Stiven", "Strange", "@gmail.com", "+3584335434");
usersFill(10, "Tomas", "Man", "@gmail.com", "+3584335436");
usersFill(18, "Cris", "Kolambus", "@gmail.com", "+3584335447");
usersFill(38, "Trevis", "Svithter", "@gmail.com", "+3584335424");
usersFill(12, "James", "Redis", "@gmail.com", "+35843354445");

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log("--------3---------");
console.log(users.filter((e) => !(e.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log("--------4---------");
console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

console.log("--------5---------");

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = surname + email;
    this.phone = phone + Math.trunc(Math.random() * 10000000);
    this.order = order;
  }
}

console.log(
  new Client(
    23,
    "Frensis",
    "Jerimy",
    "Jerimi@gmail.com",
    "+38067",
    "QTR-34531531",
  ),
);
// створити пустий масив, наповнити його 10 об'єктами Client

console.log("--------6---------");
let clients = [];
const clientsFill = (id, name, surname, email, phone, order) =>
  clients.push(new Client(id, name, surname, email, phone, order));

clientsFill(
  25,
  "Leonard",
  "Hofstadter",
  "@gmail.com",
  "+38032",
  [234324, 252352, 124124],
);
clientsFill(
  34,
  "Penny",
  "Hofstadter",
  "@gmail.com",
  "+38032",
  [4234234, 5235235, 232, 12312],
);
clientsFill(10, "Sheldon", "Cooper", "@gmail.com", "+38032", [43432]);
clientsFill(5, "Howard", "Wolowitz", "@gmail.com", "+38065", [24233, 14124]);
clientsFill(
  33,
  "Rajesh",
  "Koothrappali",
  "@gmail.com",
  "+38052",
  [235235, 3252325, 23234, 12235, 63262],
);
clientsFill(
  12,
  "Leslie",
  "Winkle",
  "@gmail.com",
  "+3806",
  [643343, 4353452, 12132, 646463],
);
clientsFill(44, "Bernadette", "Wolowitz", "@gmail.com", "+38067", [34534543]);
clientsFill(
  56,
  "Amy",
  "Fowler",
  "@gmail.com",
  "+38067",
  [4535233, 2363662, 223434, 121312],
);
clientsFill(29, "Stuart ", "Bloom", "@gmail.com", "+38067", [9687567, 4654654]);
clientsFill(
  8,
  "Mary",
  "Cooper",
  "@gmail.com",
  "+38067",
  [123123, 12123, 3475, 675675, 53434, 12323],
);

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log("--------7---------");
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

console.log("--------8---------");

function Car(model, make, year, maxSpeed, engVol) {
  this.model = model;
  this.make = make;
  this.year = year;
  this.maxSpeed = maxSpeed + "km/h";
  this.engVol = engVol + "cm3";
}

let zaz = new Car("ZAZ-01", "ZAZ", 2001, 85, 1.2);
console.log(zaz);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

console.log("--------9---------");
Car.prototype.drive = function () {
  return console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
};
zaz.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

console.log("--------10---------");
Car.prototype.info = function () {
  for (const key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key} - ${JSON.stringify(this[key])}`);
    }
  }
};
zaz.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

console.log("--------10---------");
Car.prototype.increaseMaxSpeed = function (newSpeed) {
  this.maxSpeed = newSpeed + "km/h";
};
zaz.increaseMaxSpeed(105);
zaz.info();

// -- changeYear (newValue) - змінює рік випуску на значення newValue

console.log("--------11---------");
Car.prototype.changeYear = function (newValue) {
  this.year = newValue;
};
zaz.changeYear(1998);
zaz.info();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log("--------12---------");
Car.prototype.addDriver = function (driverName) {
  this.driver = arguments;
};
zaz.addDriver("Kiril", "Sergiy");
zaz.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

console.log("--------13---------");

class Car1 {
  constructor(model, make, year, maxSpeed, engVol) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed + "km/h";
    this.engVol = engVol + "cm3";
  }
}

let nissan = new Car1("Juke", "Nisaan", 2022, 160, 2.2);
console.log(nissan);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

console.log("--------14---------");
Car1.prototype.drive = function () {
  console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
};
nissan.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

console.log("--------15---------");
Car1.prototype.info = function () {
  for (const key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key} - ${JSON.stringify(this[key])}`);
    }
  }
};

nissan.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

console.log("--------16---------");
Car1.prototype.increaseMaxSpeed = function (newSpeed) {
  this.maxSpeed = newSpeed + "km/h";
};
nissan.increaseMaxSpeed(200);
nissan.info();

// -- changeYear (newValue) - змінює рік випуску на значення newValue

console.log("--------17---------");
Car1.prototype.changeYear = function (newValue) {
  this.year = newValue;
};
nissan.changeYear(2019);
nissan.info();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log("--------18---------");
Car1.prototype.addDriver = function (driverName) {
  this.driver = arguments;
};
nissan.addDriver("Jim", "Henrix", "Jillian");
nissan.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

console.log("--------19---------");

class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

let cinderellas = [];
const cinderellaNew = (name, age, footSize) =>
  cinderellas.push(new Cinderella(name, age, footSize));

cinderellaNew("Jannet", 18, 27);
cinderellaNew("Julietta", 22, 30);
cinderellaNew("Mary", 34, 31);
cinderellaNew("Clarisse", 25, 28);
cinderellaNew("Dafna", 21, 29);
cinderellaNew("Josefine", 28, 30);
cinderellaNew("Karmen", 30, 27);
cinderellaNew("Jill", 19, 29);
cinderellaNew("Priscilla", 20, 34);
cinderellaNew("Dana", 22, 33);

console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
console.log("--------19---------");

class Prince {
  constructor(name, age, shoeFound) {
    this.name = name;
    this.age = age;
    this.shoeSizeFound = shoeFound;
  }
}

let prince = new Prince("Percival", 34, 28);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log("--------20---------");
for (const cinderella of cinderellas) {
  if (cinderella.footSize === prince.shoeSizeFound) {
    console.log(`${prince.name} will marry ${cinderella.name}`);
  }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log("--------21---------");
console.log(
  `${prince.name} will marry ${cinderellas.find((e) => e.footSize === prince.shoeSizeFound).name}`,
);
