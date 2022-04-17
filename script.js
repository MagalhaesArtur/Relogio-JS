const horas = document.querySelector(".ponteiro.horas");
const minutos = document.querySelector(".ponteiro.minutos");
const segundos = document.querySelector(".ponteiro.segundos");
const setRotation = (element, rotation) => {
  element.style.setProperty("--rotation", rotation * 360);
};

const date = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds() / 60;
  const minutes = currentDate.getMinutes() / 60;
  const hours = currentDate.getHours() / 12;

  setRotation(horas, hours);
  setRotation(minutos, minutes);
  setRotation(segundos, seconds);
};

setInterval(date, 1000);
// Dark Mode
const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");
const body = document.querySelector("body");
const relogio = document.querySelector(".relogio");
const mainContainer = document.querySelector(".container");
const divNumber = document.querySelectorAll(".div.number");
const title = document.querySelector(".default");

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    title.classList.remove("default");
    title.classList.add("defaultDark");

    relogio.classList.remove("relogio");
    relogio.classList.add("relogioDark");

    mainContainer.classList.remove("container");
    mainContainer.classList.add("containerDark");

    for (c of divNumber) {
      c.style.setProperty("--numberColor", "rgb(34, 34, 34)");
    }
    mainContainer.style.setProperty("--bgContainer", "#222");

    body.style.setProperty("--bg", " circle, #5d5d5e 0%, #232526 100%");
  } else {
    title.classList.remove("defaultDark");
    title.classList.add("default");

    relogio.classList.remove("relogioDark");
    relogio.classList.add("relogio");

    mainContainer.classList.remove("containerDark");
    mainContainer.classList.add("container");

    body.style.setProperty(
      "--bg",
      "circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%"
    );
    relogio.style.setProperty("--bgClock", "rgba(31, 28, 28, 0.959");
    relogio.style.setProperty("--pointerColor", "#eee");
    for (c of divNumber) {
      c.style.setProperty("--numberColor", "#eee");
    }
    mainContainer.style.setProperty("--bgContainer", "rgb(226, 219, 219)");
  }
});
