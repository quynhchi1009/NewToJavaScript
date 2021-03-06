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
//Cach 1
courses.forEach(function(course) {
    console.log(course)
}) 
courses.forEach(function(course, index, array) {
    console.log(course, index, array)
}) 
//Cach 2
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
-> Kiem tra tat ca cac phan tu cua mang Thoa man 1 Dk -> return true
Moi lan lap qua 1 phan tu, se goi nguoc lai function. 
Neu dk dung se ktra phan tu 2. Neu dk sai, vong lap se dung -> return false
*/
//Cach 1
var isFree = courses.every(function(course) {
    return course.coin === 0
}) 
console.log(isFree)
//Cach 2
Array.prototype.every2(function(callback){
    var output = true
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false
                break
            }
        }
    }
    return output
})
var isFree = courses.every2(function(course, index, array) {
    return course.coin > 500
}) 

/*
some(function(name){....}) 
-> Kiem tra co min 1 phan tu cua mang Thoa man 1 Dk -> true
Moi lan lap qua 1 phan tu, se goi nguoc lai function. 
Neu dk dung se dung lai => return true. Neu dk sai, vong lap se tiep tuc.
*/
//Cach 1
var isFree = courses.some(function(course, index, array) {
    return course.coin === 0
}) 
console.log(isFree)
//Cach 2
Array.prototype.some2(function(callback) {
    for (var index in this ) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }
        }
    }
    return false
})
var isFree = courses.some2(function(course, index, array) {
    return course.coin === 0
}) 

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
Neu tim duoc, se return 1 mang bao gom tat ca phan tu tim duoc.
Neu khong tim duoc, se return UNDEFINDED
*/
//Cach 1
var rubyCourse = courses.filter(function(course) {
    return course.name === 'Ruby'
}) 
console.log(rubyCourse)
//Cach 2
Array.prototype.filter2(function(callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
})
var rubyCourse = courses.filter2(function(course, index, array) {
    return course.name === 'Ruby'
}) 


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
C?? th??? c?? inital value ho???c kh??ng c??. 
Khi c?? initial value th?? 1.parameter = initial value
Khi kh??ng c?? initial value th?? ph???n t??? ?????u ti??n c???a m???ng = 1.parameter
N???u return l?? ki???u d??? li???u g?? th?? initial value c??ng ki???u d??? li???u ????
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


// ?????i t?????ng trong m???ng
var book = [
    {name:'foreword', pageCount: 14},
    {name:'boyWhoLived', pageCount: 18},
    {name:'vanishingGlass', pageCount: 13},
    {name:'lettersFromNoOne', pageCount: 17},
    {name:'afterword', pageCount: 19}
]; 
book[1]['pageCount']
  // book[1] l???y ra ?????i t?????ng th??? hai trong m???ng {name:'boyWhoLived', pageCount: 18}
  // book[1]['pageCount'] l???y ra gi?? tr??? c???a thu???c t??nh 'pageCount' c???a book[1]


  //empty element of array
  courses.length = 100 // nhung phan tu con lai se la undefined
  //-> dung for in
  for (var index in courses) {
      console.log(courses[index]) //chi in ra nhung phan tu khong phai la undefined
  }
