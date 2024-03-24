// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let elm = (tegName) => document.createElement(tegName);
let body = document.querySelector("body");

let fetchFoo = (lookUpItem) => {
  fetch(`https://dummyjson.com/${lookUpItem}`)
    .then((res) => res.json())
    .then((base) => {
      let exe = elm("p");
      exe.innerText = `----------------- Exercise  ${lookUpItem} ----------------`;
      body.appendChild(exe);
      let wrapper = elm("div");
      wrapper.classList.add("wrapper");
      body.appendChild(wrapper);
      base[lookUpItem].forEach((e) => {
        render(e, wrapper);
      });
    });
};
const render = (data, element) => {
  let dataWrap = elm("div");
  dataWrap.classList.add(`level`);
  element.appendChild(dataWrap);
  for (const detail in data) {
    let userDataItem = elm("div");
    let userDataKey = elm("span");
    dataWrap.appendChild(userDataItem);
    userDataKey.innerText = !isNaN(+detail)
      ? +detail + 1 + " - "
      : detail + " - ";
    if (detail !== "image" && detail !== "thumbnail") {
      userDataItem.appendChild(userDataKey);
    }
    if (detail === "ingredients") {
      let userDataValue = elm("span");
      let list = elm("usl");
      userDataValue.innerHTML = "&#10534";
      userDataItem.appendChild(userDataValue);
      userDataItem.appendChild(list);
      data[detail].forEach((e) => {
        let listItem = elm("li");
        listItem.innerText = e;
        list.appendChild(listItem);
      });
    } else if (typeof data[detail] === "object") {
      let userDataValue = elm("span");
      userDataValue.innerHTML = "&#10534";
      userDataItem.appendChild(userDataValue);
      render(data[detail], dataWrap);
    } else if (JSON.stringify(data[detail]).includes("http")) {
      let img = elm("img");
      img.src = data[detail];
      img.alt = "product image";
      userDataItem.appendChild(img);
    } else {
      let userDataValue = elm("span");
      userDataValue.innerText = data[detail];
      userDataItem.appendChild(userDataValue);
    }
  }
};

fetchFoo("carts");

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetchFoo("recipes");
