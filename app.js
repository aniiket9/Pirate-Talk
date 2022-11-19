var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput)
var outputDiv = document.querySelector("#output")
console.log(outputDiv)

// outputDiv.innerText = "Aniket Lawaniya"


function clickHandler(){
    outputDiv.innerText = "ajajajajajaj " + txtInput.value;
};
btnTranslate.addEventListener("click", clickHandler);
