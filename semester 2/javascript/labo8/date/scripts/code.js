const setup = () => {
    let start = new Date(); //begint bij 0
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //datum dag van de maand
    console.log(start.getDate());

    //maand van het jaar
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

    //aantal dagen leeft
    let geboorte = new Date('2002-08-07');
    let nu = new Date()
    milli = nu - geboorte
    dag = 1000 * 60 * 60 * 24
    dagen = milli / dag
    jaar = 1000 * 60 * 60 * 24 * 365
    jaren = milli / jaar
    console.log("Ik leef al: " + parseInt(dagen) + " dagen");
    console.log("Ik leef al: " + parseInt(jaren) + " jaren");
}
window.addEventListener("load", setup);