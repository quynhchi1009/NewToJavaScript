console.log(typeof a) //check which data type is this

//number
var a = 1

//String
var b = 'Chi'

//boolean
var isSuccess = true
console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true
//Convert to Boolean: !!value
//convert to number: function (value) {return Number(value)}
//*Truthy boolean
console.log(!!'hi') // true. 
console.log('0') //(một chuỗi chứa số không)
console.log(' ') //(một chuỗi chứa dấu cách)
console.log('false') //(một chuỗi chứa từ khóa false)
console.log([]) //(một array trống)
console.log({}) //(một object trống)
console.log(function(){}) //(một hàm “trống”)

//*Falsy boolean (chi co 6 giá trị sau)
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false


//undefined Type
var age

//null
var isNull = null

//Symbol
var id = Symbol('id') //-> unique

//Function
var myFunction = function () {
    alert('Hello')
}
//aufrufen: myfunction()

//Object types ( phai co dau , de ngan cach giua cac thuoc tinh)
var myObject = {
    name = 'Quynh Chi',
    age = 21,
    address = 'Hanoi',
    myFunction()
};

var myArray = [
    'JavaScript',
    'Java',
    'Ruby'
]
console.log(myArray)

/*
document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
*/

var a = 1;
var b = 2
if (a < b) {
    console.log('a < b')
} else {
    console.log('a > b')
}
