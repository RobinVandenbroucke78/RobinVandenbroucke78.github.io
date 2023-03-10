const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let de = "de";
    let het = "het";
    let zin = tekst.split(" ");

    for(let i = 0; i < zin.length; i++) {
        if(zin[i].toLowerCase() === de.toLowerCase()) {
            zin[i] = het;
        }
    }
    let nieuweZin = zin.join(" ");
    console.log(nieuweZin);
}
window.addEventListener("load", setup);