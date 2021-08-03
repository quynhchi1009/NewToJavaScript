/**
 * 1. Element
 * 2. AttributeL: id, class, title, charset, name, content
 * 3. Node
 */

//<h1> Heading <h1> -> them attribute vao element
//Cach1: chi nhung attribute nao thuoc element moi them vao duoc
var headingElement = document.querySelector('h1');
headingElement.title = 'Heading'
headingElement.id = 'Heading'
headingElement.className = 'Heading'

//Cach 2: them bat cu attribute nao cung duoc
headingElement.setAttribute('class', 'Heading')
headingElement.setAttribute('id', 'Heading')
headingElement.setAttribute('href', 'Heading')
headingElement.setAttribute('d', 'Heading')

console.log(headingElement.getAttribute('class'))
