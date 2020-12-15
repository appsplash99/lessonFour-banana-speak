// ex:1
// console.log("Check if Script is working from different file")
// alert("This Script Works");


// ex:2 Using Javascript
// var userName = prompt("Gimme ur UserName:");    // input
// var greet = "Welcome " + userName;          // processing
// alert(greet);                               // output


/*ex:3 wiring button click*/

// reference to the "button id" in js
// var btnTranslate = document
//                     .querySelector("#btn-translate");

// // listening to an event and
// // telling browser whenever there's a click event perform this function
// btnTranslate.addEventListener(
//   "click",
//   function clickEventHandler() {
//     console.log("Clicked")
//   }
// )

/* ex4:  */ 

var btnTranslate = document.querySelector("#btn-translate");
// Storing input text in txtInput
var txtInput = document.querySelector("#txt-input");

btnTranslate.addEventListener(
  "click",
  function clickEventHandler() {
    console.log("Clicked")
    console.log("input", txtInput.value)  // entered txt value
  }
)

// live challange
/*
What will be the query you would write for each one below? Select the first...

    1... textarea tag.
      ans. query.querySelector("textarea")

    2... element with a class btn-primary.
      ans. querySelectorAll(".btn-primary")
    3... element with an id input-btn.
      ans. querySelector("#input-btn")
    4... input element with an attribute name='translator'.
      ans. querySelector("input[name='translator']")


    */

