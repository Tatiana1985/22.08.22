// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==


let sites = {
  "napli.ru": [
    "Взаимодействие PHP и MySQL",
    "10 самых популярных шрифтов от Google",
    "Отключение редакций и ревизий в WordPress",
    "Плагины VS Сode",
  ],
  "kiteuniverse.ru": ["Шоу воздушных змеев", "Kite Universe", "красота, грация, интеллект"],
  "motoreforma.com": ["мотореформа", "прошивка для CAN-AM", "тюнинг Maverick X3"],
};
let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];
let googleInput = document.getElementsByName("q")[0];

if (btnK !== undefined) {
  document.cookie = `site=${site}`;
} else if (location.hostname == "www.google.com") {
  site = getCookie("site");
} else {
  site = location.hostname;
}

if (btnK !== undefined) {
  let i = 0;

  let timerId = setInterval(() => {
    googleInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);

      setTimeout(()=>{
        btnK.click();
      }, getRandom(200, 500));

    }
  }, 300);

} else if (location.hostname == site) {
  console.log("Мы на целевом сайте!");

  setInterval(() => {
    let index = getRandom(0, links.length);

    if (getRandom(0, 101) > 70) {
      location.href = "https://www.google.com/";
    } else if (links[index].href.indexOf(site) !== -1) {
      links[index].click();
    }
  }, getRandom(3000, 5000));

} else {
  let nextGooglePage = true;

  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes(site)) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextGooglePage = false;
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 4000));
      break;
    }
  }
  let elementExist = setInterval(() => {
    let elm = document.querySelector(".YyVfkd");
    if (elm!=null) {

      if (elm.innerText == "4") {
        nextGooglePage = false;
        location.href = "https://www.google.com/";
      }

      clearInterval(elementExist);
    }
  }, 100);


  if (nextGooglePage) {
    setTimeout(() => {
      pnnext.click();
    }, getRandom(3000, 5000));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
