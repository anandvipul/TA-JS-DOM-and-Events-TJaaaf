let boxClick = document.querySelector(`div.box.first`);
let boxMove = document.querySelector("div.box.second");

boxClick.setAttribute('style', `background-color:${randomColor()}`);


function random() {
    return Math.round(Math.random()*251);
}

function randomColor() {
    
    return `rgb(${random()}, ${random()}, ${random()});`;
}

function setRandom(elem) {
    elem.setAttribute('style', `background-color:${randomColor()}`);
}

boxClick.addEventListener('click', () => setRandom(boxClick));
boxMove.addEventListener('mousemove', () => setRandom(boxMove));