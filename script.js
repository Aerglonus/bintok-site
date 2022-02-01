setInterval(createSnowFlake, 600);

function myFunction()
   {
    const newLocal = "fname";
    let x = document.forms["myForm"][newLocal].value;
    if (x == "definetly_binton","binton314","pie") {
    window.location = "quest2"
}
    else {
          alert("Wrong answer try again please");
      return false; }

   }

   function secondFunction()
   {
    const newLocal = "dname";
    let x = document.forms["myForm"][newLocal].value;
    if (x == "What I want to say is that") {
    window.location = "result"
}
    else {
          alert("Wrong answer try again please");
      return false; }

   }

   document.querySelector('body').addEventListener('contextmenu', (e) => {
     e.preventDefault();
   })



 function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-star');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = `${Math.random() * 5 + 5}s`; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snow_flake.style.transform=("rotate(45deg")
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}

