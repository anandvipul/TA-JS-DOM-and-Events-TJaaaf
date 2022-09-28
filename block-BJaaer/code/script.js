let form = document.querySelector('form');
let close = document.querySelector('span.close');
let modal = document.querySelector('div.modal');


function addInvisible(elem) {
    elem.classList.toggle('invisible');
}

function displayData(event) {
    event.preventDefault();
    console.dir(form);
    addInvisible(form);
    addInvisible(modal);
    // console.log(form.elements.name.value);
    document.querySelector('.user-name').innerText = form.elements.name.value;
    document.querySelector('.user-email').innerText = form.elements.email.value;
    document.querySelector(`.user-love`).innerText = form.elements.genre.value;
    document.querySelector('.user-color').innertext = form.elements.color.value;
    document.querySelector(`.user-rating`).innerText = form.elements.rating.value;
    document.querySelector(`.user-genre`).innerText = form.elements.drone.value;
    document.querySelector(`.user-agree`).innerText = form.elements.terms.checked;

}

form.addEventListener('submit', (event) => displayData(event));




close.addEventListener('click', () => {addInvisible(modal); addInvisible(form);});

