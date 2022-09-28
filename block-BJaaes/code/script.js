// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same.

let form = document.querySelector('form');

function handleForm(event) {
    event.preventDefault();
    let name = event.target.elements.name.value;
    let email = event.target.elements.email.value;
    let phone = event.target.elements.phone.value;
    let password = event.target.elements.password.value;

    console.log(`${name}, ${email}, ${phone}, ${password}`);

    if (name.length < 4) {
        console.log("name cant be less than 4 characters");
    };
    if (name.split("").some((elem) => typeof(+elem) == 'number')) {
        console.log("name Cant contain Number");
    }
}

form.addEventListener('submit', (event) => handleForm(event));