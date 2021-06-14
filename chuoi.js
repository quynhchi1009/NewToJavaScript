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

//cut  chuoi String tu vi tri a den vi tri b
console.log(fullName.slice(1,3))