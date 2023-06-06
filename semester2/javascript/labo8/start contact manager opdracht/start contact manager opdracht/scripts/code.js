let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();

    // indien ok, bewaar de ingegeven data.
    let persoon = {};
    vulPersoonOpBasisVanUserInterface(persoon);
    personen.push(persoon);
    voegPersoonToeAanLijstInUserInterface(persoon);
        // een nieuw aangemaakte persoon voegen we toe

        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let voornaam =  document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let kinderen = document.getElementById("txtAantalKinderen");
    persoon.voornaam = voornaam;
    persoon.familienaam = familienaam;
    persoon.geboortedatum = geboortedatum;
    persoon.email = email;
    persoon.kinderen = kinderen
}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let Npersoon = document.createElement("option");
    Npersoon.value = persoon
    Npersoon.text = persoon.voornaam.value + " " + persoon.familienaam.value;
    lstPersonen.appendChild(Npersoon);
}

const changePersoon = (persoon) => {

}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = (persoon) => {
    console.log("Klik op de knop nieuw");
    //document.getElementById("txtVoornaam").value = "";
    //document.getElementById("txtFamilienaam").value = "";
    //document.getElementById("txtGeboorteDatum").value = "";
    //document.getElementById("txtEmail").value = "";
    //document.getElementById("txtAantalKinderen").value = "";

    //clear
    let inputElem = document.querySelectorAll('input[type=text]')
    inputElem.forEach((elem) => {
        elem.value = "";
    });
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", changePersoon);
};

window.addEventListener("load", setup);