const headerContainer = document.createElement('div');
headerContainer.setAttribute('id', 'title-div');
document.body.appendChild(headerContainer);
let heading = document.createElement('H1');
heading.classList.add('title-name');
const title = document.createTextNode('Etch-A-Sketch');
heading.appendChild(title);
headerContainer.appendChild(heading);