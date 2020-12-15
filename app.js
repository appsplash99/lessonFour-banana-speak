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
//   function clickHandler() {
//     console.log("Clicked")
//   }
// )

/* ex4:  */
// var btnTranslate = document.querySelector("#btn-translate");
// // Storing input text in txtInput
// var txtInput = document.querySelector("#txt-input");

// btnTranslate.addEventListener(
//   "click",
//   function clickHandler() {
//     console.log("Clicked")
//     console.log("input", txtInput.value)  // entered txt value
//   }
// )

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

/* ex05: wire a div to show output */

// // reference to the "button id" in js
// var btnTranslate = document.querySelector("#btn-translate");

// // Storing input text in txtInput
// var txtInput = document.querySelector("#txt-input");

// // refrence to element with id output-box
// var outputBox = document.querySelector("#output-box");

// // sets html text in the object to be "COOL"
// // outputBox.innerText = "COOL"

// btnTranslate.addEventListener(
//   "click",
//   function clickHandler() {
//     outputBox.innerText = "Translated: \n" + txtInput.value;
//   }
// )

/* ex10: error handling */

// reference to the "button id" in js
var btnTranslate = document.querySelector("#btn-translate");

// Storing input text in txtInput
var txtInput = document.querySelector("#txt-input");

// refrence to element with id output-box
var outputBox = document.querySelector("#output-box");

// lesson-four yoda url
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// convert into desired url
function getTranslationURL(text) {
  return serverURL + '?text=' + text;
}

// error handling function
function errorHandler() {
  console.log("error occured", error);
  alert("something went wrong with server\nPlease try again after some time...")
}

// function to get the desired data
function doFetch(inputText) {
  return fetch(getTranslationURL(inputText)) // promise me when you get the data
    .then(response => response.json()) //.then( do something by using arrow function syntax ) 
    .then(json => console.log(json.contents.translated)) // .then console.log( the desired data from the json )
    .catch(errorHandler) 
}

// callback function to perform desired action
function clickHandler() {
  var inputText = txtInput.value; // storing txt value from txt-input box
  var translatedText = doFetch(inputText); // store the translated text
}

// when click event happens perform the callback function(clickHandler)
btnTranslate.addEventListener(
  "click",
  clickHandler
)

