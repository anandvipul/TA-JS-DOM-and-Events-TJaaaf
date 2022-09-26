let container = document.createElement("div");
container.setAttribute("class", "container");
container.style.display = "flex";
container.style.flexWrap = `wrap`;

function setRandomColor() {
  let num = () => Math.round(Math.random() * 255);
  return `rgb(${num()}, ${num()}, ${num()});`;
}

function random() {
  return Math.round(Math.random() * 500);
}

function newBox() {
  let box = document.createElement("div");
  box.style.width = "4rem";
  box.style.height = "4rem";
  box.style.textAlign = `center`;
  box.style.lineHeight = '4rem';
  box.innerText = `${random()}`;
  box.setAttribute(
    "style",
    box.getAttribute("style") + `background-color: ${setRandomColor()}`
  );
  box.addEventListener("mousemove", () => {
    box.setAttribute(
      "style",
      box.getAttribute("style") + `background-color: ${setRandomColor()}`
    );
    box.innerText = `${random()}`;
  });
  return box;
}

for (let i = 0; i < 499; i++) {
  let newBoxDiv = newBox();

  container.append(newBoxDiv);
}

document.body.append(container);
