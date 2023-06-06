const storeSliderValues = (sldred, sldgreen, sldblue) => {
    let slider = {
        r: sldred,
        g: sldgreen,
        b: sldblue,
    };

    let sliderJson = JSON.stringify(slider);
    localStorage.setItem("vives.be.slider", sliderJson);
};

const restoreSliderValues = () => {
    let redSlider = document.getElementById("sldRed");
    let greenSlider = document.getElementById("sldGreen");
    let blueSlider = document.getElementById("sldBlue");

    let slider = {};
    let sliderJson = localStorage.getItem("vives.be.slider");
    if (sliderJson === undefined) {
        slider = {
            r: 0,
            g: 0,
            b: 0,
        };
    } else {
        slider = JSON.parse(sliderJson);
    }

    redSlider.value = slider.r;
    greenSlider.value = slider.g;
    blueSlider.value = slider.b;
};

const storeSwatches = (swatchComponents) => {
    let arrSwatches = [];
    const childNodes = Array.from(swatchComponents.childNodes);

    childNodes.forEach((child) => {
        let swatch = {
            r: child.getAttribute("data-red"),
            g: child.getAttribute("data-green"),
            b: child.getAttribute("data-blue"),
        };
        arrSwatches.push(swatch);
    });
    let jsonArr = JSON.stringify(arrSwatches);
    localStorage.setItem("vives.be.storeswatch", jsonArr);
};

const restoreSwatches = () => {
    let swatchJson = localStorage.getItem("vives.be.storeswatch");
    if (swatchJson !== undefined) {
        let arrSwatches = JSON.parse(swatchJson);
        arrSwatches.forEach((swatch) => {
            addSwatchComponent(swatch.r, swatch.g, swatch.b);
        });
    }
};
