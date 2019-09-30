const makeGrid = () => {
  // Select size input
  let inputHeight = document.getElementById("inputHeight").value;
  let inputWidth = document.getElementById("inputWidth").value;
  let pixelCanvas = document.getElementById("pixelCanvas");

  // Draw Gird
  let canvasData = ``;
  for (let i = 0; i < inputWidth; i++) {
    canvasData += `<tr>`;
    for (let x = 0; x < inputHeight; x++) {
      canvasData += `<td></td>`;
    }
    canvasData += `</tr>`;
  }
  pixelCanvas.innerHTML = canvasData;

  colorGird();
};

// Coloring Gird
const colorGird = () => {
  let td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("click", event => {
      let tdSelected = event.target;
      // Select color input
      let colorPicker = document.getElementById("colorPicker").value;
      tdSelected.style.backgroundColor = colorPicker;
    });
  }
};

document.getElementById("sizePicker").onsubmit = e => {
  e.preventDefault();
  makeGrid();
};
