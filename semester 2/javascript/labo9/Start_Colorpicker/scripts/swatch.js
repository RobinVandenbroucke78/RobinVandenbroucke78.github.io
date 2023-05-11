const addSwatchComponent = (red, green, blue) => {
    let swatch = buildSwatchComponent(red, green, blue);
    document.getElementById("swatchComponents").append(swatch);
};

const configureSwatch = (swatch, swatchred, swatchgreen, swatchblue) => {
    swatch.setAttribute("data-red", swatchred);
    swatch.setAttribute("data-green", swatchgreen);
    swatch.setAttribute("data-blue", swatchblue);
    swatch.style.background = "rgb(" + swatchred + "," + swatchgreen + "," + swatchblue + ")";
};

const buildSwatchComponent = (swatchred, swatchgreen, swatchblue) => {
    // maak de twee element nodes
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    // stel de swatch in
    swatch.className = "swatch";
    configureSwatch(swatch, swatchred, swatchgreen, swatchblue);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    // stel de delete knop in
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "x");
    btnDelete.addEventListener("click", deleteSwatch);

    // voeg de swatch en button toe aan de swatchcomponent
    swatch.appendChild(btnDelete);
    return swatch;
};
