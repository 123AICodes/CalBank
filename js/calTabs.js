const salaryTab = document.querySelector(".tools-cal-btn:nth-child(1)"),
	snapTab = document.querySelector(".tools-cal-btn:nth-child(2)"),
	salaryTabContainer = document.querySelector(".tools-and-calculators .box:nth-child(1)"),
	snapTabContainer = document.querySelector(".tools-and-calculators .box:nth-child(2)");

salaryTab.onclick = () => {
	salaryTab.classList.add('active');
	snapTab.classList.remove("active");
	salaryTabContainer.classList.add("show");
	snapTabContainer.classList.remove("show");
}
snapTab.onclick = () => {
	snapTab.classList.add('active');
	salaryTab.classList.remove("active");

	salaryTabContainer.classList.remove("show");
	snapTabContainer.classList.add("show");
}
