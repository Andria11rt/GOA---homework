
let btn = document.getElementById('btn')
let div = document.getElementById('Div')

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', function() {
    let newColor = getRandomColor();
    divElement.style.backgroundColor = newColor;
});