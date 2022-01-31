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
