/*

1. getElementbyID -> tra ve truc tiep 1 element
2. getElementsbyTagName
3. getElementsbyClassName
4. querySelector -> tra ve truc tiep 1 element
5. querySelectorAll

6. HTML Collection

7. document.write //viet truc tiep js vao the html
*/

var heading = document.querySelector('#heading');
console.log(heading) // in ra element: <h1 id='heading' class='heading'>Heading 1</h1>

var headings = document.getElementsByTagName('h1');
console.log(headings) //in ra HTMLCollection ~ array chua 2 elements
console.log(headings[0]) // in ra element: <h1 id='heading' class='heading'>Heading 1</h1>
//hoac
var heading1 = document.getElementsByTagName('h1')[0];

var headings = document.getElementsByClassName('heading'); //in ra HTMLCollection ~ array
var headings = document.querySelectorAll('.heading'); //in ra NodeList
console.log(headings[0])
//hoac
for (var i = 0; i < headings.length; i++) {
    console.log(headings[i])
}

console.log(document.forms) //in ra HTMLCollection
console.log(document.forms['form-1'])
//hoac
console.log(document.forms[0])

document.write('HELLO') 
//hoac document.write trong file index2.html