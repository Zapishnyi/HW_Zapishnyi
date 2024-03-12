// - Знайти та вивести довижину настипних стрінгових значень
let str = ["hello world", "lorem ipsum", "javascript is cool"];

console.log("--------1---------");
str.forEach((e, i) => console.log(`${str[i]} -> `, str[i].length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log("--------2---------");
str.forEach((e, i) => console.log(`${str[i]} -> `, str[i].toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення

console.log("--------3---------");
let str2 = ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"];
str2.forEach((e, i) => console.log(`${str2[i]} -> `, str2[i].toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log("--------4---------");
{
  let str = " dirty string   ";
  const clearStr = (str) =>
    str.startsWith(" ")
      ? clearStr(str.substring(1))
      : str.endsWith(" ")
        ? clearStr(str.substring(0, str.length - 1))
        : str;
  console.log(`"${str}" -> "${clearStr(str)}"`);
  console.log("---or---");
  console.log(`"${str}" -> "${str.trim()}"`);
}

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

console.log("--------5---------");
{
  let str = "Ревуть воли як ясла повні";
  const stringToArray = (str) => str.split(" ");
  console.log(`${str} ->`, stringToArray(str));
}

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

console.log("--------6---------");
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const numToStr = (numArr) => numArr.map((e) => "" + e);
console.log(numArr, numToStr(numArr));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
console.log("--------7---------");
let nums = [11, 21, 3];
const sortNums = (nums, sortDirection) =>
  nums.sort((a, b) => (sortDirection === "ascending" ? a - b : b - a));
console.log("ascending", sortNums(nums, "ascending"));
console.log("descending", sortNums(nums, "descending"));

// ==========================
// - є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

// -- відсортувати його за спаданням за monthDuration

console.log("--------8---------");
console.log(
  coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration),
);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log("--------9---------");
console.log(coursesAndDurationArray.filter((e) => e.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log("--------10---------");
console.log(coursesAndDurationArray.map((e, i) => ({ id: i + 1, ...e })));

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
console.log("--------11---------");
const base = {
  cardSuit: ["spade", "diamond", "heart", "club"],
  value: ["6", "7", "8", "9", "10", "ace", "jack", "queen", "king"],
};

// cards array creation from data provided
let cards = [].concat(
  ...base.cardSuit.map((suit) =>
    base.value.map((cardValue) => ({
      cardSuit: suit,
      value: cardValue,
      color: suit === "spade" || suit === "club" ? "black" : "red",
    })),
  ),
);
console.log(cards);

// - знайти піковий туз

console.log("--------11.1---------");
console.log(
  `піковий туз: index - ${cards.findIndex((e) => e.cardSuit === "spade" && e.value === "ace")}`,
  cards.find((e) => e.cardSuit === "spade" && e.value === "ace"),
);
console.log("--or--");
cards
  .filter((e) => e.cardSuit === "spade" && e.value === "ace")
  .forEach((e) => console.log(e));

//  - всі шістки

console.log("--------11.2---------");
cards.forEach((e, i) =>
  e.value === "6" ? console.log(e, ` : index = ${i}`) : null,
);
console.log("--or--");
cards.filter((e) => e.value === "6").forEach((e) => console.log(e));

//  - всі червоні карти

console.log("--------11.3---------");
cards.forEach((e, i) =>
  e.color === "red" ? console.log(e, ` : index = ${i}`) : null,
);
console.log("--or--");
cards.filter((e) => e.color === "red").forEach((e) => console.log(e));

//  - всі буби

console.log("--------11.4---------");
cards.forEach((e, i) =>
  e.cardSuit === "diamond" ? console.log(e, ` : index = ${i}`) : null,
);
console.log("--or--");
cards.filter((e) => e.cardSuit === "diamond").forEach((e) => console.log(e));

// - всі трефи від 9 та більше

console.log("--------11.5---------");
cards.forEach((e, i) =>
  e.cardSuit === "club" && !(e.value < 9)
    ? console.log(e, ` : index = ${i}`)
    : null,
);
console.log("--or--");
cards
  .filter((e) => e.cardSuit === "club" && !(e.value < 9))
  .forEach((e) => console.log(e));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log("--------11.6---------");
console.log(
  cards.reduce(
    (acc, e) => {
      acc[`${e.cardSuit}s`].push(e);
      return acc;
    },
    {
      spades: [],
      diamonds: [],
      hearts: [],
      clubs: [],
    },
  ),
);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

console.log("--------12---------");
let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

// --написати пошук всіх об'єктів, в який в modules є sass

console.log("--------12.1---------");
console.log(coursesArray.filter((e) => e.modules.includes("sass")));

// --написати пошук всіх об'єктів, в який в modules є docker

console.log("--------12.2---------");
console.log(coursesArray.filter((e) => e.modules.includes("docker")));
