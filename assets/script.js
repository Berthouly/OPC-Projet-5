const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Ajout Dots Slider

const dotContainer = document.querySelector('.dots');
for (i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotContainer.appendChild(dot);
}

//Carousel

const imgPath = './assets/images/slideshow/';
const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerTxt = document.querySelector('.banner-txt');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
dots[currentSlide].classList.add('dot_selected');

nextArrow.addEventListener('click', () => {
	dots[currentSlide].classList.remove('dot_selected');
	currentSlide++;
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	bannerImg.src = imgPath + slides[currentSlide].image;
	bannerTxt.innerHTML = slides[currentSlide].tagLine;
	dots[currentSlide].classList.add('dot_selected');
});

prevArrow.addEventListener('click', () => {
	dots[currentSlide].classList.remove('dot_selected');
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	bannerImg.src = imgPath + slides[currentSlide].image;
	bannerTxt.innerHTML = slides[currentSlide].tagLine;
	dots[currentSlide].classList.add('dot_selected');
}) 

