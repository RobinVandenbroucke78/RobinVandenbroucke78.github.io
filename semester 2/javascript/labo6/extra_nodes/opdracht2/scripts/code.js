const setup = () => {
    let li = document.querySelectorAll("li");
    for(let i = 0; i<li.length; i++){
        li[i].classList.add("listitem");
    }

    let img = document.createElement("img");
    img.setAttribute("src", "download.jpg");
    document.body.appendChild(img);
}

window.addEventListener("load", setup);