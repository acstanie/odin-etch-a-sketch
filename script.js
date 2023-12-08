function createContainer() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.toggle('container');
    body.appendChild(container);
}

function createGrid() {
    const container = document.querySelector('.container');
    let dimension = 16;

    for(let i = 0; i < dimension; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row-div');
        container.appendChild(rowDiv);
        for(let j = 0; j < dimension; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.toggle('col-div');
            rowDiv.appendChild(colDiv);
            colDiv.style.border = '1px solid black';
        }  
    }
}


createContainer();
createGrid();