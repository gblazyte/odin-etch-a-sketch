const container = document.querySelector('.container');

//console.log(container);

function newGrid(num) {
    let size = num * num;
    for (i = 0; i < size; i++) {
        const square = document.createElement('div')
        square.className = 'square';
        container.appendChild(square);
        square.addEventListener('mouseover', e => e.target.classList.add('div-color'));
    }
};


document.getElementById('btn').addEventListener('click', function () {
    let input = prompt('Choose the number of squares per side for the new grid');
    if (input > 100) {
        let input = prompt('Choose the number of squares per side between 1 and a 100 for the new grid');
    } else {
        newGrid(input);
    }
});


