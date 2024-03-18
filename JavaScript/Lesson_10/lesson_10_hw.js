let body = document.querySelector("body");
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.write("---------------------------1----------------------------");
let formBox = document.createElement("form");
let inputName = document.createElement("input");
let inputSurname = document.createElement("input");
let inputAge = document.createElement("input");
let submitButton = document.createElement("button");
inputName.type = "text";
inputSurname.type = "text";
inputAge.type = "text";
formBox.classList.add("user_data_form");
inputName.placeholder = "Name";
inputSurname.placeholder = "Surname";
inputAge.placeholder = "Age";
submitButton.innerText = "Process data";
body.appendChild(formBox);
formBox.append(inputName, inputSurname, inputAge, submitButton);
formBox.onsubmit = function (event) {
  event.preventDefault();
  if (document.querySelector(".user_output")) {
    document.querySelector(".user_output").remove();
  }
  let outputBox = document.createElement("p");
  outputBox.classList.add("user_output");
  let uName = document.forms[0][0].value;
  let uSurname = document.forms[0][1].value;
  let uAge = document.forms[0][2].value;
  outputBox.innerText =
    uName && uSurname && uAge
      ? `Name: ${uName}   
        Surname: ${uSurname}
         Age: ${uAge}`
      : "Please fill all fields first";
  formBox.appendChild(outputBox);
};

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

document.write("---------------------------2----------------------------");
let loadCounterBox = document.createElement("div");
let counterLabel = document.createElement("p");
counterLabel.innerText = "Page re-load counter:";
let loadCounter = document.createElement("p");
let loadCounterReset = document.createElement("button");
loadCounterBox.classList.add("load_counter");
loadCounterReset.innerText = "Reset page re-load counter";
loadCounterBox.append(counterLabel, loadCounter, loadCounterReset);
loadCounter.innerText = +localStorage.getItem("counter") + 1;
localStorage.setItem("counter", loadCounter.innerText);
body.appendChild(loadCounterBox);
loadCounterReset.addEventListener("click", () => {
  localStorage.setItem("counter", "0");
  loadCounter.innerText = "0";
});

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
document.write("---------------------------3----------------------------<br>");
let sessionLink = document.createElement("a");
sessionLink.setAttribute("href", "./sessions.html");
sessionLink.innerText = "Sessions page >";
body.appendChild(sessionLink);
let sessionsHistory = JSON.parse(localStorage.getItem("sessions")) || [];
sessionsHistory.push({});
let sessionNumber = sessionsHistory.length - 1;
sessionsHistory[sessionNumber][document.readyState] = new Date();
document.addEventListener("readystatechange", function (event) {
  sessionsHistory[sessionNumber][document.readyState] = new Date();
});
document.addEventListener("DOMContentLoaded", function (event) {
  sessionsHistory[sessionNumber]["dom_content_loaded"] = new Date();
});
window.addEventListener("load", (event) => {
  sessionsHistory[sessionNumber]["page_fully_loaded"] = new Date();
});
sessionsHistory[sessionNumber]["mouse_over_the_page"] = [];
body.addEventListener("mouseenter", function (e) {
  sessionsHistory[sessionNumber]["mouse_over_the_page"].push(new Date());
});
sessionsHistory[sessionNumber]["mouse_left_the_page"] = [];
body.addEventListener("mouseleave", function (e) {
  sessionsHistory[sessionNumber]["mouse_left_the_page"].push(new Date());
});
window.addEventListener("unload", function (e) {
  sessionsHistory[sessionNumber]["session_closed"] = new Date();
  localStorage.setItem("sessions", JSON.stringify(sessionsHistory));
});

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
document.write("<br>---------------------------4----------------------------");
let objArray = [];
for (let i = 0; i < 100; i++) {
  objArray.push(`Object <br> ${i + 1}`);
}
let arraySlider = document.createElement("div");
arraySlider.classList.add("arr_slider");
body.appendChild(arraySlider);
let prevBtn = document.createElement("button");
let nextBtn = document.createElement("button");
let sliderBody = document.createElement("div");
prevBtn.classList.add("prev_btn");
nextBtn.classList.add("next_btn");
sliderBody.classList.add("slider_body");
prevBtn.innerText = "PREV";
nextBtn.innerText = "NEXT";
arraySlider.append(prevBtn, sliderBody, nextBtn);
let toShow = 0;
let render = (toShow, button) => {
  if (document.querySelector(".slide_wrap")) {
    document.querySelector(".slide_wrap").remove();
  }
  let slideWrap = document.createElement("div");
  slideWrap.classList.add("slide_wrap");
  sliderBody.appendChild(slideWrap);
  for (let i = toShow; i < toShow + 10; i++) {
    let slide = document.createElement("p");
    slide.innerHTML = objArray[i];
    slideWrap.appendChild(slide);
  }
  if (button) {
    setTimeout(() => button.classList.remove("warning"), 500);
  }
};
render(toShow, null);
prevBtn.addEventListener("click", function (e) {
  if (toShow === 0) {
    this.classList.add("warning");
    render(toShow, this);
  } else {
    toShow = toShow - 10;
    render(toShow, this);
  }
});
nextBtn.addEventListener("click", function (e) {
  if (toShow === 90) {
    this.classList.add("warning");
    render(toShow, this);
  } else {
    toShow = toShow + 10;
    render(toShow, this);
  }
});

