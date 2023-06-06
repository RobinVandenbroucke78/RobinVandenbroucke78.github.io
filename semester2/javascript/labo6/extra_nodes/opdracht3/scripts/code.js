const setup = () => {
    let button = document.getElementById("append");
    button.addEventListener("click", change);
}

const change = () => {
    let p  = document.createElement("p");
    p.textContent = "good Job!";
    let div = document.getElementById("myDIV");
    div.appendChild(p);
}
window.addEventListener("load", setup);