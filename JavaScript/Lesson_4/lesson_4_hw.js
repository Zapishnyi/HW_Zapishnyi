// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

console.log("----------1---------");

function rectangleArea(a, b) {
  return a * b;
}

console.log(rectangleArea(47, 54));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

console.log("----------2---------");

function circleArea(r) {
  return +(Math.PI * Math.pow(r, 2)).toFixed(2);
}

console.log(circleArea(34));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log("----------3---------");

function cylinderArea(h, r) {
  return +(2 * Math.PI * h + 2 * Math.PI * Math.pow(r, 2)).toFixed(2);
}

console.log(cylinderArea(15, 25));

// - створити функцію яка приймає масив та виводить кожен його елемент

console.log("----------4---------");

function extractArrayItem(array) {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

extractArrayItem([2322, "423423", true, null, "fsrgfreg", 456, false]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write("----------5---------");

function paragraphCreate(text) {
  document.write(`<p>${text}</p>`);
}

paragraphCreate("tesfasefasefasefeaffasext");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write("----------6---------");

function listCreate(text) {
  document.write(`<ul>`);
  for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}

listCreate("List Item 4578");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write("----------7---------");

function listCreateCustom(text, t) {
  document.write(`<ul>`);
  for (let i = 0; i < t; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}

listCreateCustom("List Item 4578", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write("----------8---------");

function arrayToList(customArray) {
  document.write(`<ul>`);
  for (const item of customArray) {
    document.write(`<li>${item}</li>`);
  }
  document.write(`</ul>`);
}

arrayToList([2322, "423423", true, null, "fsrgfreg", 456, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
  { id: 1, name: "vasya", age: 31 },
  { id: 2, name: "petya", age: 30 },
  { id: 3, name: "kolya", age: 29 },
  { id: 4, name: "olya", age: 28 },
  { id: 5, name: "max", age: 30 },
  { id: 6, name: "anya", age: 31 },
  { id: 7, name: "oleg", age: 28 },
  { id: 8, name: "andrey", age: 29 },
  { id: 9, name: "masha", age: 30 },
  { id: 10, name: "olya", age: 31 },
  { id: 11, name: "max", age: 31 },
];
document.write("----------9---------");

function usersToDocument(userArray) {
  for (const userArrayElement of userArray) {
    document.write("<p>");
    for (const userArrayElementKey in userArrayElement) {
      document.write(
        `&nbsp   ${userArrayElementKey} : ${userArrayElement[userArrayElementKey]}  &nbsp `,
      );
    }
    document.write("</p>");
  }
}

usersToDocument(users);

// - створити функцію яка повертає найменьше число з масиву

console.log("----------10---------");

function minNumber(numArr) {
  let min = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (min > numArr[i]) {
      min = numArr[i];
    }
  }
  return min;
}

console.log(minNumber([2, 3, 45, 6, 76, -5, 23, 7, 89, 0, -4]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

console.log("----------11---------");

function sumAllArrItems(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
}

console.log(sumAllArrItems([3, 5, 7, 8, 9, 0, 3, 425, 66]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log("----------12---------");

function swap(arr, index1, index2) {
  let outputArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (i) {
      case index1:
        outputArray.push(arr[index2]);
        break;
      case index2:
        outputArray.push(arr[index1]);
        break;
      default:
        outputArray.push(arr[i]);
    }
  }
  return outputArray;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log("----------13---------");

function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (const currencyValuesItem of currencyValues) {
    if (currencyValuesItem.currency === exchangeCurrency) {
      return sumUAH / currencyValuesItem.value;
    }
  }
}

console.log(
  exchange(
    10000,
    [
      { currency: "USD", value: 40 },
      { currency: "EUR", value: 42 },
    ],
    "USD",
  ),
);
