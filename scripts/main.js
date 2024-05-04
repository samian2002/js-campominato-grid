const gridContainer = document.getElementById('grid-container');
/*
for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.id = 'cell' + i; 
    cell.textContent = i; 
    gridContainer.appendChild(cell);
    gridContainer.appendChild(cell);
    cell.addEventListener('click', function() {
        console.log('Cella cliccata: ' + cell.textContent);
        cell.style.backgroundColor = 'lightblue'; // Cambia il colore di sfondo al clic
    });
}
*/


function createCell(id) {
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.id = 'cell' + id;
    cell.textContent = id;

    cell.addEventListener('click', function() {
        console.log('Cella cliccata: ' + cell.textContent); 
        cell.style.backgroundColor = 'lightblue'; 
    });
    return cell;
}

for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);
    gridContainer.appendChild(cell);
}
