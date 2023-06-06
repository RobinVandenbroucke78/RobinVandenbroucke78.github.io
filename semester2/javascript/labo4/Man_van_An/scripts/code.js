const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";
    let count = 0;
    let index = text.indexOf("an");

    while (index !== -1) {
        count++;
        index = text.indexOf("an", index + 1);
    }

    console.log(`An komt ${count} keer in de zin voor`);

}
window.addEventListener("load", setup);