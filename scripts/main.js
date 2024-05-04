
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

const gridContainer = document.getElementById('grid-container');

function createCell(id) {
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.id = 'cell' + id;
    // innerHTML a vuoto inizialmente per non visualizzare nulla
    cell.innerHTML = '';  
    cell.addEventListener('click', function() {
        //  aggiungere il numero solo quando viene cliccato
        if (this.innerHTML === '') {
            this.innerHTML = id;  // Mostra il numero solo al click
        }
        console.log('Cella cliccata: ' + this.innerHTML);
        this.style.backgroundColor = 'lightblue'; // colore di sfondo al clic.
    });
    return cell;
}

for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);
    gridContainer.appendChild(cell);
}
