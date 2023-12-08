function createContainer() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.toggle('container');
    body.appendChild(container);
}

function createGrid() {
    const container = document.querySelector('.container');
    let dimension = 25;

    for(let i = 0; i < dimension; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row-div');
        container.appendChild(rowDiv);
        for(let j = 0; j < dimension; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.toggle('col-div');
            rowDiv.appendChild(colDiv);
        }  
    }
}

function makeSketch() {
    createContainer();
    createGrid();

    const colDiv = document.querySelectorAll(".col-div");

    for(let i = 0; i < colDiv.length; i++) {
        colDiv[i].addEventListener('dragover', (e) => {
            colDiv[i].style.backgroundColor = 'black';
        });
    }
}

makeSketch();