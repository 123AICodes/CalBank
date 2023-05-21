/** ===========================DROPDOWNS=========================== */
const allProductsBtn = document.querySelector(".navbar .nav-item.all-products"),
	aboutBtn = document.querySelector(".navbar .nav-item.about-us"),
	allProductDropdown = document.querySelector(".mega-dropdown.all-products"),
	aboutDropdown = document.querySelector(".mega-dropdown.about-us");
var closeMegaBtn = document.querySelector(".close-mega-btn");

allProductsBtn.onclick = () => {
	allProductDropdown.classList.add("appear");
	aboutDropdown.classList.remove("appear");
}
aboutBtn.onclick = () => {
	aboutDropdown.classList.toggle("appear");
	allProductDropdown.classList.remove("appear");
}


/** ===========================ALL PRODUCTS BUTTON AND CONTAINERS=========================== */
const openPersonalBtn = document.querySelector(".all-products-btn:nth-child(1)"),
	openBusinessBtn = document.querySelector(".all-products-btn:nth-child(2)"),
	openCorperateBtn = document.querySelector(".all-products-btn:nth-child(3)"),
	personalContainer = document.querySelector(".mega-dropdown .box.all-products"),
	businessContainer = document.querySelector(".mega-dropdown .box.business-banking"),
	corperateContainer = document.querySelector(".mega-dropdown .box.corperate-banking");
openPersonalBtn.onclick = () => {
	openPersonalBtn.classList.add("active");
	openBusinessBtn.classList.remove("active");
	openCorperateBtn.classList.remove("active");
	personalContainer.classList.add("active");
	businessContainer.classList.remove("active");
	corperateContainer.classList.remove("active");
}
openBusinessBtn.onclick = () => {
	openBusinessBtn.classList.add("active");
	openPersonalBtn.classList.remove("active");
	openCorperateBtn.classList.remove("active");
	businessContainer.classList.add("active");
	personalContainer.classList.remove("active");
	corperateContainer.classList.remove("active");
}
openCorperateBtn.onclick = () => {
	openCorperateBtn.classList.add("active");
	openBusinessBtn.classList.remove("active");
	openPersonalBtn.classList.remove("active");
	corperateContainer.classList.add("active");
	personalContainer.classList.remove("active");
	businessContainer.classList.remove("active");
}

/** ===========================COOPERATE BUTTONS=========================== */
const overviewBtn = document.querySelector(".corperate-btn:nth-child(1)"),
	accountSolBtn = document.querySelector(".corperate-btn:nth-child(2)"),
	convinientBtn = document.querySelector(".corperate-btn:nth-child(3)"),
	overviewWrapper = document.querySelector(".box.corperate-banking  #overview"),
	accountSolWrapper = document.querySelector(".box.corperate-banking #accountSol"),
	convinientWrapper = document.querySelector(".box.corperate-banking  #convinient");

overviewBtn.onclick = () => {
	overviewBtn.classList.add("active");
	accountSolBtn.classList.remove("active");
	convinientBtn.classList.remove("active");
	overviewWrapper.classList.add("show");
	accountSolWrapper.classList.remove("show");
	convinientWrapper.classList.remove("show");
}
accountSolBtn.onclick = () => {
	accountSolBtn.classList.add("active");
	overviewBtn.classList.remove("active");
	convinientBtn.classList.remove("active");
	accountSolWrapper.classList.add("show");
	overviewWrapper.classList.remove("show");
	convinientWrapper.classList.remove("show");
}
convinientBtn.onclick = () => {
	convinientBtn.classList.add("active");
	overviewBtn.classList.remove("active");
	accountSolBtn.classList.remove("active");
	convinientWrapper.classList.add("show");
	accountSolWrapper.classList.remove("show");
	overviewWrapper.classList.remove("show");
}

const header = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
	header.classList.toggle("scrollFix", window.scrollY > 10);
	document.querySelector(".gotop").classList.toggle("active", window.scrollY > 10);
})
window.addEventListener("scroll", () => {
	document.querySelector(".abouttop").classList.toggle("active", window.scrollY > 10);
})

/** ===========================HUMBERGER MENU=========================== */
const humberger = document.querySelector(".humberger"),
	navbar = document.querySelector("header .navbar");
humberger.onclick = () => {
	humberger.classList.toggle("active");
	navbar.classList.toggle("active");
}


function toggleDropdown(button) {
	var dropdowns = document.querySelectorAll(".rates-container .dropdown");

	dropdowns.forEach(function (dropdown) {
		if (dropdown.contains(button)) {
			dropdown.classList.toggle("active");
		} else {
			dropdown.classList.remove("active");
		}
	});
}


var swiper = new Swiper(".text-slider", {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	autoplay: {
		delay: 9000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
})

AOS.init({
	duration: 1200
})