const setup = () => {
    let button = document.getElementById("resultaat");
    button.addEventListener("click", resultaat);
}
const resultaat = () => {
    let roker = document.getElementById("txtroker");
    let moedertaal = document.getElementsByName("moedertaal");
    let buurland = document.getElementById("txtbuurland");
    let bestelling = document.getElementById("txtFood");

    //roker
    if (roker.checked) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }

    //moedertaal
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is " + moedertaal[i].value);
            break;
        }
    }

    //buurland
    console.log("favoriete buurland is " +  buurland.value);

    //bestelling
    let producten = Array.from(bestelling.selectedOptions).map(option => option.value);
    console.log("bestelling bestaat uit " + producten);
}
window.addEventListener("load", setup);