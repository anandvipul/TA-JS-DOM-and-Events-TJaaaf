
function showDeleteNumber(obj, str) {
    obj.innerText = str;
    setTimeout(() => obj.innerText = "", 5000);
}


let withoutDiv = document.querySelector('div.without');
let withoutBoxes = withoutDiv.querySelectorAll('li.box');
withoutBoxes.forEach((box, index) => box.addEventListener('click', () => {showDeleteNumber(box, index+1)}));

let withDiv = document.querySelector('div.with');
withDiv.addEventListener('click', (event) => showDeleteNumber(event.target, 1));