let links = document.links;
let go = document.getElementById("sb_form_go");
let keywords = [
	"Интернет-магазин косметики",
	"косметика",
	"парфюмерия",
];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];
let nextBtn = document.querySelector(".sb_pagN_bp");

let bgPhoto = document.getElementById("preloadBg");

if (location.href === "https://www.bing.com/") {
	let i = 0;

	let timerId = setInterval(() => {
		bingInput.value += keyword[i];
		i++;
		if (i == keyword.length) {
			clearInterval(timerId);
			setTimeout(() => {
				go.click();
			}, getRandom(1000, 2500));
		}
	}, 500);
} else if (location.hostname == "sephora.ru") {
	console.log("Мы на целевом сайте!");

	setInterval(() => {
		let index = getRandom(0, links.length);

		if (getRandom(0, 101) > 70) {
			location.href = "https://www.bing.com/";
		}

		if (links[index].href.indexOf("sephora.ru") !== -1) {
			links[index].click();
		}
	}, getRandom(4000, 5000));
} else {
	let nextBingPage = true;

	for (let i = 0; i < links.length; i++) {
		if (links[i].href.indexOf("sephora.ru") !== -1) {
			console.log("Нашел строку " + links[i]);
			let link = links[i];
			link.click();
			nextGooglePage = false;
			setTimeout(() => {
				link.click();
			}, getRandom(3500, 4500));
			break;
		}
	}

	if (document.querySelector(".sb_pagS_bp").innerText == "4") {
		nextBingPage = false;
		location.href = "https://www.bing.com/";
	}

	if (nextBingPage) {
		setTimeout(() => {
			nextBtn.click();
		}, getRandom(3000, 5000));
	}
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
