let testColor = 'magenta';





const container = document.querySelector('#container');
const size = document.querySelector('#container').offsetWidth;

let gridDensity = 16;
let startColor = '#C5CDBD';
let drawColor = 'black';

const sizeButton = document.querySelector('.size-btn');
sizeButton.addEventListener('click', () => {
  removeCells();
  makeGrid(getGridDimensions(), startColor);
});

function getGridDimensions() {
  gridDensity = prompt(`how many squares per side? (1-100)`);

  while (Math.sign(gridDensity) !== 1  || gridDensity > 100) {
    gridDensity = prompt('Please choose a positive number from 1-100.')
  } 

  console.log(`New Grid Density = ${gridDensity}x${gridDensity}`);
  return gridDensity;
}

function removeCells() {
  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.remove();
  });
}

makeGrid(gridDensity, startColor);

function makeGrid (gridDensity, color) {


 /*  for (let i = 0; i < gridDensity; i++) {
    const column = document.createElement('div');
    container.appendChild(column)
    for (let j = 0; j < gridDensity; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      let cellSize = size/gridDensity;
      cell.style.height = `${cellSize}px`;
      cell.style.width = `${cellSize}px`;
      cell.style.backgroundColor = `${color}`
      cell.addEventListener('mouseover', draw);
      column.appendChild(cell);
    }
  } */


  for (let i = 0; i < gridDensity**2; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    let cellSize = size/gridDensity;
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.style.backgroundColor = `${color}`
    container.appendChild(cell);
    cell.addEventListener('mouseover', draw);
  }
}


function draw() {
  this.style.backgroundColor = `${drawColor}`;
}

const eraseButton = document.querySelector('.erase');
eraseButton.addEventListener('click', () => {
  erase();
});


function erase() {
  let eraseCells = document.querySelectorAll('.cell');
  eraseCells.forEach((cell) => {
    cell.style.backgroundColor = `${startColor}`;
  });
}

const colorButton = document.querySelector('.color');
colorButton.addEventListener('click', () =>{
  drawColor = prompt('New color hexcode: ');
});

function showRuddy () {
  console.log('ruddyduck');
}