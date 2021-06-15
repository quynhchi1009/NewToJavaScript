function Dialog() {
    alert('Xin Chao Cac Ban')
}

function test(message, mess2) {
    alert(message)
    alert(mess2)
}

function writeLog() {
    //chi su dung trong function
    console.log(arguments)
}
writeLog('Hello everyone', 'chichi')

function writeLog2() {
    var myString = ''
    for (var param of arguments) {
        myString += '${param} - '
    }
    console.log(myString)
}
writeLog2('log1' , 'log2' , 'log3', 4, 5, 6)

var isConfirm = confirm('Message?')
console.log(isConfirm)

function cong(a, b) {
    return a + b;
}
function cong(a, b) {
    return a - b;
}
cong(1,2) //function sau ghi de function truoc

//1. Declaration function
Dialog() //co the goi fct truoc khi dinh nghia function
function Dialog() {
    alert('Xin Chao Cac Ban')
}

//2. Expression function
var mess = function test() {
}

//3.Arrow function
setTimeout(function test() {
})
var myObject =  {
    myfunction: function test(){
    }
}