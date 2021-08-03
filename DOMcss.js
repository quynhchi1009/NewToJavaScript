//DOM style

var boxElement = document.querySelector('.box')
console.log(boxElement.style)

//cach1
boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';

//cach2
Object.assign (boxElement.style, {
    width: '200px',
    height: '300px',
    backgroundColor: 'green'
})