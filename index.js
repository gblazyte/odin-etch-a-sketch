const container = document.querySelector('.container');



function newGrid(size) {
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let num = size * size;
    for (i = 0; i < num; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
        square.addEventListener('mouseover', e => e.target.classList.add('div-color'));
    }
};


document.getElementById('btn').addEventListener('click', function () {
    let input = prompt('Choose the number of squares per side for the new grid');
    if (input < 1 || input > 100) {
        let input = prompt('Choose the number of squares per side between 1 and a 100 for the new grid');
    } else {
        newGrid(input);
    }
});


