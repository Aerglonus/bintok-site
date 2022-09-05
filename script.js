function webhook() {
	const request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://discord.com/api/webhooks/1016210194235134022/jZ7btCEtQGhkyBCtrEBnwVF1s4Q0Fp85Krrh54HR6JPtIWvbJmL-O8YVa3ZyDhm2m2-8",
	);
	request.setRequestHeader("Content-type", "application/json");
	const params = {
		username: "ANONYMOUS",
		avatar_url: "",
		content: "she read it",
	};
	request.send(JSON.stringify(params));

	console.log("Discord webhook activated");
}

function waitBeforeNavigate(ev) {
	ev.preventDefault(); // prevent default anchor behavior
	const goTo = this.getAttribute("href"); // store anchor href

	// do something while timeOut ticks ...

	setTimeout(function () {
		window.location = goTo;
	}, 200); // time in ms
}

document
	.querySelectorAll(".waitBeforeNavigate")
	.forEach((EL) => EL.addEventListener("click", waitBeforeNavigate));
