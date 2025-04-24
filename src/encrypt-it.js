/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
 

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    //target the id of what you want to listen too
    const encryptBut = document.getElementById("encrypt-it");
    //bind the listener to the id with a function to handle the event
    encryptBut.addEventListener("click", handleClick);

    //target the id of what you want to listen to
    const resetBut = document.getElementById("reset");
    //bind the listener to the id with a function to handle the event
    resetBut.addEventListener("click", handleReset);

    
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    console.log("Window loaded!");

    //get the value from the text field and store it
    const grabinput = document.getElementById("input-text").value;
    const resultloc = document.getElementById("result");
    // match against an alphabet so we can add 1 (left shift) with mod 26 
    // which also covers the wrap around a-z
    const alphaA = "abcdefghijklmnopqrstuvwxyz"
    let buildString = "";

    for (let i = 0; i < grabinput.length; i++) {
      // get input string bit by bit
      let stringChar = grabinput[i];
      // track casing
      let isUpperCase = false;
      // check and save casing state
      if (stringChar >= 'A' && stringChar <= 'Z') {
        isUpperCase = true;
      }
      //make lowercase to match against alphabet string
      // remeber we saved the uppercase state in the boolean check with isUpperCase
      if (alphaA.includes(stringChar.toLowerCase())) {
        // store default casing
        let storeLowerChar = stringChar.toLowerCase();
        let currIndex = alphaA.indexOf(storeLowerChar);
        let indexShiftedLeft = (currIndex + 1) % 26;
        let shiftedChar = alphaA[indexShiftedLeft]
        // build new string with shifted value of the inputs current charVal
        // apply the saved upper casing to the char we are appending
        if (isUpperCase) {
          shiftedChar = shiftedChar.toUpperCase();
        }
        
        buildString += shiftedChar;
      } 
      else {
        // else keep building the string (we have no rules for numbers, spaces, and symbols)
        // so they should be included in the output
        buildString += stringChar;
      }
    }
    // when finished, set the output to the result 
    resultloc.textContent = buildString;
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
  }


})();
