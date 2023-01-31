/* Перше */

/*const USER_NUMBER_ONE = Number(prompt('Введіть будь яке перше число діапазону!'));
const USER_NUMBER_TWO = Number(prompt('Введіть будь яке друге число діапазону!'));
let myArray = [];
let sum = 0;
for (let i = USER_NUMBER_ONE; i <= USER_NUMBER_TWO; i++) {
    myArray.push(i)
}
console.log(myArray);

let result = myArray.reduce((a, b) => {
    return a + b;
});

console.log(result);
*/

/* Друге */

function gcd(a, b) {
    while(a != b){
        if(a > b) {
            a -= b;
        }
        else {
            b -= a;
        } 
    }
    return a;
}
const x = prompt('1')
const y = prompt('2')
var result = gcd(x, y);
console.log(result);
  