//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
document.write("<br>---------------------------5----------------------------");
let exFiveBlock = document.createElement("div");
let magicBlock = document.createElement("div");
let buttonsBlock = document.createElement("div");
let toggleDiv = document.createElement("div");
let appearBtn = document.createElement("button");
let disappearBtn = document.createElement("button");
exFiveBlock.classList.add("axe_5");
magicBlock.classList.add("magic_block");
buttonsBlock.classList.add("buttons");
toggleDiv.setAttribute("id", "text");
appearBtn.innerText = "Appear";
disappearBtn.innerText = "Disappear";
body.appendChild(exFiveBlock);
exFiveBlock.append(magicBlock, buttonsBlock);
magicBlock.appendChild(toggleDiv);
buttonsBlock.append(appearBtn, disappearBtn);
appearBtn.addEventListener("click", () => {
  toggleDiv.classList.remove("disappear");
});
disappearBtn.addEventListener("click", () => {
  toggleDiv.classList.add("disappear");
});

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.write("---------------------------6----------------------------<br>");

let ageInput = document.createElement("input");
let checkBtn = document.createElement("button");
ageInput.setAttribute("type", "text");
ageInput.placeholder = "Please enter your age";
checkBtn.innerText = "Check User age";
body.append(ageInput, checkBtn);
checkBtn.addEventListener("click", () => {
  switch (true) {
    case ageInput.value && ageInput.value >= 18: {
      alert("Your age is appropriate");
      break;
    }
    case ageInput.value && ageInput.value < 18: {
      alert("Your age is below 18");
      break;
    }
    case !ageInput.value || isNaN(+ageInput.value): {
      alert("Please enter your age");
      break;
    }
  }
});

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

document.write(
  "<br>--------------------------7----------------------------<br>",
);
let exeSevenBlock = document.createElement("div");
let rowInput = document.createElement("input");
let columnInput = document.createElement("input");
let contentInput = document.createElement("input");
let tableCreateBtn = document.createElement("button");
// let outputTable = document.createElement("div");
// outputTable.classList.add("output_table");
exeSevenBlock.classList.add("exe_seven");
rowInput.placeholder = "Please enter row quantity";
columnInput.placeholder = "Please enter column quantity";
contentInput.placeholder = "Please enter content";
tableCreateBtn.innerText = "Create table";
body.appendChild(exeSevenBlock);
exeSevenBlock.append(rowInput, columnInput, contentInput, tableCreateBtn);

tableCreateBtn.addEventListener("click", () => {
  if (document.querySelector(".output_table")) {
    document.querySelector(".output_table").remove();
  }
  let rows = rowInput.value;
  let columns = columnInput.value;
  let content = contentInput.value;
  if (
    !isNaN(rowInput.value) &&
    !isNaN(columnInput.value) &&
    contentInput.value
  ) {
    let outputTable = document.createElement("div");
    outputTable.classList.add("output_table");
    for (let row_i = 0; row_i < rows; row_i++) {
      let rowDiv = document.createElement("div");
      outputTable.append(rowDiv);
      for (let col_i = 0; col_i < columns; col_i++) {
        let cell = document.createElement("div");
        cell.textContent = content;
        rowDiv.appendChild(cell);
      }
      exeSevenBlock.appendChild(outputTable);
      outputTable.appendChild(rowDiv);
    }
  } else {
    alert("Please enter valid table data");
  }
});

// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

document.write(
  "<br>--------------------------8----------------------------<br>",
);
let exeEightBlock = document.createElement("div");
let priceBlock = document.createElement("div");
let price = +localStorage.getItem("price") || 100;
exeEightBlock.classList.add("exe_eight");
priceBlock.innerText = `${price} UAH`;
body.appendChild(exeEightBlock);
exeEightBlock.appendChild(priceBlock);
let page_loaded;
let page_closed;
window.addEventListener("load", (event) => {
  page_loaded = new Date().getSeconds();
});
window.addEventListener("unload", function (e) {
  page_closed = new Date().getSeconds();
  if (page_closed - page_loaded > 10) {
    localStorage.setItem("price", price + 10);
  }
});
