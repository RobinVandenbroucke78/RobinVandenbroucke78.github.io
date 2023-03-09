const setup = () => {
    let bereken = document.getElementById("herbereken");
    bereken.addEventListener("click", berekenen);
}

const berekenen = () => {
    let waarde = 0;

    const prijs = document.getElementsByClassName("prijs");
    const aantal = document.getElementsByClassName("aantal");
    const btw = document.getElementsByClassName("btw");
    const subtotaal = document.getElementsByClassName("subtotaal");
    const totaal = document.getElementById("totaal");

    for (let i = 0; i < aantal.length; i++) {
        const prijs_product = parseFloat(prijs[i].innerHTML);
        const aantal_product = aantal[i].value;
        const btw_product = parseFloat(btw[i].innerHTML) / 100 +1;
        const prijsBerekening = parseFloat(prijs_product * aantal_product * btw_product);
        subtotaal[i].innerHTML = prijsBerekening.toFixed(2) + " Eur";
        waarde += prijsBerekening;
    }
    totaal.innerHTML = waarde.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);