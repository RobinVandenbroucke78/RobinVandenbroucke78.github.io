const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let de = "de"
    let het = "het"
    let zin = tekst.trim().replace(new RegExp(de, "gi"), het); //reguliere expressie, gi = global ignore case
    console.log(zin);

}
window.addEventListener("load", setup);