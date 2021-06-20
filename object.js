/* OBJECT */
var emailKey = 'email'
var myInfo = {
    'full-name': 'Quynh Chi', //Property (Key: value)
    age: 21, 
    address: 'HaNoi',
    [emailKey]: 'happyjoonsi@icloud.com',
    getName: function() { //method
        return this.name
    }
}
var myKey = 'address'

//them gia tri vao object
myInfo.email = 'quynhchi1009@yandex.com'
myInfo['my-email'] = 'quynhchi1009@yandex.com'

console.log(myInfo.age) //21
console.log(myInfo['email']) //undefined
console.log(myInfo['address']) //Hanoi
console.log(myInfo[myKey]) //Hanoi
console.log(myInfo.getName) //in ra ben trong fct
console.log(myInfo.getName()) //Quynh Chi

//xoa gia tri trong object
delete myInfo.age


/* OBJECT constructor */
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return '${this.firstName} ${this.lastName}'; 
    }
}
var author = new User('Chi', 'Lai', 'Anh 1');
var user = new User('Duc', 'Dang', 'Anh 2');
author.title = 'Chia se dao tao tai F8'
user.comment = 'Lieu co khoa hoc asp khong ad?'
console.log(user.getName())


/* OBJECT prototype 
them property vao constructor da tao
*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return '${this.firstName} ${this.lastName}'; 
    }
}
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Chi', 'Lai', 'Anh 1');
var user = new User('Duc', 'Dang', 'Anh 2');
console.log(user.className)
console.log(user.getClassName())


//DATE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=vi
var date = new Date()
console.log(date) //typeof date = object

var date = Date()
console.log(date) //typeof date = string

var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDay()
console.log('${day}/ ${month}/ ${year}')
//trong console có thể code: date.getHours()
//                            date.getSeconds()


