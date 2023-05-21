/** ===========================TABS=========================== */
const mortageBtn = document.querySelector(".tabs-container .btn:nth-child(1)"),
	saveBtn = document.querySelector(".tabs-container .btn:nth-child(2)"),
	insuranceBtn = document.querySelector(".tabs-container .btn:nth-child(3)"),
	cooperateFinBtn = document.querySelector(".tabs-container .btn:nth-child(4)"),
	convinientBanBtn = document.querySelector(".tabs-container .btn:nth-child(5)"),

	mortageContainer = document.querySelector(".tabs-container .wrap:nth-child(1)"),
	saveContainer = document.querySelector(".tabs-container .wrap:nth-child(2)"),
	insuranceContainer = document.querySelector(".tabs-container .wrap:nth-child(3)"),
	cooperateFinContainer = document.querySelector(".tabs-container .wrap:nth-child(4)"),
	convinientBanContainer = document.querySelector(".tabs-container .wrap:nth-child(5)");

mortageBtn.onclick = () => {
	mortageBtn.classList.add("active");
	saveBtn.classList.remove("active");
	insuranceBtn.classList.remove("active");
	cooperateFinBtn.classList.remove("active");
	convinientBanBtn.classList.remove("active");

	mortageContainer.classList.add("active");
	saveContainer.classList.remove("active");
	insuranceContainer.classList.remove("active");
	cooperateFinContainer.classList.remove("active");
	convinientBanContainer.classList.remove("active");

}
saveBtn.onclick = () => {
	saveBtn.classList.add("active");
	mortageBtn.classList.remove("active");
	insuranceBtn.classList.remove("active");
	cooperateFinBtn.classList.remove("active");
	convinientBanBtn.classList.remove("active");

	saveContainer.classList.add("active");
	mortageContainer.classList.remove("active");
	insuranceContainer.classList.remove("active");
	cooperateFinContainer.classList.remove("active");
	convinientBanContainer.classList.remove("active");

}
insuranceBtn.onclick = () => {
	insuranceBtn.classList.add("active");
	mortageBtn.classList.remove("active");
	saveBtn.classList.remove("active");
	cooperateFinBtn.classList.remove("active");
	convinientBanBtn.classList.remove("active");

	insuranceContainer.classList.add("active");
	mortageContainer.classList.remove("active");
	saveContainer.classList.remove("active");
	cooperateFinContainer.classList.remove("active");
	convinientBanContainer.classList.remove("active");

}
cooperateFinBtn.onclick = () => {
	cooperateFinBtn.classList.add("active");
	mortageBtn.classList.remove("active");
	saveBtn.classList.remove("active");
	insuranceBtn.classList.remove("active");
	convinientBanBtn.classList.remove("active");

	cooperateFinContainer.classList.add("active");
	mortageContainer.classList.remove("active");
	saveContainer.classList.remove("active");
	insuranceContainer.classList.remove("active");
	convinientBanContainer.classList.remove("active");

}
convinientBanBtn.onclick = () => {
	convinientBanBtn.classList.add("active");
	mortageBtn.classList.remove("active");
	saveBtn.classList.remove("active");
	insuranceBtn.classList.remove("active");
	cooperateFinBtn.classList.remove("active");

	convinientBanContainer.classList.add("active");
	mortageContainer.classList.remove("active");
	saveContainer.classList.remove("active");
	insuranceContainer.classList.remove("active");
	cooperateFinContainer.classList.remove("active");

}