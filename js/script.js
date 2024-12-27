const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerIcon = document.querySelector(".burger-menu__icon");
const menu = document.querySelector(".menu")
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger-menu__icon-active");
	menu.classList.toggle("menu--open");
});