// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Tatiana Maslenkina
// @match       https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sb_form_q = document.getElementById("sb_form_q");
let go = document.getElementById("sb_form_go");
let keywords = [
	"Интернет-магазин косметики и парфюмерии",
	"магазин косметики",
	"косметика, парфюмерия",
];
let keyword = keywords[getRandom(0, keywords.length)];

document.getElementsByName("q")[0].value = keyword;
go.click();
let cites = document.querySelectorAll("a");
let citesArr = Array.from(cites);
citesArr.forEach((cite) => {
	if (cite.href == "https://sephora.ru/") {
		document.location.href = cite.href;
		console.log("Нашел строку" + cite.text);
	}
});

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
