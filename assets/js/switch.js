//  START OF  FIRST QUEST FUNCTION
async function myFunction() {
  const { value: x } = await Swal.fire({
    title: "You found it?",
    confirmButtonColor: "#141414",
    showConfirmButton: true,
    confirmButtonText: "yehaw",
    input: "password",
    inputPlaceholder: "put it here :D ",
    inputLabel: "secret word",
    inputAttributes: {
      autocapitalize: "off",
      autocorrect: "off",
    },

    inputValidator: (x) => {
      switch (x) {
        case "bintokki_": {
          window.location = " /redirects/redirect.html";
          break;
        }
        case "bintokki": {
          window.location = "index.html";
          break;
        }
        case "bin314": {
          window.location = "index.html";
          break;
        }
        case "binbinu": {
          window.location = "index.html";
          break;
        }
        case "binbinu_": {
          window.location = "index.html";
          break;
        }

        case "lonus": {
          window.location = "index.html";
          break;
        }

        case "binbin": {
          window.location = "index.html";
          break;
        }

        case "pie": {
          window.location = "index.html";
          break;
        }

        case "hyetae": {
          window.location = "index.html";
          break;
        }

        case "cat": {
          window.location = "index.html";
          break;
        }

        case "dave": {
          window.location = "index.html";
          break;
        }

        case "My name is Dave": {
          window.location = "index.html";
          break;
        }

        case "aerglonus": {
          window.location = "index.html";
          break;
        }
        case "123": {
          window.location = "index.html";
          break;
        }
        case "dave134": {
          window.location = "index.html";
          break;
        }
        case "lol": {
          window.location = "index.html";
          break;
        }
        case "password": {
          window.location = "index.html";
          break;
        }
        case "word": {
          window.location = "index.html";
          break;
        }
        case "bintokki134":
          {
            window.location = "index.html";
          }
          break;
        case "binton9876": {
          window.location = "index.html";
          break;
        }
        case "secret word": {
          window.location = "index.html";
          break;
        }
        case "binton": {
          window.location = "index.html";
          break;
        }
        case "bin": {
          break;
        }
        case "definetly_binton": {
          if ((x = "bin")) {
            const Toast = Swal.mixin({
              toast: true,
              position: "bottom-end",
              iconColor: "white",
              customClass: {
                popup: "colored-toast",
              },
              showConfirmButton: false,
              timer: 1300,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: "success",
              title: "you got it",
              color: "#ffff",
            }).then(() => {
              Swal.fire({
                title: "Custom width, padding, color, background.",
                imageWidth: 200,
                imageHeight: 200,
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
                window.location = "result.html";
              });
            });
          }
          break;
        }
        default: {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: false,
          });
          Toast.fire({
            icon: "error",
            title: "try again",
            color: "#ffff",
          }).then(() => {
            myFun();
          });
          break;
        }
      }
    },
  });
}
// ENDS FIRST QUEST FUNCTION
//=====================================//
//=====================================//
//=====================================//
// STARTS SECOND QUEST FUNCTION //
