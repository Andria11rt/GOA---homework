
let out = document.getElementById('out');
let inn = document.getElementById('inne');
let btn = document.getElementById('btn');

out.addEventListener('click', function() {
    console.log('outer clicked');
})

inn.addEventListener('click', function() {
    console.log('inner clicked');
})

btn.addEventListener('click', function() {
    console.log('button clicked');
})