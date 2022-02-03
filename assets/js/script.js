setInterval(createSnowFlake, 600);

// $("form").keydown(function (e) {
//   if (e.keyCode == 13) {
//     e.preventDefault();
//     return false;
//   }
// });

function myFunction() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "binton314" || x == "pie" || x == "definetly_binton") {
    window.location = "quest2";
  } else {
    alert("not the current answer");
    return false;
  }
}

function myFun() {
  let x = document.forms["myForm2"]["dname"].value;
  if (
    x == "binton314" ||
    x == "pie" ||
    x == "definetly_binton" ||
    x == "What I want to say is that"
  ) {
    window.location = "result";
  } else {
    swal({
      title: "Wow!",
      text: "Message!",
      type: "success",
    }).then(function () {
      window.location = "index.html";
    });
    return false;
  }
}

document.querySelector("body").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

function createSnowFlake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-star");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";
  snow_flake.style.animationDuration = `${Math.random() * 5 + 5}s`; // between 2 - 5 seconds
  snow_flake.style.opacity = Math.random();
  snow_flake.style.fontSize = `${Math.random() * 10 + 10}px`;
  snow_flake.style.transform = "rotate(45deg";

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}
