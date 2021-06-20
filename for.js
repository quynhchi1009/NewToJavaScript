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