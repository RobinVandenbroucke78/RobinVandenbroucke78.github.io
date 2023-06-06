const setup = () => {
    let gemeentes = [];
    let stoppen = false;

    while(!stoppen){
        let input = window.prompt("Gemeente: ");
        stoppen = (input==null || input.trim().toLowerCase() === "stop");
        if(!stoppen){

        }
        gemeentes.sort(compare);
        voegGemeentesToe(gemeentes);
    }
}

const compare = (a,b) => {
    return a.localeCompare(b);
}

const voegGemeentesToe = (gemeentes) => {
    let gemeente = document.getElementById("gemeente");
    let html = "<select>"
    for(let i = 0; i<gemeentes.length; i++){
        html+="<option>"+gemeentes[i]+"</option>";
    }
    html += "</select>"
    gemeente.innerHTML=html;

}
window.addEventListener("load", setup);