

const storeSliderValues = () => {
    let settings = {};
    let settingsJSON;

    settings.red = parseInt(document.getElementById("sldRed").value);
    settings.green = parseInt(document.getElementById("sldGreen").value);
    settings.blue = parseInt(document.getElementById("sldBlue").value);

    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsPerson", settingsJSON);
};

const restoreSliderValues = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON === undefined) {
        settings = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        settings = JSON.parse(settingsJSON);
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("sldRed").value = settings.red;
    document.getElementById("sldGreen").value = settings.green;
    document.getElementById("sldBlue").value = settings.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let listColors = [];
    let colorsJSON;
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++){
        let colors = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue"),
        };
        listColors.push(colors);
    }

    colorsJSON = JSON.stringify(listColors);

    localStorage.setItem("color", colorsJSON);
};

const restoreSwatches = () => {
    let colors;
    let colorsJSON = localStorage.getItem("color");

    if (colorsJSON === undefined) {
        colors = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        colors = JSON.parse(colorsJSON);

    }

    for(let i = 0; i < colors.length; i++){
        let red = colors[i].red;
        let green = colors[i].green;
        let blue = colors[i].blue;
        addSwatchComponent(red, green, blue);
    }
};
