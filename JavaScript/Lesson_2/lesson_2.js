// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log("-------------1--------------");
let array = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
console.log("-------------2--------------");
let book1 = {
  title: "Silo",
  pageCount: 450,
  genre: "Science fiction",
};
let book2 = {
  title: "1984",
  pageCount: 352,
  genre: "Social science fiction",
};
let book3 = {
  title: "The Financier",
  pageCount: 420,
  genre: "Fiction",
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
console.log("-------------3--------------");
let book21 = {
  title: "Beautiful story",
  pageCount: 360,
  genre: "Thriller",
  authors: [
    {
      name: "John",
      age: 40,
    },
    {
      name: "Johan",
      age: 35,
    },
  ],
};
let book22 = {
  title: "Sad story",
  pageCount: 600,
  genre: "Fiction",
  authors: [
    {
      name: "Tomas",
      age: 28,
    },
    {
      name: "Man",
      age: 60,
    },
  ],
};
let book23 = {
  title: "Interesting story",
  pageCount: 50,
  genre: "Novel",
  authors: [
    {
      name: "James",
      age: 41,
    },
    {
      name: "Katrine",
      age: 26,
    },
  ],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log("-------------4--------------");
let usersArray = [
  {
    name: "Tomas",
    username: "Tomatino",
    password: "Grsf736922",
  },
  {
    name: "James",
    username: "trash",
    password: "sgrgsrgsg324324",
  },
  {
    name: "Tomas",
    username: "Tomatino",
    password: "Grsf736922",
  },
  {
    name: "Karl",
    username: "Pomidorchik",
    password: "Gsfsef378",
  },
  {
    name: "Sergiy",
    username: "Butcher",
    password: "Jely83942",
  },
  {
    name: "James",
    username: "Junior",
    password: "Try3818313",
  },
  {
    name: "Trevis",
    username: "Potato_guy",
    password: "REfsefes7@",
  },
  {
    name: "Jasper",
    username: "Clown",
    password: "Dry3434$",
  },
  {
    name: "Berimor",
    username: "Your_servant",
    password: "Safety79",
  },
  {
    name: "Kolya",
    username: "I_m_absent_today",
    password: "Graf9797",
  },
];
console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log("-------------5--------------");
{
  let x = 1;
  if (x !== 0) {
    console.log(`x = ${x} - Вірно`);
  } else {
    console.log(`x = ${x} - Невірно`);
  }
}
{
  let x = 0;
  if (x !== 0) {
    console.log(`x = ${x} - Вірно`);
  } else {
    console.log(`x = ${x} - Невірно`);
  }
}
{
  let x = -3;
  if (x !== 0) {
    console.log(`x = ${x} - Вірно`);
  } else {
    console.log(`x = ${x} - Невірно`);
  }
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log("-------------6--------------");
let time = 20;
switch (true) {
  case 1 <= time && time <= 15:
    console.log(`${time} min is within the first quarter of hour.`);
    break;
  case 16 <= time && time <= 30:
    console.log(`${time} min is within the second quarter of hour.`);
    break;
  case 31 <= time && time <= 45:
    console.log(`${time} min is within the third quarter of hour.`);
    break;
  case 46 <= time && time <= 60:
    console.log(`${time} min is within the fourth quarter of hour.`);
    break;
  default:
    console.log("Data you entered is out of range");
}

// Alternative:
let quarters = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
};
console.log(
  `${time} min is within the ${quarters[Math.ceil(time / 15)]} quarter of hour.`,
);

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log("-------------7--------------");
let day = 22;
if (1 <= day && day <= 11) {
  console.log(`${day} is within first decade of the month`);
} else if (12 <= day && day <= 21) {
  console.log(`${day} is within second decade of the month`);
} else if (22 <= day && day <= 31) {
  console.log(`${day} is within third decade of the month`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// "-------------8--------------"
let dayNumber;
let dayName;
let wrapper = document.createElement("div");
document.querySelector(".wrapper").appendChild(wrapper);
let label = document.createElement("label");
label.textContent = "7: Please enter number of week's day";
let input = document.createElement("input");
let dayNameOutput = document.createElement("p");
dayNameOutput.innerText = "?";
label.append(input, dayNameOutput);
let button = document.createElement("button");
button.textContent = "Click to know name of the week's day";
wrapper.append(label, button);
button.onclick = () => {
  console.log("-------------8--------------");
  dayNumber = input.value;
  switch (+dayNumber) {
    case 1:
      {
        dayName = "Monday";
      }
      break;
    case 2:
      {
        dayName = "Tuesday";
      }
      break;
    case 3:
      {
        dayName = "Wednesday";
      }
      break;
    case 4:
      {
        dayName = "Thursday";
      }
      break;
    case 5:
      {
        dayName = "Friday";
      }
      break;
    case 6:
      {
        dayName = "Saturday";
      }
      break;
    case 7:
      {
        dayName = "Sunday";
      }
      break;
    default:
      dayName = "Your data is out of range";
  }
  console.log(dayName);
  dayNameOutput.innerText = dayName;
};

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// "-------------9--------------"
let headMessage = document.createElement("p");
headMessage.innerText = "9: Please enter figures to compare";
let compareBox = document.createElement("div");
let compareInput = document.createElement("div");
let compareButtonContainer = document.createElement("div");
let compareButton = document.createElement("button");
compareButton.innerText = "Compare";
document.querySelector(".wrapper").appendChild(compareBox);
compareBox.append(headMessage, compareInput, compareButtonContainer);
let input1 = document.createElement("input");
let compareResult = document.createElement("p");
compareResult.innerHTML = "?";
let input2 = document.createElement("input");
compareInput.append(input1, compareResult, input2);
compareButtonContainer.appendChild(compareButton);
let outputConsole;
compareButton.onclick = () => {
  console.log("-------------9--------------");
  let figure1 = +input1.value;
  let figure2 = +input2.value;
  if (figure1 > figure2) {
    outputConsole = figure1;
    compareResult.innerText = " > ";
  } else if (figure1 < figure2) {
    outputConsole = figure2;
    compareResult.innerText = " < ";
  } else if (figure1 === figure2) {
    outputConsole = "Numbers are equal";
    compareResult.innerText = " = ";
  } else {
    outputConsole = "Entered data are not comparable";
    compareResult.innerText = "?";
  }
  console.log(outputConsole);
};

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
console.log("-------------10--------------");
{
  let x = 0;
  x = x || "default";
  console.log(x);
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log("-------------11--------------");
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
if (coursesAndDurationArray[0].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[0].title} - Super`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[1].title} - Super`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[2].title} - Super`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[3].title} - Super`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[4].title} - Super`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log(`${coursesAndDurationArray[5].title} - Super`);
}
