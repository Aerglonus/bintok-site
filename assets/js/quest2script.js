setInterval(createSnowFlake, 600);

async function myFun() {
  const { value: x } = await Swal.fire({
    title: "You found it?",
    confirmButtonColor: "#141414",
    showConfirmButton: true,
    confirmButtonText: "yehaw",
    input: "password",
    inputPlaceholder: "put it here :D ",
    inputLabel: "secret word",
    inputAttributes: {
      maxlength: 10,
      autocapitalize: "off",
      autocorrect: "off",
    },

    inputValidator: (x) => {
      if (
        x == "binton314" ||
        x == "pie" ||
        x == "definetly_binton".isConfirmed
      ) {
        Swal.fire({
          title: "Custom width, padding, color, background.",
          width: 600,
          padding: "3em",
          color: "#141414",
          backdrop: `
               rgba(0,0,0,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
             left top
            `,
          confirmButtonColor: "#141414",
          allowOutsideClick: false,
          allowEscapeKey: false,
          customClass: {
            image: "swalmag",
          },
          title: "POGGERS!",
          text: "You got it!",
          confirmButtonText: "Next Quest",
          imageUrl: "/assets/img/binpog",
        }).then(function () {
          window.location = "index.html";
        });
      } else {
        Swal.fire({
          confirmButtonColor: "#141414",
          icon: "error",
          title: "Oops...",
          text: "wrong answer!",
          footer: '<a href="https://github.com/aerglonus">Want some help?</a>',
        });
      }
    },
  });
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
