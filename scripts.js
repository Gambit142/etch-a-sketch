const utilityButtons = document.createElement('div');
    utilityButtons.setAttribute('class', 'utility-buttons');
let generalContainer = document.getElementById('general-container');
    generalContainer.appendChild(utilityButtons);
const backgroundButton = document.createElement('button');
    backgroundButton.setAttribute('class', 'background-button');
    const button1 = document.createTextNode('Change Background');
    backgroundButton.appendChild(button1);
    utilityButtons.appendChild(backgroundButton);
const eraserButton = document.createElement('button');
    eraserButton.setAttribute('class', 'eraser-button');
    const button2 = document.createTextNode('Eraser');
    eraserButton.appendChild(button2);
    utilityButtons.appendChild(eraserButton);
const clearButton = document.createElement('button');
    clearButton.setAttribute('class', 'clear-button')
    const button3 = document.createTextNode('Clear');
    clearButton.appendChild(button3);
    utilityButtons.appendChild(clearButton);
const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    generalContainer.appendChild(gridContainer)
const colorButtons = document.createElement('div');
    colorButtons.setAttribute('class', 'color-buttons');
    generalContainer.appendChild(colorButtons);
const blackButton = document.createElement('button');
    blackButton.setAttribute('class', 'black-button')
    const button4 = document.createTextNode('Black');
    blackButton.appendChild(button4);
    colorButtons.appendChild(blackButton);
const rainbowButton = document.createElement('button');
    rainbowButton.setAttribute('class', 'rainbow-button')
    const button5 = document.createTextNode('Rainbow');
    rainbowButton.appendChild(button5);
    colorButtons.appendChild(rainbowButton);
const selectColor = document.createElement('button');
    selectColor.setAttribute('class', 'select-color')
    const button6 = document.createTextNode('Select Color');
    selectColor.appendChild(button6);
    colorButtons.appendChild(selectColor);