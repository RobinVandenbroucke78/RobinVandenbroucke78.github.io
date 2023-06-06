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
    let i = 0, finished = false;
    while(i < seats.length && !finished){
        if((seats[i] && seats[i+1] && seats[i+2]) && (parseInt(i/8) === parseInt((i+1)/8)) && (parseInt((i+1)/8) === parseInt((i+2)/8)) ){
            selSeat = i;

            let accept = confirm("Seats " + (i + 1) + " through " + (i + 3) +
                " in Row " + (parseInt(i/8) + parseInt(1)) + " are available. Accept?");
            if (accept){
                finished = True;
                seats[i]=false;
                seats[i+1]=false;
                seats[i+2]=false;
                break;
            }
            else{

            }
        }
        i++;
    }
}

window.addEventListener("load", initSeats);