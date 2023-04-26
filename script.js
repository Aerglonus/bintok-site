function getuser() {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://ipapi.co/json/');
		xhr.onload = () => {
			if (xhr.status === 200) {
				const { ip, city, region, postal, org } = JSON.parse(xhr.response);
				// console.log(`This is ${ip} ${city} ${region} ${postal} ${org}`);
				resolve({ ip, city, region, postal, org });
			} else {
				console.error(xhr.statusText);
				reject(null);
			}
		};
		xhr.onerror = () => {
			console.error(xhr.statusText);
			reject(null);
		};
		xhr.send();
	});
}

async function webhook() {
	const userData = await getuser();
	const { ip, city, region, postal, org } = userData
	const request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://discord.com/api/webhooks/1016210194235134022/jZ7btCEtQGhkyBCtrEBnwVF1s4Q0Fp85Krrh54HR6JPtIWvbJmL-O8YVa3ZyDhm2m2-8",
	);
	request.setRequestHeader("Content-type", "application/json");
	const params = {
		username: "ANONYMOUS",
		avatar_url: "",
		content: `Site being read from ${ip} | ${city} | ${region} | ${postal} | ${org} `,
	};
	request.send(JSON.stringify(params));

	// console.log("Discord webhook activated");
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
