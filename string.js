var fullName = new String('Chichi')
console.log(typeof fullName) //object

//backlash
var fullName = new String('Chichi la \'sieu nhan\'')

//do dai chuoi (tinh ca dấu cách)
console.log(fullName.length)

var firstName = 'Chi'
var lastName = 'Lai'
console.log('I am ' + firstName + ' ' + lastName)
console.log('I am ${firstName} ${lastName}')

//muốn viết dấu \ thì phải viết \\

//find index -> tra ve vi tri chuoi dau tien tim duoc
console.log(fullName.indexOf('ACDS'))
//tra ve vi tri chuoi dau tien tim duoc bat dau tu vi tri 6
console.log(fullName.indexOf('ACDS',6))
console.log(fullName.search('ACDS'))

//cut  chuoi String tu vi tri a den vi tri b (tu trai sang phai)
console.log(fullName.slice(1,3))
//cut  chuoi String tu vi tri a den vi tri b (tu phai sang trai)
//fullname.length - 1 o vi tri 0, sang trai dan - 1
console.log(fullName.slice(-3,-1))

//replace chu JS dau tien tim thay
console.log(fullName.replace('JS', 'JavaScript'))
//thay the tat ca chu JS trong chuoi
console.log(fullName.replace(/JS/g, 'JavaScript'))

//convert to UpperCase
console.log(fullName.toLowerCase())

//trim
fullName = '        Quynh Chi Lai             '
console.log(fullName.trim()) //Quynh Chi Lai

//split
var languages = 'JavaScript, Java, Puby'
console.log(languages.split(', '))

//get a character by index
const myString = 'Quynh Chi'
console.log(myString.charAt(2))