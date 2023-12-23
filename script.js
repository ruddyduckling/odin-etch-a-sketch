const container = document.querySelector('#container');

let gridDensity = 16;

for (let i = 0; i < gridDensity; i++) {
  const column = document.createElement('div');
  column.setAttribute('class', 'col')
  container.appendChild(column);
}
const columns = document.querySelectorAll('.col');
columns.forEach(column => {
  for (let i = 0; i < gridDensity; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    column.appendChild(row);
  }
})