// Udacity Template
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//function makeGrid() {
// Your code goes here!
}

//Clarification of code

function makeGrid(height, width) {
    const canvas = document.getElementById(“pixelCanvas”);
    let grid = '';

    // jump loop per row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop per cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table elements
    table.innerHTML = grid;

    // Aclick event for grid cells
    addClickEventToCells();
}

// height+width
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// form
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Grid layout
makeGrid(10, 10);
