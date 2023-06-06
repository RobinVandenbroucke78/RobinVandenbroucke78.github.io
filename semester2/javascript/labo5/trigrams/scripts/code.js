const setup = () => {
    let tekst = "onoorbaar";
    const groups = [];

    for (let i = 0; i < tekst.length - 2; i++) {
        groups.push(tekst.substring(i, i + 3));
    }
    for (let j = 0; j < groups.length; j++){
        console.log(groups[j]);
    }
}
window.addEventListener("load", setup);