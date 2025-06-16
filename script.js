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
    const rowDiv = document.querySelectorAll('.row-div');
    const gridLayout = document.querySelector('#create-grid-layout');

    clearBtn.addEventListener('click', (e) => {
        for(let i = 0; i < rowDiv.length; i++) {
            rowDiv[i].remove();
        }
    });

    gridLayout.addEventListener('click', (e) => {
        for(let i = 0; i < rowDiv.length; i++) {
            rowDiv[i].remove();
        }
    });
}

function makeSketch() {
    createContainer();

    const gridLayout = document.querySelector('#create-grid-layout');
    let row;
    let col;

    gridLayout.addEventListener('click', (e) => {
        clearGrid();
        row = window.prompt("What is the size of the row?(max size 100)");
        col = window.prompt("What is the size of the column?(max size 100)"); 

        createGrid(Number(row), Number(col));

        const colDiv = document.querySelectorAll(".col-div");

        for(let i = 0; i < colDiv.length; i++) {
                colDiv[i].addEventListener('mouseover', (e) => {
                    let redVal = Math.floor(Math.random * 256);
                    colDiv[i].style.backgroundColor = `rgba(0, 0, 0, 1)`;
            });
        }

        clearGrid();
    }); 

}

makeSketch();