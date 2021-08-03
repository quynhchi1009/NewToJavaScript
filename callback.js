/*
La ham (function) duoc truyen qua doi so khi goi ham khac
*/

function myFunction(parameter){
    console.log(parameter)
}
myFunction(234234)


Array.prototype.map2 = function(callback) {
    console.log(this);
    var output = [], arrayLength = this.Length
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}
var courses = [
    'Java', 'JavaScript', 'HTML'
]
var htmls = courses.map2(function(course){
    return '<h2>${course}</h2>'
})