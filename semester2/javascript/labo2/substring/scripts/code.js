const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let woord = document.getElementById("woord").value;
    let start = document.getElementById("txtLinks").value;
    let einde = document.getElementById("txtRechts").value;
    let output = document.getElementById("txtOutput");
    output.innerHTML = woord.substring(start, einde);
}
window.addEventListener("load", setup);