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

/*let myArray = [];
let counter = [0, 0, 0];
let counterPar = 0;
let counterNepar = 0;

for (let i = 1; i <= 10; i++) {
    let number = Number(prompt('Введіть число № ' + i))
    myArray.push(number);
}
myArray.forEach(function (elem) {
    if (elem < 0)
        counter[1]++;
    else if (elem > 0)
        counter[2]++;
    else
        counter[0]++;
});
myArray.forEach(function (elem) {
    if (elem % 2 === 0) {
        counterPar++
    } else if (elem % 2 !== 0) {
        counterNepar++
    }
})

console.log(myArray);
console.log(`У числі яке ви ввели є ${counter[2]} додатніх чисел`);
console.log(`У числі яке ви ввели є ${counter[1]} від’ємних чисел`);
console.log(`У числі яке ви ввели є ${counter[0]} нулів`);
console.log(`У числі яке ви ввели є ${counterPar} парних чисел`);
console.log(`У числі яке ви ввели є ${counterNepar} непарних чисел`);*/

/* Шосте */

/*
while (true) {
    let number1 = Number(prompt('Введіть перше число'))
    let number2 = Number(prompt('Введіть друге число'))
    let calculation = prompt('Виберіть операцію яку хочуте зробити з числами (додати, відняти, помножити чи поділити)')
    switch (calculation) {
        case ('+'):
            alert(number1 + number2)
            break;
        case ('-'):
            alert(number1 - number2)
            break;
        case ('*'):
            alert(number1 * number2)
            break;
        case ('/'):
            alert(number1 / number2)
            break;
        default:
            alert('Ви вибрали невірну операцію!!!')

    }
    let operation = prompt('Бажаєте розв’язати ще один приклад?\n 1 - ТАК \n 2 - НІ');
    if (operation == 2) {
        break;
    }
}*/


/* Сьоме */

/*let userNumber = prompt('Введіть будь яке число!')
let deposition = prompt('Введіть на скільки цифр ви хочете змістити число (не більше 5!)')
let array = Array.from(userNumber.toString(), Number)
let newArray = []
if (userNumber < 0) {
    alert('Ви ввели від’ємне число!!!')
} else {
    switch (deposition) {
        case ('1'):
            array.push(array[0])
            array.splice(0, 1)
            console.log(array)
            break;
        case ('2'):
            array.push(array[0], array[1])
            array.splice(0, 2)
            console.log(array)
            break;
        case ('3'):
            array.push(array[0], array[1], array[2])
            array.splice(0, 3)
            console.log(array)
            break;
        case ('4'):
            array.push(array[0], array[1], array[2], array[3])
            array.splice(0, 4)
            console.log(array)
            break;
        case ('5'):
            array.push(array[0], array[1], array[2], array[3], array[4])
            array.splice(0, 5)
            console.log(array)
            break;
        default:
            alert('Ви вибрали невірну цифру!!!')
    }

}
*/

/* Восьме */

/*while (true) {
    let days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя']
    let day = Number(prompt('Введіть день тижня цифрою: \n 1 - Понеділок \n 2 - Вівторок\n 3 - Середа\n 4 - Четвер\n 5 - П’ятниця\n 6 - Субота\n 7 - Неділя'))
    switch (day) {
        case (1):
            alert(`Наступний день тижня це: ${days[1]} `)
            break;
        case (2):
            alert(`Наступний день тижня це: ${days[2]} `)
            break;
        case (3):
            alert(`Наступний день тижня це: ${days[3]} `)
            break;
        case (4):
            alert(`Наступний день тижня це: ${days[4]} `)
            break;
        case (5):
            alert(`Наступний день тижня це: ${days[5]} `)
            break;
        case (6):
            alert(`Наступний день тижня це: ${days[6]} `)
            break;
        case (7):
            alert(`Наступний день тижня це: ${days[0]} `)
            break;
        default:
            alert('Ви ввели невірну цифру!!!')
    }
    let operation = prompt('Бажаєте ще побачити назву наступного дня тижня?\n 1 - ТАК \n 2 - НІ');
    if (operation == 2) {
        break;
    }
}*/

/* Дев’яте */

/*function multiply() {
    for (let i = 2; i <= 9; i++) {
      let val = '';
      for (let j = 1; j <= 10; j++) {
        val += `${i} * ${j} = ${i * j}; `;
      }
      console.log(val);
    }
  }

  window.onload = multiply();*/


/* Десяте */

const secretNumber = Number(prompt('Введіть будь яке загадане вами число від 0 до 100'))


