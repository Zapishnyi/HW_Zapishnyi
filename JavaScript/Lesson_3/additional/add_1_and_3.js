console.log(
  "---------------------------------additional 1 -------------------------------",
);
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

console.log("---------1.1---------");
let strangeArray = [
  34,
  62,
  22165,
  223,
  234234255,
  "2343",
  "24231",
  "avrraev",
  "avrverv",
  "avrrevav",
  "arevrvv",
  "avrevvrrv",
  "arveevrvarer",
  345345,
  656565,
  2323423,
  2343224,
  234234234,
  true,
  true,
  false,
  true,
  false,
];

// - та вивести його в консоль

for (let strangeArrayElement of strangeArray) {
  console.log(strangeArrayElement);
}
for (let i = 0; i < strangeArray.length; i++) {
  console.log(strangeArray[i]);
}
{
  i = 0;
  while (i < 0) {
    console.log(strangeArray[i]);
    i++;
  }
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

console.log("---------1.2---------");
let emptyArray = [];
for (let i = 0; i < 20; i++) {
  emptyArray[i] = "Lorem ipsum dolor sit amet. - " + (i + 1);
}
for (let i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i]);
}
//
//
//
//
// - є масив
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

console.log("---------1.3---------");
{
  i = 0;
  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

//     2. перебрати його циклом for

console.log("---------1.4---------");
for (const number of numbers) {
  console.log(number);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log("---------1.5---------");
{
  let i = 1;
  while (i < numbers.length) {
    console.log(numbers[i]);
    i = i + 2;
  }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log("---------1.6---------");
for (let i = 1; i < numbers.length; i = i + 2) {
  console.log(numbers[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log("---------1.7---------");
{
  let i = 2;
  while (i < numbers.length) {
    console.log(numbers[i]);
    i = i + 2;
  }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

console.log("---------1.8---------");
for (let i = 2; i < numbers.length; i = i + 2) {
  console.log(numbers[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"

console.log("---------1.9---------");
let numbers2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < numbers2.length; i++) {
  if (!(numbers2[i] % 3)) {
    numbers2[i] = "okten";
  }
}
console.log(numbers2);

// 8. вивести масив в зворотньому порядку.

console.log("---------1.10---------");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

console.log("---------1.11---------");
{
  i = numbers.length - 1;
  while (i >= 0) {
    console.log(numbers[i]);
    i--;
  }
}

//     2. перебрати його циклом for

console.log("---------1.12---------");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log("---------1.13---------");
{
  i = numbers.length - 1;
  while (i >= 0) {
    if (i % 2) {
      console.log(numbers[i]);
    }
    i--;
  }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log("---------1.14---------");
for (let i = numbers.length - 1; i >= 0; i--) {
  if (i % 2) {
    console.log(numbers[i]);
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log("---------1.15---------");
{
  i = numbers.length - 1;
  while (i >= 0) {
    if (!(i % 2)) {
      console.log(numbers[i]);
    }
    i--;
  }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

console.log("---------1.16---------");
for (let i = numbers.length - 1; i >= 0; i--) {
  if (!(i % 2)) {
    console.log(numbers[i]);
  }
}

// 7. замінити кожне число кратне 3 на слово "okten"

console.log("---------1.17---------");
let numbers3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = numbers3.length; i >= 0; i--) {
  if (!(numbers3[i] % 3)) {
    numbers3[i] = "okten";
  }
}
console.log(numbers3);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

console.log("---------1.18---------");
let numbers10 = [];
for (let i = 0; i < 10; i++) {
  numbers10[i] = 23432423 + i;
}
for (const numbers10Element of numbers10) {
  console.log(numbers10Element);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

console.log("---------1.19---------");
let strings10 = [];
for (let i = 0; i < 10; i++) {
  strings10[i] = "23432423" + i;
}
for (const strings10Element of strings10) {
  console.log(strings10Element);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

console.log("---------1.20---------");
let any10 = ["fwefw", true, undefined, NaN, 34, false, 2131n, null, 234234, 0];
for (const any10Element of any10) {
  console.log(any10Element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

console.log("---------1.21---------");
let mixArray1 = [
  3423,
  "sefsef",
  true,
  "aafsdad",
  34234,
  false,
  234324,
  true,
  "true",
  false,
];
for (const mixArray1Element of mixArray1) {
  if (typeof mixArray1Element === "boolean") {
    console.log(mixArray1Element);
  }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log("---------1.22---------");
for (const mixArray1Element of mixArray1) {
  if (typeof mixArray1Element === "number") {
    console.log(mixArray1Element);
  }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log("---------1.23---------");
for (const mixArray1Element of mixArray1) {
  if (typeof mixArray1Element === "string") {
    console.log(mixArray1Element);
  }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log("---------1.24---------");
let mixArray2 = [];
mixArray2[0] = "awffwawfawf";
mixArray2[1] = 234342;
mixArray2[2] = true;
mixArray2[3] = null;
mixArray2[4] = "adfafwfaf";
mixArray2[5] = "234244";
mixArray2[6] = false;
mixArray2[7] = 61161511;
mixArray2[8] = 0;
mixArray2[9] = "adddwadwad";
for (let i = 0; i < 10; i++) {
  console.log(mixArray2[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log("---------1.25---------");
{
  document.write("---------1.25---------");
  let counter = 1;
  for (let i = 0; i < 100; i++) {
    console.log(`1.  Iteration No:${counter}, Iteration index ${i}`);
    document.write(`<p>1.  Iteration No:${counter}, Iteration index ${i}</p>`);
    counter++;
  }
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log("---------1.26---------");
{
  document.write("---------1.26---------");
  let counter = 1;
  for (let i = 0; i < 100; i++) {
    console.log(`1.  Iteration No:${counter}, Iteration index ${i}`);
    document.write(`<p>1.  Iteration No:${counter}, Iteration index ${i}</p>`);
    counter++;
  }
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log("---------1.27---------");
{
  document.write("---------1.27---------");
  let counter = 1;
  for (let i = 0; i < 200; i = i + 2) {
    console.log(`3.  Iteration No:${counter}, Iteration index ${i}`);
    document.write(`<p>3. Iteration No:${counter}, Iteration index ${i}</p>`);
    counter++;
  }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log("---------1.28---------");
{
  document.write("---------1.28---------");
  let counter = 1;
  for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
      console.log(`3.  Iteration No:${counter}, Iteration index ${i}`);
      document.write(`<p>3. Iteration No:${counter}, Iteration index ${i}</p>`);
    }
    counter++;
  }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log("---------1.29---------");
{
  document.write("---------1.29---------");
  let counter = 1;
  for (let i = 0; i < 100; i++) {
    if (i % 2) {
      console.log(`3.  Iteration No:${counter}, Iteration index ${i}`);
      document.write(`<p>3. Iteration No:${counter}, Iteration index ${i}</p>`);
    }
    counter++;
  }
}
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let bookList = [
  {
    title: "Silo",
    pageCount: 450,
    genre: ["Science fiction"],
    authors: ["Hugh Howey"],
  },
  {
    title: "1984",
    pageCount: 352,
    genre: ["Social science fiction"],
    authors: ["George Orwell"],
  },
  {
    title: "The Financier",
    pageCount: 420,
    genre: ["Fiction", "Novel"],
    authors: ["Theodore Dreiser"],
  },
  {
    title: "Beautiful story",
    pageCount: 360,
    genre: ["Thriller"],
    authors: ["John", "Johan"],
  },
  {
    title: "Sad story",
    pageCount: 600,
    genre: ["Fiction", "Dramma", "Thriller"],
    authors: ["Tomas", "Jesikca"],
  },
  {
    title: "Interesting story",
    pageCount: 50,
    genre: ["Novel", "Thriller"],
    authors: ["James", "Katrine"],
  },
];

// -знайти наібльшу книжку.

console.log("---------1.30---------");
{
  let max = 0;
  for (let i = 1; i < bookList.length; i++) {
    if (bookList[i - 1].pageCount < bookList[i].pageCount) {
      max = i;
    }
    if (i === bookList.length - 1) {
      console.log(`Book with biggest amount of pages: ${bookList[max].title}`);
    }
  }
}

// - знайти книжку/ки з найбільшою кількістю жанрів

console.log("---------1.31---------");
{
  let max = 0;
  for (let i = 1; i < bookList.length; i++) {
    if (bookList[i - 1].genre.length < bookList[i].genre.length) {
      max = i;
    }
    if (i === bookList.length - 1) {
      console.log(
        `Book that includes biggest genre quantity: ${bookList[max].title}`,
      );
    }
  }
}

// - знайти книжку/ки з найдовшою назвою

console.log("---------1.32---------");
{
  let max = 0;
  for (let i = 1; i < bookList.length; i++) {
    if (bookList[i - 1].title.length < bookList[i].title.length) {
      max = i;
    }
    if (i === bookList.length - 1) {
      console.log(`Book with longest title: ${bookList[max].title}`);
    }
  }
}

// - знайти книжку/ки які писали 2 автори

console.log("---------1.33---------");
for (const bookListElement of bookList) {
  if (bookListElement.authors.length === 2) {
    console.log(
      `${bookListElement.title} - 2 authors: ${bookListElement.authors}`,
    );
  }
}

// - знайти книжку/ки які писав 1 автор

console.log("---------1.34---------");
for (const bookListElement of bookList) {
  if (bookListElement.authors.length === 1) {
    console.log(
      `${bookListElement.title} - 1 author: ${bookListElement.authors}`,
    );
  }
}

//--------------------------------------------------additional 3 --------------------------------------------------
console.log(
  "---------------------------------additional 3 -------------------------------",
);

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let numbersArray = [];
for (let i = 0; i < 100; i = i + 2) {
  numbersArray[numbersArray.length] = i;
}

//     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 1; i < 100; i = i + 2) {
  numbersArray[numbersArray.length] = i;
}

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
  numbersArray[numbersArray.length] = Math.floor(Math.random() * 100);
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
  numbersArray[numbersArray.length] = Math.trunc(Math.random() * (732 - 8) + 8);
}

// 2. Вивести за допомогою console.log кожен третій елемен

console.log("------ 3.2 -------");
for (let i = 2; i < numbersArray.length; i = i + 3) {
  console.log(numbersArray[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

console.log("------ 3.3 -------");
for (let i = 2; i < numbersArray.length; i = i + 3) {
  if (!(numbersArray[i] % 2)) {
    console.log(numbersArray[i]);
  }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

console.log("------ 3.4 -------");
let numbersArrayNew = [];
for (let i = 2; i < numbersArray.length; i = i + 3) {
  if (!(numbersArray[i] % 2)) {
    console.log(numbersArray[i]);
    numbersArrayNew[numbersArrayNew.length] = numbersArray[i];
  }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log("------ 3.5 -------");
for (let i = 0; i < numbersArray.length; i++) {
  if (!(numbersArray[i + 1] % 2)) {
    console.log(numbersArray[i]);
  }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

console.log("------ 3.6 -------");
let bills = [100, 250, 50, 168, 120, 345, 188];
let averageBill = 0;
for (const bill of bills) {
  averageBill = averageBill + bill;
}
averageBill = (averageBill / bills.length).toFixed(2);
console.log(averageBill);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

console.log("------ 3.7 -------");
let randomNumArr = [];
let randomMultiply5 = [];
for (let i = 0; i < 100; i++) {
  randomNumArr[randomNumArr.length] = Math.trunc(Math.random() * 100);
}
for (const element of randomNumArr) {
  randomMultiply5[randomMultiply5.length] = element * 5;
}
console.log(randomNumArr, randomMultiply5);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

console.log("------ 3.8 -------");
let outputArr = [];
let mixItems = [
  "Sfefsef",
  2343232,
  "s234334",
  true,
  null,
  "233232",
  45434,
  false,
  "sefsef",
  4325323,
  null,
  "sefsefsf",
  34343,
];
for (let mixItem of mixItems) {
  if (typeof mixItem === "number") {
    outputArr[outputArr.length] = mixItem;
  }
}
console.log(outputArr);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];

let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//           {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//               user_id: 1, // <===
//               country: 'Ukraine',
//               city: 'Ternopil'
//             }
//           },
//           // TO BE CONTINUED .....
//         ]

console.log("------ 3.9 -------");
let usersWithCities = [];
for (const user of usersWithId) {
  for (const userId of citiesWithId) {
    if (user.id === userId.user_id) {
      let tempObj = {};
      for (const userIdKey in user) {
        tempObj[userIdKey] = user[userIdKey];
      }
      tempObj.address = userId;
      usersWithCities[usersWithCities.length] = tempObj;
    }
  }
}
console.log(`Original array 1:`, usersWithId);
console.log(`Original array 2:`, citiesWithId);
console.log(`Resulting array: `, usersWithCities);

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

console.log("------ 3.10 -------");
let numbersNew = [23, 23523, 68, 5262, 46, 77, 657675, 2423, 23424, 234234];
for (const number of numbersNew) {
  if (!(number % 2)) {
    console.log(number);
  }
}

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log("------ 3.11 -------");
let numbersNewCopy = [];
for (const element of numbersNew) {
  numbersNewCopy[numbersNewCopy.length] = element;
}
console.log(numbersNewCopy);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

console.log("------ 3.12 -------");
let letters = ["a", "b", "c"];
{
  let resultWord = "";
  for (let i = 0; i < letters.length; i++) {
    resultWord += letters[i];
  }
  console.log(resultWord);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

console.log("------ 3.13 -------");
{
  let resultWord = "";
  let i = 0;
  while (i < letters.length) {
    resultWord += letters[i];
    i++;
  }
  console.log(resultWord);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log("------ 3.14 -------");
{
  let resultWord = "";
  for (const letter of letters) {
    resultWord += letter;
  }
  console.log(resultWord);
}
