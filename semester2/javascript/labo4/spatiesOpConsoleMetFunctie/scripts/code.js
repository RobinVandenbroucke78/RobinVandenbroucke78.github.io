const setup = () => {
    let button = document.getElementById("submit");
    button.addEventListener("click", submit);
}

const submit = () => {
    let tekst = document.getElementById("txtTekst").value;
    let result = maakMetSpaties(tekst);
    console.log(result);
}

const maakMetSpaties = (inputText) => {
    let result="";
    for(let i = 0; i < inputText.length; i++){
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);