const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
}

const update = () => {
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