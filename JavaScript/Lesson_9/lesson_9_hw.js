let body = document.querySelector("body");

// - створити блок,

document.write("-------------1-------------");
let wrapper = document.createElement("div");
wrapper.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores debitis, dolorem earum eligendi et in libero, nisi odio quisquam repellendus rerum sapiente totam.";

//     - додати йому класи wrap, collapse, alpha, beta

wrapper.classList.add("wrap", "collapse", "alpha", "beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

wrapper.style.cssText =
  "background:#9595e7; color:#e7dc95; font-size:25px;margin:10px; padding:10px;";

// - додати цей блок в body.

body.appendChild(wrapper);

// - клонувати його повністю, та додати клон в body.

document.write("-------------2-------------");
let wrapperClone = wrapper.cloneNode(true);
body.appendChild(wrapperClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

document.write("-------------3-------------");
const navList = ["Main", "Products", "About us", "Contacts"];
let ul = document.createElement("ul");
body.appendChild(ul);
navList.forEach((e) => {
  let li = document.createElement("li");
  li.innerText = e;
  ul.appendChild(li);
});

// - Є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

document.write("-------------4-------------");
for (const course of coursesAndDurationArray) {
  let courseCard = document.createElement("div");
  let title = document.createElement("h3");
  let courseDuration = document.createElement("p");
  courseCard.classList.add("courseCard");
  title.innerText = `Course name - ${course.title}`;
  courseDuration.innerText = `Course duration - ${course.monthDuration} months`;
  body.appendChild(courseCard);
  courseCard.append(title, courseDuration);
}

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

document.write("-------------5-------------");
coursesAndDurationArray.forEach((e) => {
  let courseCard = document.createElement("div");
  let title = document.createElement("h1");
  let courseDuration = document.createElement("p");
  courseCard.classList.add("item");
  title.classList.add("heading");
  title.innerText = e.title;
  courseDuration.classList.add("description");
  courseDuration.innerText = `Course duration - ${e.monthDuration} months`;
  body.appendChild(courseCard);
  courseCard.append(title, courseDuration);
});

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
  {
    name: "Bart",
    surname: "Simpson",
    age: 10,
    info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
    photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png",
  },
  {
    name: "Homer",
    surname: "Simpson",
    age: 40,
    info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
    photo:
      "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  },
  {
    name: "Marge",
    surname: "Simpson",
    age: 38,
    info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
    photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png",
  },
  {
    name: "Lisa",
    surname: "Simpson",
    age: 9,
    info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
    photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png",
  },
  {
    name: "Maggie",
    surname: "Simpson",
    age: 1,
    info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.",
    photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
  },
];

document.write("-------------6-------------");

let simpsonsWrapper = document.createElement("div");
simpsonsWrapper.classList.add("simpson_wrapper");
body.appendChild(simpsonsWrapper);
simpsons.forEach((e) => {
  let characterCard = document.createElement("div");
  let characterCardHead = document.createElement("div");
  let memberLeft = document.createElement("div");
  let memberName = document.createElement("h2");
  let memberAge = document.createElement("p");
  let memberInfo = document.createElement("p");
  let memberRight = document.createElement("div");
  let memberImg = document.createElement("img");
  characterCard.classList.add("member");
  characterCardHead.classList.add("member__head");
  memberLeft.classList.add("member__left");
  memberName.classList.add("member_name");
  memberName.innerText = `${e.name} ${e.surname}`;
  memberAge.classList.add("member_age");
  memberAge.innerText = `Вік: ${e.age} р.`;
  memberInfo.classList.add("member_info");
  memberInfo.innerText = `${e.info}`;
  memberRight.classList.add("member__right");
  memberImg.classList.add("member_img");
  memberImg.alt = `${e.name} ${e.surname} image`;
  memberImg.src = e.photo;
  characterCard.append(characterCardHead, memberInfo);
  characterCardHead.append(memberLeft, memberRight);
  memberLeft.append(memberName, memberAge);
  memberRight.appendChild(memberImg);
  simpsonsWrapper.appendChild(characterCard);
});
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
document.write("-------------7-------------");
let coursesBlock = document.createElement("div");
coursesBlock.classList.add("courses_wrapper");
body.appendChild(coursesBlock);
coursesArray.forEach((e) => {
  let courseCard = document.createElement("div");
  let courseTitle = document.createElement("h2");
  let duration = document.createElement("div");
  let durationMonth = document.createElement("p");
  let durationHours = document.createElement("p");
  let modulesTitle = document.createElement("p");
  let modulesBlock = document.createElement("ul");
  courseCard.classList.add("card__course");
  courseTitle.classList.add("course__title");
  courseTitle.innerText = e.title;
  duration.classList.add("course__duration");
  durationMonth.classList.add("duration_month");
  durationMonth.innerText = `Duration - ${e.monthDuration} months. `;
  durationHours.classList.add("duration_hours");
  durationHours.innerText = `   ${e.hourDuration} learning hrs. `;
  modulesTitle.classList.add("course__modules");
  modulesTitle.innerText = "Modules in course:";
  coursesBlock.appendChild(courseCard);
  courseCard.append(courseTitle, duration, modulesTitle, modulesBlock);
  duration.append(durationMonth, durationHours);
  e.modules.forEach((module) => {
    let moduleItem = document.createElement("li");
    moduleItem.innerText = module;
    modulesBlock.appendChild(moduleItem);
  });
});

document.write(
  "-------------8-------------   Recorded solution for last assignment ",
);
