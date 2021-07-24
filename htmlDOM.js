/* HTML DOM (Document Object Model) = quy chuẩn của W3C đưa ra
https://www.w3schools.com/js/js_htmldom.asp

Có 3 thành phần : Element, Attribute, Text
1. ELement: <h1>, <body>, <a>
2. Attribute: class, id, title, href, src,...
        <h1 class='' id=''> 
3. Text: cjcaiisdh
Element -> Attribute -> Text (neu ko co element thi ko co Attribute....)
Node

-----------------------------------------------

JavaScript : Browser | Server (NodeJs)
1. Browser: HTML -> tạo ra DOM -> Web API
document.
*/

//console.log(document)

/* Get Element Methods
Cach get node trong DOM: get qua ID, class, tag, CSS selector, HTML Collection
*/
/* 1. qua ID
        <h1 id = 'heading'>JavaScript Basic</h1>
Khi co nhieu element co IDs giong nhau -> Hien ra element dau tien tim dc
*/
// var headingNode = document.getElementById('heading')
// console.log(headingNode) //in ra element
// console.log({ //in ra object h1
//         element: headingNode
// })



/*2. qua className 
        <h1 class = 'heading'>JavaScript Basic</h1>
Khi co nhieu element co class giong nhau -> Hien ra tat ca elements
 */
// var headingNode = document.getElementsByClassName('heading')
// console.log(headingNode) //in ra HTML Collection [element1, element2,..]



/*3. qua tagName 
        <p class = 'heading'>JavaScript Basic</p>
Khi co nhieu element co class giong nhau -> Hien ra tat ca elements
 */
// var headingNode = document.getElementsByTagName('p')
// console.log(headingNode) //in ra HTML Collection [element1, element2,..]


/*3. qua CSS selector 
        <h1 id = 'heading'>JavaScript Basic</h1>
    <div class = 'box'>
        <h2 class = 'heading-2'>HTML DOM</h2>
        <h2 class = 'heading-2'>HTML DOM</h2>
        <h2 class = 'heading-2'>HTML DOM</h2>
        <h2 class = 'heading-2'>HTML DOM</h2>
    </div>
Khi co nhieu element co id giong nhau -> Hien ra element dau tien
 */
// var headingNode = document.querySelector('.heading')
// console.log(headingNode) //in ra element dau tien 
// var heading2Node = document.querySelector('.box.heading-2') //in ra element dau tien
// var firstHeading2Node = document.querySelector('.box.heading-2:first-child')
// headingNode = document.querySelector('.box.heading-2:nth-child(2)')
// var headingNodes = document.querySelectorAll('.box.heading-2') //in ra NodeList chua cac elements
// console.log(headingNodes[2]) //in ra element thu 3



/*3. qua HTML collection
        <form action='' id ='form-1'></form>
        <form action='' id ='form-2'></form>
Khi co nhieu element co class giong nhau -> Hien ra tat ca elements
 */
// console.log(document.forms) //in ra HTML Collection chua cac elements
// console.log(document.forms[4]) //in ra element thu 5
// console.log(document.forms['form-1']) //in ra element co id la form-1
// console.log(document.forms.form-1) //in ra element co id la form-1

// console.log(documennt.anchors) //in ra tat ca cac the a co name



//Lấy tag con (tag bên trong) 1 tag
var listItemNodes = document.querySelectorAll('.box1 li')
console.log(listItemNodes); // in ra NodeList [ li, li ]

//Task1 : sử dụng tới boxNode
var boxNodes = document.querySelector('.box1')
console.log(boxNodes); // in ra <div class="box1">...</div>
//Task2: sử dụng tới cái li elements là con của '.box1'
console.log(boxNodes.querySelector('li')); // in ra <li> dau tien
console.log(boxNodes.getElementsByTagName('li')); // in ra HTMLCollection { 0: li, 1: li, length: 2 }
console.log(boxNodes.querySelector('p')); // in ra <p> dau tien