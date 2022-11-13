let slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let carousel_items = document.getElementsByClassName("carousel-items");
	let dots = document.getElementsByClassName("dot");
	if (n > carousel_items.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = carousel_items.length
	}
	for (let i = 0; i < carousel_items.length; i++) {
		carousel_items[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	carousel_items[slideIndex-1].style.display = "grid";
	dots[slideIndex-1].className += " active";
}

function loadHandler(){
	showSlides(slideIndex);

	const prev = document.getElementById("prev");
	const next = document.getElementById("next");

	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");

	prev.addEventListener("click", () => {
		return plusSlides(-1);
	}
	);
	next.addEventListener("click", () => {
		return plusSlides(1);
	}
	);

	btn1.addEventListener("click", () => {
		return currentSlide(1);
	}
	);
	btn2.addEventListener("click", () => {
		return currentSlide(2);
	}
	);
	btn3.addEventListener("click", () => {
		return currentSlide(3);
	}
	);
}

window.addEventListener("load", loadHandler)