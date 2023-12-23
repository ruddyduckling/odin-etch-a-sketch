const container = document.querySelector('#container');

let gridDensity = 16;
let color = 'black';
const size = document.querySelector('#container').offsetWidth;
let cellSize = size/gridDensity;

function makeGrid (gridDensity) {
  for (let i = 0; i < gridDensity; i++) {
    const column = document.createElement('div');
    column.style.height = `${cellSize}px`;
    column.style.width = `${cellSize}px`;
    column.setAttribute('class', 'col')
    container.appendChild(column);
  }
  const columns = document.querySelectorAll('.col');
  columns.forEach(column => {
    for (let i = 0; i < gridDensity; i++) {
      const cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.style.height = `${cellSize}px`;
      cell.style.width = `${cellSize}px`;
      column.appendChild(cell);
      cell.addEventListener('mouseover', draw);
    }
  });

}
makeGrid(gridDensity);

function draw() {
  this.style.backgroundColor = `${color}`;
}
