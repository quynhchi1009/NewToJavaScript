/**
 * DOM Events
 * cach1: Attribute events
 * Cach2: Assign event using node element
 */

/**
 * khi click vao se in ra element h1
 * <h1 onclick ="console.log(this)">DOM Events </h1>
 * 
 * khi klick se in ra DOM Events
 * <h1 onclick ="console.log(this.innerText)">DOM Events </h1>
 * 
 * khi click se in ra va the h1 va span
 * <h1 onclick ="console.log(this.innerText)">
 *      <span>DOM Events 1</span>
 * </h1>
 * <h1 onclick ="console.log(this.innerText)">
 *      <span>DOM Events 2</span>
 * </h1>
 * <h1 onclick ="console.log(this.innerText)">
 *      <span>DOM Events 3</span>
 * </h1>
 */

var h1Element = document.querySelector('h1')
h1Element.onclick = function() {
    console.log(Math.random)
}
h1Element.onclick = function(e) {
    console.log(e) //return <h1>...</h1>
}
h1Element.onclick = function(e) {
    console.log(e.target) //return <span>DOM Events</span>
}
for (var i = 0; i < h1Elements.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target)
        console.log(h1Elements[i]) //undefined
    }
}

/**
 * DOM Events: Click/select
 */
var inputValue
var inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function(e) { //thay doi khi click chuot ra khoi input
    console.log(e.target.value)
}
inputElement.oninput = function(e) { //return ra chu trong input
    inputValue = e.target.value
}

var inputElement = document.querySelector('input[type="checkbox"]')
inputElement.onchange = function(e) { 
    console.log(e) //return Event
    console.log(e.target) //return Element
    console.log(e.target.checked)
}

var inputElement = document.querySelector('select')
inputElement.onchange = function(e) { 
    console.log(e.target) //return Element
    console.log(e.target.value) //return value trong the option
}

/**
 * DOM Events: Keyup/ down/ press
 * Onkeypress khong nhan phim Esc(27)
 */
 var inputElement = document.querySelector('input[type="text"]')
 inputElement.onkeydown = function(e) { //thay doi khi click chuot ra khoi input
     console.log(e) //return KeyboardEvent
     console.log(e.which) //return phim nao user vua click
     switch(e.which) {
         case 27:  //Esc
            console.log('Exit');
            break;
     }
 }
 document.onkeypress = function(e) { //khi click vao bat ki cho nao tren trang web
    switch(e.which) {
        case 13:
            console.log('Message');
            break;
    }
}

/**
 * DOM Events: PreventDefault
 */
var aElements = document.querySelectorAll('a')
//hoac
var aElements = document.links;
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        console.log(e.target.href)
    }
}


