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

let hcf;
const number1 = prompt('Введіть перше число!: ');
const number2 = prompt('Введіть друге число!: ');

for (let i = 1; i <= number1 && i <= number2; i++) {

    if(number1 < 0 || number2 < 0){
        alert('Ви ввели невірне число!!!')
    } ( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    } 
}

alert('Ваш найбільший спільний дільник: ' + hcf);

// const USER_NUMBER_ONE = prompt('Введіть перше число!');
// const USER_NUMBER_TWO = prompt('Введіть друге число!');
// function NCD(a, b) {
//     while (a != b) {
//         if (a > b) {
//             a -= b;
//         }

//         else {
//             b -= a;            
//         }
//         return a;
//     }
    
// }

// let result = NCD(USER_NUMBER_ONE, USER_NUMBER_TWO);
// alert('Ваш найбільший спільний дільник: ' + result);









