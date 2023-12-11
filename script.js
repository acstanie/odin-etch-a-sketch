function createContainer() {
    const body = document.querySelector('body');
    const gridContainer = document.createElement('div');
    const container = document.createElement('div');
    const gridLayout = document.createElement('button');
    const clearBtn = document.createElement('button');

    container.classList.toggle('container');
    gridContainer.classList.toggle('grid-container');
    clearBtn.setAttribute('id', 'clear-btn');
    gridLayout.setAttribute('id', 'create-grid-layout');

    gridLayout.textContent = 'Create Grid Layout';
    clearBtn.textContent = 'Clear';

    
    body.appendChild(container);
    container.appendChild(clearBtn);
    container.appendChild(gridLayout);
    container.appendChild(gridContainer);
}

function createGridLayout() {
    const gridLayout = document.querySelector('.create-grid-layout');
    let row;
    let col;

    gridLayout.addEventListener('click', (e) => {
        row = window.prompt("What is the size of the row?(max size 100)");
        col = window.prompt("What is the size of the column?(max size 100)");
    });
}

function createGrid(row, col) {
    const gridContainer = document.querySelector('.grid-container');

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