const initialize = () => {
    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", updateSlider);
        sliders[i].addEventListener("input", updateSlider);
    }

    restoreSliderValues();
    restoreSwatches();

    updateSlider();
};

const setColorPickerFromSwatch = (event) => {
    if (event.target.className == "swatch") {
        let swatch = event.target;
        document.getElementById("sldRed").value = swatch.red;
        document.getElementById("sldGreen").value = swatch.green;
        document.getElementById("sldBlue").value = swatch.blue;

        updateSlider();
    }
};

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    storeSwatches(swatchComponents);
};

const saveSwatch = () => {
    let sldred = document.getElementById("sldRed").value;
    let sldgreen = document.getElementById("sldGreen").value;
    let sldblue = document.getElementById("sldBlue").value;

    addSwatchComponent(sldred, sldgreen, sldblue);

    let swatchComponents = document.getElementById("swatchComponents");
    storeSwatches(swatchComponents);
};

const updateSlider = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    storeSliderValues(red, green, blue);
};

window.addEventListener("load", initialize);
