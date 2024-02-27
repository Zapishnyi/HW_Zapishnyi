// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let strangeArray = [
    34, 62, 22165, 223, "2343", "24231", "avrraev", "avrverv", "avrrevav", "arevrvv", "avrevvrrv", "arveevrvarer", 345345, 656565, 2323423, 2343224, 234234234, true, true, false, true, false];
for (let strangeArrayElement of strangeArray) {
    console.log(strangeArrayElement)
}

for (let i = 0; i < strangeArray.length; i++) {
    console.log(strangeArray[i])
}
{
    i = 0
    while (i < 0) {
        console.log(strangeArray[i])
        i++
    }
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = []
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
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while
{
    i = 0
    while (i < numbers.length) {
        console.log(numbers[i]);
        i++
    }
}
//     2. перебрати його циклом for
for (const number of numbers) {
    console.log(number)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
{
    i = 1
    while (i < numbers.length) {
        console.log(numbers[i])
        i = i + 2;
    }
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < numbers.length; i = i + 2) {
    console.log(numbers[i])
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
{
    i = 2
    while (i < numbers.length) {
        console.log(numbers[i])
        i = i + 2;
    }
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 2; i < numbers.length; i = i + 2) {
    console.log(numbers[i])
}
// 7. замінити кожне число кратне 3 на слово "okten"
let numbers2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = 0; i < numbers2.length; i++) {
    if (!(numbers2[i] % 3)) {
        numbers2[i] = "okten"
    }
}
console.log(numbers2)
// 8. вивести масив в зворотньому порядку.
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while
{
    i = numbers.length - 1
    while (i >= 0) {
        console.log(numbers[i]);
        i--;
    }
}
//     2. перебрати його циклом for
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
{
    i = numbers.length - 1
    while (i >= 0) {
        if (i % 2) {
            console.log(numbers[i])
        }
        i--
    }
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = numbers.length - 1; i >= 0; i--) {
    if (i % 2) {
        console.log(numbers[i])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
{
    i = numbers.length - 1
    while (i >= 0) {
        if (!(i % 2)) {
            console.log(numbers[i])
        }
        i--;
    }
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = numbers.length - 1; i >= 0; i--) {
    if (!(i % 2)) {
        console.log(numbers[i])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
let numbers3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = numbers3.length; i >= 0; i--) {
    if (!(numbers3[i] % 3)) {
        numbers3[i] = "okten"
    }
}
console.log(numbers3)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers10 = []
for (let i = 0; i < 10; i++) {
    numbers10[i] = 23432423 + i;
}
for (const numbers10Element of numbers10) {
    console.log(numbers10Element)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings10 = []
for (let i = 0; i < 10; i++) {
    strings10[i] = "23432423" + i;
}
for (const strings10Element of strings10) {
    console.log(strings10Element)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let any10 = ["fwefw", true, undefined, NaN, 34, false, 2131n, null, 234234, 0]
for (const any10Element of any10) {
    console.log(any10Element)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixArray1 = [3423, "sefsef", true, "aafsdad", 34234, false, 234324, true, "true", false]
for (const mixArray1Element of mixArray1) {
    if (typeof (mixArray1Element) === "boolean") {
        console.log(mixArray1Element)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const mixArray1Element of mixArray1) {
    if (typeof (mixArray1Element) === "number") {
        console.log(mixArray1Element)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const mixArray1Element of mixArray1) {
    if (typeof (mixArray1Element) === "string") {
        console.log(mixArray1Element)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mixArray2 = []
mixArray2 [0] = "awffwawfawf"
mixArray2 [1] = 234342
mixArray2 [2] = true
mixArray2 [3] = null
mixArray2 [4] = "adfafwfaf"
mixArray2 [5] = "234244"
mixArray2 [6] = false
mixArray2 [7] = 61161511
mixArray2 [8] = 0
mixArray2 [9] = "adddwadwad"
for (let i = 0; i < 10; i++) {
    console.log(mixArray2[i]);

}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
{
    i = 0
    while (i < 10) {
        console.log(`Index = ${i}`)
        document.write(`<p>Index = ${i}</p>`)
        i++;
    }
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
