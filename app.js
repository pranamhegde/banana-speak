var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector('#btn-clear')
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
};


function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)        //catch keyword is used for error handling
};

function clearHandler(){
    txtInput.value = '';
    outputDiv.innerHTML = '';
}

btnTranslate.addEventListener("click", clickHandler);
btnClear.addEventListener("click", clearHandler);

