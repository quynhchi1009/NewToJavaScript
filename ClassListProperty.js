//DOMTokenList: add, contains, remove, toggle

var boxElement = document.querySelector('.box')
console.log(boxElement.classList)
/**
 * <div class='box       box-2 box-2></div>
 * tra ve DOMTokenList -> quan ly class cua element
 * 
 * 0: "box" (class dau tien)
 * 1: "box-2" (class thu 2)
 * length: 2 (so luong class trong element)
 * value: "box       box-2 box-2" (gtri dang String)
 */

 console.log(boxElement.classList.length) //2
 console.log(boxElement.classList[0]) //box

 //add class style.red vao the div
 boxElement.classList.add('red', 'blue')
 console.log(boxElement.classList.contains('red')) //true
setTimeout(() => {
    boxElement.classList.toggle('red') //Neu co class do thi xoa, ko co thi add
}, 3000)
