const container = document.querySelector('.container');

//console.log(container);

for (i = 0; i < 256; i++) {
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);

}