function biggerFont() {
    //change fontSize to 2em (24pt)
    document.getElementById("text-field").style.fontSize = "2em";
}

function fancify() {
    //change font, font-weight and color
    let textarea = document.getElementById("text-field");
    textarea.style.color = "blue";
    textarea.style.fontWeight = "bold";
    textarea.style.textDecoration = "1px underline blue"
    textarea.style.fontFamily = "Brush Script MT";
}
function borify() {
    //change back to default style
    let textarea = document.getElementById("text-field");
    textarea.style.color = "black";
    textarea.style.fontWeight = "normal";
    textarea.style.textDecoration = "none"
    textarea.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
}

function moo() {
    let text = document.getElementById("text-field").value;
    //capitalize text
    text = text.toUpperCase();

    //add "-Moo" to the end of each sentence
    let parts = text.split(".");
    text = parts.join("-Moo. ");

    //set new text
    document.getElementById("text-field").value = text;
}