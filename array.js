var language = 'JavaScript'

var languages = [
    'JavaScript',
    'Ruby',
    'Java',
]
console.log(languages)
console.log(typeof languages) //object
console.log(Array.isArray(languages)) //true
console.log(Array.isArray([])) //true
console.log(Array.isArray(new Array(1,2))) //true

console.log(languages.length)
console.log(languages[0]) //JavaScript


var languages2 = new Array(
    'JavaScript',
    'Ruby',
    'Java',
    null,
    undefined,
    '',
    funktion(),
    {},
    123
)

// JAVASCRIPT Array methods
//toString
console.log(language.toString()) //JavaScript,Ruby,Java
console.log(language.join()) //JavaScript,Ruby,Java
console.log(language.join(', ')) //JavaScript, Ruby, Java

//pop -> xoa di phan tu cuoi cung, tra ve phan tu da xoa
console.log(language.pop()) //Java
console.log(language) //JavaScript,Ruby
console.log(language.pop()) //Ruby
console.log(language.pop()) //JavaScript
console.log(language.pop()) //undefined

//shift -> xoa di phan tu dau tien, tra ve phan tu da xoa
console.log(language.shift()) //JavaScript
console.log(language.shift()) //Ruby
console.log(language.shift()) //Java
console.log(language.shift()) //undefined

//push -> them 1 hoac nhieu phan tu vao cuoi mang, tra ve do dai moi cua mang
console.log(language.push('Dart', 'PHP')) //5

//unshift them 1 hoac nhieu phan tu vao dau mang, tra ve do dai moi cua mangconsole.log(language.push('Dart', 'PHP')) //5
console.log(language.unshift('Dart', 'PHP')) //5

//splice -> xoa 3 phan tu tu vi tri 1
language.splice(1,3)
language.splice(1, 0 , 'Dart' )
console.log(language) //JavaScript,Dart,Ruby,Java
language.splice(1, 0 , 'Dart', 'chi' )
console.log(language) //JavaScript,Dart,chi,Ruby,Java

//concat -> noi 2 arrays.
console.log(language.concat(languages2))

//slice -> cat element trong array tu vi tri 1 den 2
console.log(language.slice(1,2))
//slice -> cat element trong array tu vi tri 1 den het mang
console.log(language.slice(1))
//slice -> copy mang
console.log(language.slice(0))
//slice -> cat element trong array tu vi tri -2 den -1
console.log(language.slice(-2, -1))