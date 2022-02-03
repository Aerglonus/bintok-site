// function myFunction() {
//   let x = document.forms["myForm2"]["fname"].value;
//   if (x == "definetly_binton" || x == "pie" || x=="") {
//     window.location = "quest2";
//   } else {
//     alert("Wrong answer try again please");
//     return false;
//   }
// }
// document.getElementById("floatingpassword").onkeydown = function () {
//   myFun();
// };
swal({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success",
});
// $("form").keydown(function (e) {
//   if (e.keyCode == 13) {
//     // e.preventDefault();
//     alert("itworks?");
//     return false;
//   }
// });

// onkeydown = "return submitName(event);";
// document.getElementById("smt").addEventListener("keydown", function (e) {
//   if (e.code === "Enter") {
//     document.getElementById("myButton").click();
//   }
// });

// document.getElementById("myButton").onclick = function () {
//   if (confirm("Successful Message")) {
//     window.location.reload();
//   }
// };
// var input = document.getElementById("smt");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function (e) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (e.key === 13) {
//     alert("it works?");
//   }
// });

// $("#myButton").click(function () {
//   alert("Button code executed.");
// });

// $("#floatingPassword").keydown(function (event) {
//   if (event.keyCode === 13) {
//     $("#myButton").click();
//   }
// });

// function myFun() {
//   let x = document.forms["myForm2"]["dname"].value;
//   if (
//     x == "binton314" ||
//     x == "pie" ||
//     x == "definetly_binton" ||
//     x == "What I want to say is that"
//   ) {
//     window.location = "result";
//   } else {
//     alert("not the current answer");
//     return false;
//   }
// }

// function myvalid() {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// }
