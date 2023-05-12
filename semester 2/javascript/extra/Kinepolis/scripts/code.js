let seats = [ false, true, false, true, true, true, false, true,
    false, false, true, false, false, true, false, true,
    true, true, true, true, true, true, false, true,
    true, true, true, false, true, false, false, true ];

const setup = () => {

}

const createSeats = () => {
    let lstImages = document.getElementById("lstImages");
    for(let i = 0; i < seats.length; i++){
        if(i%8===0){
            let newLine = document.createElement('br');
            lstImages.appendChild(newLine);
        }
        let img = document.createElement('img');
        img.id = "seat"+i;
        lstImages.appendChild(img);
    }
}

const initSeats = () => {
    
}

window.addEventListener("load", setup);