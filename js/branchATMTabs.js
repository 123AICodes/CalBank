const branchTab = document.querySelector(".branch-atm-btn:nth-child(1)"),
	atmTab = document.querySelector(".branch-atm-btn:nth-child(2)"),
	branchTabContainer = document.querySelector(".branches-tab-container .box:nth-child(1)"),
	atmTabContainer = document.querySelector(".branches-tab-container .box:nth-child(2)");

branchTab.onclick = () => {
	branchTab.classList.add('active');
	branchTabContainer.classList.add("show");
	atmTabContainer.classList.remove("show");
	atmTab.classList.remove("active");
}
atmTab.onclick = () => {
	atmTab.classList.add('active');
	branchTabContainer.classList.remove("show");
	atmTabContainer.classList.add("show");
	branchTab.classList.remove("active");
}

function toggleDropdown(button) {
	var dropdowns = document.querySelectorAll(".branches-tab-container .branch-dropdown");

	dropdowns.forEach(function (dropdown) {
		if (dropdown.contains(button)) {
			dropdown.classList.toggle("active");
		} else {
			dropdown.classList.remove("active");
		}
	});
}