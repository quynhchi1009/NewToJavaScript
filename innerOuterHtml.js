//innerHTML -> them node element 


//them 1 the h1 vao ben trong <div class='box></div>
var boxElement = document.querySelector('.box')
boxElement.innerText = '<h1>new Heading</h1>' //them vao <h1>new Heading</h1>
boxElement.innerHTML = '<h1>new Heading</h1>' //them vao element h1 voi text la new Heading
boxElement.innerHTML = '<h1 title="heading">new Heading</h1>'
console.log(document.querySelector('h1').innerText) //in ra text cua h1

//getter: lay ra het the ben trong
console.log(boxElement.innerHTML)//in ra the ben trong: <h1>New Heading</h1>
console.log(boxElement.outerHTML)//in ra the ben ngoai+ trong <div><h1>New Heading></h1></div>

//setter
boxElement.innerHTML = '<span>Test</span>' //ghi de (xoa) tat ca the ben trong
boxElement.outerHTML = '<span>Test</span>' //xoa ca <div></div> va thay bang <span></span>
