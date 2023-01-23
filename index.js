const container = document.querySelector('.container');

//console.log(container);

// for (i = 0; i < 256; i++) {
//     const square = document.createElement('div')
//     square.className = 'square';
//     container.appendChild(square);
//     square.addEventListener('mouseover', e => e.target.classList.add('div-color'));


// }

document.getElementById('btn').addEventListener('click', function () {
    let input = prompt('Choose the number of squares per side for the new grid');
    if (input > 100) {
        let input = prompt('Choose the number of squares per side between 1 and a 100 for the new grid');
    } else {
        let num = input * input;
        for (i = 0; i < num; i++) {
            const square = document.createElement('div')
            square.className = 'square';
            container.appendChild(square);
            square.addEventListener('mouseover', e => e.target.classList.add('div-color'));
        }
    }

})

