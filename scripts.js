const utilityButtons = document.createElement('div');
    utilityButtons.setAttribute('class', 'utility-buttons');
function clearGrid() {
        while(gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    } 
let clicked = false; 
let generalContainer = document.getElementById('general-container');
    generalContainer.appendChild(utilityButtons);
const backgroundButton = document.createElement('button');
    backgroundButton.setAttribute('class', 'background-button');
    const button1 = document.createTextNode('Change Background');
    backgroundButton.appendChild(button1);
    let pickColor = document.createElement('input');
    pickColor.setAttribute('type', 'color');
    pickColor.setAttribute('value', '#FFFFFF');
    backgroundButton.appendChild(pickColor);
    backgroundButton.addEventListener('click', changeBackground);
    function changeBackground() {
        gridContainer.style.backgroundColor = pickColor.value;
    }
    utilityButtons.appendChild(backgroundButton);
const eraserButton = document.createElement('button');
    eraserButton.setAttribute('class', 'eraser-button');
    const button2 = document.createTextNode('Eraser');
    eraserButton.appendChild(button2);
    eraserButton.setAttribute('onclick', 'eraseFunction()');
    function eraseFunction() {
        let eraser = document.querySelectorAll('.grid-items');
        eraser.forEach((item) => {
            item.addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = pickColor.value;
            });
        });
    }
    utilityButtons.appendChild(eraserButton);
const clearButton = document.createElement('button');
    clearButton.setAttribute('class', 'clear-button')
    const button3 = document.createTextNode('Clear');
    clearButton.appendChild(button3);
    clearButton.setAttribute('onclick', 'clearFunction()');
    function clearFunction() {
        gridContainer.style.backgroundColor = pixel.value;
        clearGrid();
        createGrid(16);
    }
    utilityButtons.appendChild(clearButton);
const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
function createGrid(num) {
    gridContainer.style.setProperty('--rows', num);
    gridContainer.style.setProperty('--cols', num);
    for (let i = 0; i < Math.pow(num, 2); i++) {
        let grids = document.createElement('div');
        grids.setAttribute('class', 'grid-items');
        grids.style.border = '0.1px dashed rgb(187, 183, 252)';
        gridContainer.appendChild(grids);
    }
}
generalContainer.appendChild(gridContainer);
const colorButtons = document.createElement('div');
    colorButtons.setAttribute('class', 'color-buttons');
    generalContainer.appendChild(colorButtons);
const blackButton = document.createElement('button');
    blackButton.setAttribute('class', 'black-button')
    const button4 = document.createTextNode('Black');
    blackButton.appendChild(button4);
    blackButton.addEventListener('click', blackButtonFunction);
    function blackButtonFunction() {
            let blackInk = document.querySelectorAll('.grid-items')
            blackInk.forEach((item) => {
                item.addEventListener('mouseleave', (e) => {
                    e.target.style.backgroundColor = 'black';
                });
            });
    }
    colorButtons.appendChild(blackButton);
const rainbowButton = document.createElement('button');
    rainbowButton.setAttribute('class', 'rainbow-button')
    const button5 = document.createTextNode('Rainbow');
    rainbowButton.appendChild(button5);
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    rainbowButton.addEventListener('click', rainbowButtonFunction);
    function rainbowButtonFunction() {
            let rainbowInk = document.querySelectorAll('.grid-items')
            rainbowInk.forEach((item) => {
                item.addEventListener('mouseleave', (e) => {
                    e.target.style.backgroundColor =  colors[Math.floor(Math.random()*colors.length)];
                });
            });
        }
    colorButtons.appendChild(rainbowButton);
const selectColor = document.createElement('button');
    selectColor.setAttribute('class', 'select-color')
    const button6 = document.createTextNode('Select Color');
    selectColor.appendChild(button6);
    let chooseColor = document.createElement('input');
    chooseColor.setAttribute('type', 'color');
    chooseColor.setAttribute('value', '#FFFFFF');
    selectColor.appendChild(chooseColor);
    selectColor.addEventListener('click', selectColorFunction);
    function selectColorFunction() {
        let ink = document.querySelectorAll('.grid-items')
        ink.forEach((item) => {
            item.addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = chooseColor.value;
            });
        });
    }
    colorButtons.appendChild(selectColor);
function pixelFunction() {
    let size = Number(prompt('Choose Your Grid Size (1-100):'));
    if (size == null ) {
      return  createGrid(16);
    } else if (size < 1 || size > 100 || Number.isNaN(size)) {
       let correctSize= prompt('Kindly Input A Number Between 1-100');
       if (correctSize == null || correctSize == undefined || 
        correctSize > 100 || correctSize < 1) {
            clearGrid();
            return createGrid(16);
        } else {
            clearGrid();
            return createGrid(correctSize);
        }
    } else {
        clearGrid();
       return createGrid(size);
    }
}
createGrid(16);
