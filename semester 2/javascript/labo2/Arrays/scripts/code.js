const setup = () => {
    let familieleden = ['Papa', 'Mama', 'Zus', 'Oma', 'Opa'];
    console.log(familieleden.length);
    for (let i = 0; i < familieleden.length; i=i+2) {
        console.log(familieleden[i])
    }
    VoegNaamToe(familieleden);

}

const VoegNaamToe = (leden) => {
    let persoon = prompt("Naam");
    leden.push(persoon);
    for(let i=0; i < leden.length; i++){
        console.log(leden[i])
    }
}

window.addEventListener("load", setup);