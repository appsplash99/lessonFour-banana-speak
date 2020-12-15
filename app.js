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
