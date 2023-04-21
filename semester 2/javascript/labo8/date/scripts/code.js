const setup = () => {
    let start = new Date();
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //dag van de maand
    console.log(start.getDate());

    //maand van het jaar (januari is 0)
    console.log(start.getMonth());

    //datum
    day = start.getDate();
    month = start.getMonth() + 1;
    year = start.getFullYear();
    console.log(day + "-0" + month + "-" + year);

    //datum + uur
    hour = start.getHours()
    minutes = start.getMinutes()
    seconds = start.getSeconds();
    console.log(day + "-0" + month + "-" + year + "  " + hour + ":" + minutes + ":" + seconds);

    //datum afdrukken
    let event = new Date('2023-04-10T23:15:30');
    console.log(event.getDate());

    console.log("toISOString: " + event.toISOString());

    console.log("toDateString: " + event.toDateString());

    console.log("toTimeString: " + event.toTimeString());

    //aantal dagen leeft
    let geboorte = new Date('2002-08-07');
    let nu = new Date()
    milli = nu - geboorte
    day = 1000 * 60 * 60 * 24
    days = milli / day
    year = 1000 * 60 * 60 * 24 * 365
    years = milli / year

    console.log("Ik leef al: " + parseInt(days) + " dagen");
    console.log("Ik leef al: " + parseInt(years) + " jaren");
}
window.addEventListener("load", setup);