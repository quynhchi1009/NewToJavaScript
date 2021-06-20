var course = {
    name: 'JavaScript',
    coin: 250
}
// if (course.coin > 0) {
//     console.log('$(course.coin) Coins')
// } else {
//     console.log('Mien phi')
// }
var result = course.coin > 0 ? '$(course.coin) Coins' : 'Mien phi';
console.log(result)