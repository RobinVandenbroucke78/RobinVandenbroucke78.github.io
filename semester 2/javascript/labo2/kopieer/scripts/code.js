const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let output = document.getElementById("txtOutput");
    output.innerHTML = "<p>"+tekst+"</p>";
}
window.addEventListener("load", setup);