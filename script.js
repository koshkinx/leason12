// Домашня робота до уроку 12,
//  реалізувати за домогою властивостей вивчених на уроці 12 а також властивостей подій вивчених в
//  попередніх уроках
//  - Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс еліпс. Якщо всі данні
//  введено і чекбокс чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс ненажатий
//   то кнопка також розблоковується і малюється прямокутник за заданими розмірами
// - створити інпут куди водиться значення і кнопку . Після введення значення ( цифрового )
// і натискання на кнопку малються кола за допомогою svg. При натисканні на намальованне коло
// воно повино видалятись.
//  - Створити функцію яка малює коло в канвасі і розміщує в середині кола текст
//  ***Додадткове завдання, створити функцію яка отримує массив данних, колір. І виводить графік на канвасі

const width = document.querySelector("#width");
const height = document.querySelector("#height");
const ellipse = document.querySelector("#ellipse");
const btn = document.querySelector(".btn");
const eva = document.querySelector(".eva");
const brawn = document.querySelector(".brawn");

width.addEventListener("input", ButtonED);
height.addEventListener("input", ButtonED);
function ButtonED() {
  if (width.value !== "" && height.value !== "") {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
ButtonED();

btn.addEventListener("click", function () {
  if (width.value !== "" && height.value !== "" && ellipse.checked == false) {
    brawn.setAttribute("width", width.value);
    brawn.setAttribute("height", height.value);
    brawn.style.opacity = "1";
  }
});
btn.addEventListener("click", function () {
  if (width.value !== "" && height.value !== "" && ellipse.checked == true) {
    eva.setAttribute("rx", width.value / 2);
    eva.setAttribute("ry", height.value / 2);
    eva.setAttribute("cx", width.value / 2);
    eva.setAttribute("cy", height.value / 2);

    eva.style.opacity = "1";
  }
});
btn.addEventListener("click", function () {
  if (ellipse.checked == true) {
    eva.style.opacity = "1";
  } else {
    eva.style.opacity = "0";
  }
});
btn.addEventListener("click", function () {
  if (ellipse.checked == false) {
    brawn.style.opacity = "1";
  } else {
    brawn.style.opacity = "0";
  }
});
//ДРУГЕ ЗАВДАННЯ-------------------------------------------------
const circle = document.querySelector(".circle");
const btnDiam = document.querySelector(".btnDiam");
const inputDiam = document.querySelector("#diam");
btnDiam.addEventListener("click", function () {
  circle.setAttribute("r", inputDiam.value);
  circle.style.opacity = "1";
});
circle.addEventListener("click", function () {
  circle.style.opacity = "0";
});
//третє ЗАВДАННЯ-------------------------------------------------
let textInCircle = document.querySelector("#textInCircle");
let btnTextCanvas = document.querySelector(".btnTextCanvas");
let btnCanvas = document.querySelector(".btnCanvas");
let clear = document.querySelector(".clear");
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

btnCanvas.addEventListener("click", function () {
  canvas.style.opacity = "1";
});

btnTextCanvas.addEventListener("click", function () {
  context.font = "48px serif";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeText(textInCircle.value, 80, 140);
});
clear.addEventListener("click", function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
