function createContainer() {
    const body = document.querySelector('body');
    const gridContainer = document.createElement('div');
    const container = document.createElement('div');
    const clearBtn = document.createElement('button');

    container.classList.toggle('container');
    gridContainer.classList.toggle('grid-container');
    clearBtn.setAttribute('id', 'clear-btn');
    clearBtn.textContent = 'Clear';

    container.appendChild(clearBtn);
    body.appendChild(container);
    container.appendChild(gridContainer);
}

function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    let row = 2;
    let col = 2;

    for(let i = 0; i < col; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row-div');
        gridContainer.appendChild(rowDiv);
        for(let j = 0; j < row; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.toggle('col-div');
            rowDiv.appendChild(colDiv);
        }  
    }
}

function clearGrid() {
    const clearBtn = document.querySelector('#clear-btn');
    const colDiv = document.querySelectorAll('.col-div');

    clearBtn.addEventListener('click', (e) => {
        for(let i = 0; i < colDiv.length; i++) {
            colDiv[i].style.backgroundColor = 'white';
        }

    });
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

    clearGrid();
}

makeSketch();