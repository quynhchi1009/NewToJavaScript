/*
Number.isFinite() 	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger() 	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat() Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt() 	Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed() 	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString() 	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/

var age = 18
var PI = 3.14
var otherNumber = new Number(9)
console.log(typeof otherNumber) //Object
console.log(age) //number

var result = 20 / 'ABC' 
console.log(result) //NaN = số khôgn hợp lệ
console.log(typeof result) //number
console.log(isNaN(result))

//JS methods with numbers
var myString = age.toString()
console.log(PI.toFixed()) //lam tron thanh so nguyen, chuyen Pi thanh String
console.log(PI.toFixed(3))//lay 2 so sau dau phay

