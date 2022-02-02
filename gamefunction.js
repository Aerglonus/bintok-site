// function myFunction() {
//   let x = document.forms["myForm2"]["fname"].value;
//   if (x == "definetly_binton" || x == "pie" || x=="") {
//     window.location = "quest2";
//   } else {
//     alert("Wrong answer try again please");
//     return false;
//   }
// }
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
    alert("not the current answer");
    return false;
  }
}
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
