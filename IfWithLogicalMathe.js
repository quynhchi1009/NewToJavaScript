var a = 1;
var b = 2
var result = a < b && a < 0
console.log(result) //false (chi tra ve ket qua cuoi cung a<0, chu kphai &&)

var result2 = 'a' && 'b' && 'c'
console.log(result2) //c

/* Khi su dung toan tu &&, máy sẽ đọc từ trái qua phải. 
Khi gặp giá trị a không phải Falshy Boolean (NaN, null, false, undefined, 0,'')
thì sẽ đọc sang giá trị b & gán giá trị cho result2.
var result2 = 'a' && 'b'
console.log(result2) //b

Nếu gặp giá trị Falshy Boolean -> in ra giá trị đó
var result2 = null && 'a' && 'b'
console.log(result2) //null
var result2 = 'c' && 'a' && 'b' && NaN && 'd'
console.log(result2) //NaN
*/

/* Khi su dung toan tu || máy sẽ đọc từ trái qua phải. 
Khi gặp giá trị a không phải Falshy Boolean (NaN, null, false, undefined, 0,'')
thì gán giá trị cho result2.
var result2 = 'a' || 'b'
console.log(result2) //a

Nếu gặp giá trị Falshy Boolean -> in ra giá trị đầu tiên ko phải là Falschy
var result2 = 'c' || 'a' || 'b' || NaN || 'd'
console.log(result2) //c
*/
