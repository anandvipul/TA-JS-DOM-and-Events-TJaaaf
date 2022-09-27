function clearInnerText() {
    document.querySelector('td.result').innerText = "0";
     
}

function evalResult(str) {
    let result = eval(`${str}`);
    document.querySelector('td.result').innerText = `${result}`;
}

function eventHandler(event) {
    if (event.target.dataset.value != undefined) {
        document.querySelector('td.result').innerText += event.target.dataset.value;
    }
    
    
    
}

let clearButton = document.querySelector("td.clear");
clearButton.addEventListener('click', clearInnerText);

let actionButton = document.querySelector('td.action');
actionButton.addEventListener('click', () => evalResult(document.querySelector("td.result").innerText));


let table = document.querySelector('table');
table.addEventListener('click', (event) => eventHandler(event));