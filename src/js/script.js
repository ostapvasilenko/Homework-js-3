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

/*let hcf;
const number1 = Number(prompt('Введіть перше число!: '));
const number2 = Number(prompt('Введіть друге число!: '));

for (let i = 1; i <= number1 && i <= number2; i++) {

    if(number1 < 0 && number2 < 0){
        alert('Ви ввели невірне число!!!')
    } else if ( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    } 
}

alert('Ваш найбільший спільний дільник: ' + hcf);*/

/* Третє */

/*const NUM = Number(prompt('Введіть будь яке додатнє число!: '));

if (NUM < 0) {
    console.log('Ви ввели від’ємне число!!!');
} else {
    console.log(`Дільниками введеного вами числа (${NUM}) є:`);
    for (let i = 1; i <= NUM; i++) {
        if (NUM % i == 0) {
            console.log(i);
        }
    }
}*/

/* Четверте */

/*const NUM = Number(prompt('Введіть будь яке число!'));
const digits = (NUM, count = 0) => {
    if (NUM) {
        return digits(Math.floor(NUM / 10), ++count);
    };
    return count;
};
alert('Кількість цифр у заданому вами числі = ' + digits(NUM));*/

/* Пяте */















