const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++){
		sliders[i].addEventListener("input", updates);
	}
	update();
	let btn = document.getElementById("send");
	btn.addEventListener("click", swatch)
}

const swatch = () => {
	let swatchcomponents = document.getElementById("swatchcomponents");
	let swatch = buildSwatchComponents();
	swatchcomponents.appendChild(swatch);
}

const buildSwatchComponents = () => {
	let swatch = document.createElement("div");
	let btn = document.createElement("input");

	swatch.className="swatch";

	btn.setAttribute("type", "button");
	btn.setAttribute("value", "X");
	btn.addEventListener("click", deleteSwatch);
}

const deleteSwatch = () => {

}

const updates = () => {
	let sliders = document.getElementsByClassName("slider");
	let valueRed = document.getElementById("lblRed");
	let red = sliders[0].value
	valueRed.innerHTML = red;
	let valueGreen = document.getElementById("lblGreen");
	let green = sliders[1].value
	valueGreen.innerHTML = green;
	let valueBlue = document.getElementById("lblBlue");
	let blue = sliders[2].value
	valueBlue.innerHTML = blue;

	let colorBlock = document.getElementById("swatch");
	colorBlock.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}

window.addEventListener("load", setup);