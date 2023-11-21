// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
console.log(n3);
let n4 = 123;
console.log(n4);
let n5 = 3.14;
console.log(n5);
let n6 = 2.7;
console.log(n6);
let n7 = 16;
console.log(n7);
let b1 = true;
console.log(b1);
let b1_2 = 5 > 4;
console.log(b1_2);
let b2 = false;
console.log(b2);
let b2_2 = 5 < 4;
console.log(b2_2);

let space = "------";
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

console.log(space);
let firstName = "Roman";
let middleName = 'Romanovuch';
let lastName = 'Babiichuk';
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

console.log(space);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(space);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

let promptFirstName = prompt("Введіть своє ім'я")
let promptLastName = prompt("Введіть своє прізвище")
let promptAge = + prompt("Введіть свій вік")

console.log(promptLastName);
console.log(promptFirstName);
console.log(promptAge);