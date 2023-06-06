const setup = () => {
    let label = document.getElementById("txtStart");
    label.addEventListener("click", () =>{
        label.focus();
    })
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", addTable);
}

const addTable = () => {
    //ophalen ingegeven getal
    let txtStartGetal = document.getElementById("txtStart");
    let startGetal = parseInt(txtStartGetal.value);

    if(isNaN(startGetal)){
        alert("Geen geldig getal")
    }else{
        if(startGetal >= 11){
            alert("Het getal maag niet groter zijn dan 11");
        }else{
            let tafel = {
                start: startGetal,
                datum: new Date()
            };
            createTable(tafel);
        }
    }
}

const createTable = (tafel) => {
    let header = createHeader(tafel);
    header.classList.add('header');
    let tafels = document.getElementById("tafels");
    let tafelDiv = document.createElement("div");
    tafelDiv.classList.add("tafel");
    tafelDiv.appendChild(header);
    for(let i = 1; i <= 10; i++){
        const divRij = document.createElement("div");
        const formule = i * tafel.start;
        let textTD = document.createTextNode(`${tafel.start} x ${i} = ${formule}`);
        if(i%2 === 0){
            divRij.classList.add('even');
        }
        divRij.appendChild(textTD);
        tafelDiv.appendChild(divRij);
    }
    tafels.appendChild(tafelDiv);
    console.log(tafels);
}

const createHeader = (tafel) => {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "header");
    let hours = tafel.datum.getHours();
    let minutes = tafel.datum.getMinutes();
    let seconds = tafel.datum.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds
    let headerRow = document.createTextNode(`Tafel van ${tafel.start} aangemaakt op: ${time}`);
    headerDiv.appendChild(headerRow);
    return headerDiv;
}

window.addEventListener("load", setup);