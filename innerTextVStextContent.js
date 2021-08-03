var headingElement = document.querySelector('h1')
//hoac
var headingElement = document.querySelector('.heading')

//getter
console.log(headingElement.innerText)
console.log(headingElement.textContent)

//setter
headingElement.innerText = 'new Heading'
headingElement.innerText = '<h1>new Heading</h1>' //in ra ca <h1>new Heading</h1>
headingElement.textContent = 'new Heading'

/**
 * <h1 class = 'heading'>
 * 
 *  <span>Heading </span>
 *  <span>text </span>
 * 
 * </h1>
 * 
 * Khi dung voi innerText -> get se in ra nhung gi minh nhin thay tren web: Heading text
 * Khi dung voi textContent -> get se in ra
 * 
 *          Heading
 *          text
 * 
 */
