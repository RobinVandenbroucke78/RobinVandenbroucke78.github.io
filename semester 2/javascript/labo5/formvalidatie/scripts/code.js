const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", check);
}

const check = () => {
    let voornaam = document.getElementById("voornaam");
    let familienaam = document.getElementById("familienaam");
    let geboortedatum = document.getElementById("geboortedatum");
    let email = document.getElementById("email");
    let kinderen = document.getElementById("aantal");
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;

    if(voornaam.length > 30){
        alert("max. 30 karakters");
    }else if(familienaam.length > 50){
        alert("max. 50 karakters");
    }else if (familienaam.value === "" || geboortedatum.value === "" || email.value === ""){
        alert("verplicht veld");
    }else if(geboortedatum.value !== "jjjj-mm-dd"){
        alert("formaat is niet jjjj-mm-dd");
    }else if(!emailRegex.test(email.value)){
        alert("geen geldig email adres");
    }else if(kinderen < 0){
        alert("is geen positief getal");
    }else if(kinderen < 99){
        alert("is te vruchtbaar");
    }
}
window.addEventListener("load", setup);