/*
 Vong lap - loop

 1. for - lap voi dk dung
 2. for/in - lap qua key cua object
 3. for/of - lap qua value cua object
 4. while - lap khi dk dung
 5. do/while - lap it nhat 1 lan, sau do lap khi dk dung

*/

//1. for
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

var i = 1;
for(; i < 100;) {
    i++;
    console.log(i)
}


//2. For/in
var myInfo = {
    name: 'Quynh Chi',
    age: 21,
    address: 'Hanoi, Vietnam'
}
//chaỵ từng key
for (var key in myInfo) {
    console.log(key) //name, age, address
    console.log(myInfo[key]) //Quynh Chi, 21, Hanoi, Vietnam
}
var languages = ['Java', 'JavaScript', 'Ruby', 'PHP']
for (var key in languages) {
    console.log(key) //0, 1, 2, 3
    console.log(languages[key]) //Java, JavaScript, Ruby, PHP
}
//lấy key là dạng số của 1 chuỗi
var myString = 'JavaScript'
for (var key in myString) {
    console.log(key) //0, 1, 2, 3,4,5,6,7,8,9
    console.log(myString[key]) //J,a,v,a,S,c,r,i,p,t
}


/*For/of loop 
-> lấy phần tử của 1 mảng, lấy từng chữ cái của 1 chuỗi
ko dùng với Object
*/
for (var value of languages) {
    console.log(value) //Java, JavaScript, Ruby, PHP
}
for (var value of myString) {
    console.log(value) //J,a,v,a,S,c,r,i,p,t
}
console.log(Object.keys(myInfo)) //tra ve 1 mang ['name', 'age', 'address']
for (var value of Object.keys(myInfo)) {
    console.log(value) //name, age, address
    console.log(myInfo[value]) //Quynh Chi, 21, Hanoi, Vietnam
}
console.log(Object.values(myInfo)) //tra ve 1 mang ['Quynh Chi', '21', 'Hanoi, vietnam']
for (var value of Object.values(myInfo)) {
    console.log(value) //Quynh Chi, 21, Hanoi, Vietnam
}

//while loop
var i = 0
while (i < 10) {
    i++
    console.log(i)
}

/* do, while loop
kiểm tra đk từ lần 2
*/
do {
    i++
    console.log(i)
} while (i < 10)

var isSuccess = false
do {
    i++
    console.log('Nap the lan' + i)
    if (true) {
        isSuccess = true
    }
} while (!isSuccess && i < 3)


//break -> thoat khoi vong lap
//continue -> bo qua nhung dong tiep theo, chay 1 vong lap moi
for (var i = 0; i < 10; i++) {
    console.log(i)
    if (i >= 5) {
        break
    }
}
//in ra so chan
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
}

//nested loop
var myArray = [
    [1,2], [3,4], [5,6]
]
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; i < myArray[j].length; j++) {
        console.log(myArray[i][j]) //1,2,3,4,5,6
    }
}

//in ra gia tri tu 100 den 1
for (var i = 100; i > 1; i--) {
    console.log(i)
}
//in ra gia tri cach nhau 5 don vi
for (var i = 0; i <= 100; i+=5) {
    console.log(i)
}