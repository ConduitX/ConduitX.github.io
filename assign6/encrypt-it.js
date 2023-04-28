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

    //Event Listener when encrypt button is clicked
    const encryptButton = document.querySelector("#encrypt-it");
    encryptButton.addEventListener('click', encrypt); 

    //Event Listener when reset button is clicked
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener('click', reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encrypt() {
    console.log("Encrypt It!");
    let cipherPick = document.getElementById("cipher-type");
    let input = document.getElementById("input-text");
    let finalWord = "";
    
    if(cipherPick.value == "shift") {
      finalWord = shiftCipher(input.value);
      console.log(finalWord);
    }
    else if (cipherPick.value == "random"){
      finalWord = randomCipher(input.value);
      console.log(finalWord);
    }
    console.log(cipherPick.value);
    
    result(finalWord);   //Call result function to apply styles
  }

  function reset() {
    document.getElementById("result").innerHTML = "";
    console.log("Reset!");
  }

  function result(finalWord) {
    let resultArea = document.getElementById("result");
    pickFont();   //Value

    //Print to onscreen HTML element
    if (isCapital()) {
      resultArea.innerHTML = finalWord.toUpperCase();
    }
    else {
      resultArea.innerHTML = finalWord;
    }

  }

  //STYLES---------------------
  function pickFont() {
    let resultArea = document.getElementById("result");
    var fontPicker = document.getElementsByName("text-size");
    let choice = "";

    //Loop through elements with name "text-size"
    for(var i = 0; i < fontPicker.length; i++) { 
      if (fontPicker[i].checked) {
        choice = fontPicker[i].value;
      }
    }

    if(choice == "12pt") {
      resultArea.style.fontSize = "1em"
    }
    else if(choice == "24pt") {
      resultArea.style.fontSize = "2em"
    }
  }

  function isCapital() {
    let capOn = document.getElementById("all-caps");

    if (capOn.checked) {
      return true;
    }
    else {
      return false;
    }
  }

  //CIPHERS------------------

  //Shift Cipher Logic
  function shiftCipher(text) {
    var result = "";

    text = text.toLowerCase();
    for(var i = 0; i < text.length; i++) {
      console.log(text[i]);
      if(text[i] == 'z') {
        result += 'a';
      }
      else if(text[i] < 'a' || text[i] > 'z'){
        result += text[i];
      }
      else {
        var letterCode = text.charCodeAt(i);
        console.log(letterCode);
        result += String.fromCharCode(letterCode + 1);
      }
    }

    return result
  }

  //Random Cipher Logic
  function randomCipher(text) {
    var result = "";
    //Set min/max of alphabet range
    var min = "a".charCodeAt(0);
    var max = "z".charCodeAt(0);  

    for(var i = 0; i < text.length; i++) {
      //return random letter between a-z
      var letterCode = Math.round(Math.random() * (max - min) + min);
      result += String.fromCharCode(letterCode);
    }

    return result;
  }

})();
