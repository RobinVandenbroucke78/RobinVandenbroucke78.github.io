const setup = () => {
    let image = document.getElementById("txtImage");
    image.addEventListener("mouseover", change);
}

const change = () => {
    let image = document.getElementById("txtImage");
    let tekst = document.getElementById("txtOnderschrift");
    image.src = "images/monkey.jpg";
    image.alt = "aap";
    tekst.innerHTML = "Dit is een aap"

}

window.addEventListener("load", setup);