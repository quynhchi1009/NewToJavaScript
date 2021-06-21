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


var courses = [
    {
        id = 1,
        name = 'JavaScript',
        coin = 250
    },{
        id = 2,
        name = 'HTML, CSS',
        coin = 0
    },{
        id = 3,
        name = 'Ruby',
        coin = 250
    },{
        id = 4,
        name = 'PHP',
        coin = 400
    },{
        id = 5,
        name = 'React JS',
        coin = 250
    }
]

//forEach(function(name){....})
courses.forEach(function(course) {
    console.log(course)
}) 
courses.forEach(function(course, index, array) {
    console.log(course, index, array)
}) 
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        console.log('Index:' ,index)
    }
}
courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})

/*
every(function(name){....}) 
-> Kiem tra tat ca cac phan tu cua mang Thoa man 1 Dk -> true
Moi lan lap qua 1 phan tu, se goi nguoc lai function. 
Neu dk dung se ktra phan tu 2. Neu dk sai, vong lap se dung.
*/
var isFree = courses.every(function(course) {
    return course.coin === 0
}) 
console.log(isFree)

/*
some(function(name){....}) 
-> Kiem tra 1 phan tu cua mang Thoa man 1 Dk -> true
Moi lan lap qua 1 phan tu, se goi nguoc lai function. 
Neu dk dung se dung lai. Neu dk sai, vong lap se tiep tuc.
*/
var isFree = courses.some(function(course) {
    return course.coin === 0
}) 
console.log(isFree)

/* 
find(function(name){....})
Lap qua tung phan tu, cho den khi tim thay. 
Neu tim duoc, se return phan tu dau tien tim duoc & ket thuc vong lap.
Neu khong tim duoc, se return UNDEFINDED
*/ 
var rubyCourse = courses.find(function(course) {
    return course.name === 'Ruby'
}) 
console.log(rubyCourse)

/*
filter(function(name){....})
Lap qua tung phan tu. 
Neu tim duoc, se return tat ca phan tu tim duoc.
Neu khong tim duoc, se return UNDEFINDED
*/
var rubyCourse = courses.filter(function(course) {
    return course.name === 'Ruby'
}) 
console.log(rubyCourse)


/* map (function(name){....})
Thay doi/ Chinh sua 1 phan tu trong day array
return ve 1 array new co so luong phan tu = so luong phan tu mang cu.
*/
var newCourses = courses.map(courseHandler);
function courseHandler(course, index) {
    //console.log(course) //in ra tung phan tu trong array
    return {
        id : course.id,
        name : 'Khoa Hoc: ${course.name}',
        coin: course.coin,
        coinText: 'Gia: ${course.coin}',
        index: index, 
        originArray: courses,
    };
}
function convertToString(numbers) { //numbers la 1 day array
    return newArray = numbers.map(function (value) {
        return String(value)
    })
}


/*
reduce(function(name){....})
return ve 1 ket qua duy nhat
*/
//Cach 1
var totalCoin = 0;
for (var course of courses) {
    totalCoin += course.coin;
}
console.log(totalCoin)
/*Cach 2
Có thể có inital value hoặc không có. 
Khi có initial value thì 1.parameter = initial value
Khi không có initial value thì phần tử đầu tiên của mảng = 1.parameter
Nếu return là kiểu dữ liệu gì thì initial value cũng kiểu dữ liệu đó
*/
var totalCoin = courses.reduce(function(total, course){
    return total + course.coin;
}, 0); //initial value
console.log(totalCoin)

//tinh tong day so
var number = [100, 200, 220, 200, 400];
var totalCoin = number.reduce(function (total, number) {
    return total + number
}) 

function run(courses) {
    return courses.reduce((total, course) => total + course.coin, 0);
}

//Flat- lam phang mang tu depth Array
//neu khong co initial Value thi 1.para se lay gia tri 1 (ko phai arr)
var depthArray = [1,2,[3,4],5,6,[7,8,9]]
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
},[])

//Lay ra cac khoa hoc va dua vao 1 mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            }, {
                id: 2, 
                title: 'Javascript'
            }
        ]
    }, {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: 'PHP'
            }, {
                id: 2, 
                title: 'NodeJs'
            }
        ]
    }
]
var newCourses = topics.reduce(function(course, topic){
    return course.concat(topic.courses)
}, [])


//includes 
var courses = ['PHP', 'Java', 'JS']
console.log(courses.includes('JavaScript')) //false
console.log(courses.includes('JavaScript', 12)) //tim tu vi tri 12
console.log(courses.includes('JavaScript', -1)) //tim tu vi tri array.length-1

// Đối tượng trong mảng
var book = [
    {name:'foreword', pageCount: 14},
    {name:'boyWhoLived', pageCount: 18},
    {name:'vanishingGlass', pageCount: 13},
    {name:'lettersFromNoOne', pageCount: 17},
    {name:'afterword', pageCount: 19}
]; 
book[1]['pageCount']
  // book[1] lấy ra đối tượng thứ hai trong mảng {name:'boyWhoLived', pageCount: 18}
  // book[1]['pageCount'] lấy ra giá trị của thuộc tính 'pageCount' của book[1]


  //empty element of array
  courses.length = 100 // nhung phan tu con lai se la undefined
  //-> dung for in
  for (var index in courses) {
      console.log(courses[index]) //chi in ra nhung phan tu khong phai la undefined
  }
