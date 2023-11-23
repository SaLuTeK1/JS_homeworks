//Масиви та об'єкти:
// - Створити масив, наповнити його 10
// елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 ;
arr1= ['money',123,321,true,false,'numbers',[123,true],'something',100500,true];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

console.log("--------")
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1;
let book2;
let book3;
book1 = {
    title:'Naruto',
    pageCount:743,
    genre:'Manga'
};
book2 = {
    title:'Harry Potter',
    pageCount:1240,
    genre:'Fantasy'
};
book3 = {
    title:'It',
    pageCount:423,
    genre:'Horror'
};
console.log(book1);
console.log(book2);
console.log(book3);

console.log("--------")
//- Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let uptdBook1;
let uptdBook2;
let uptdBook3;

uptdBook1 = {
    title: 'My Life',
    pageCount: 1437,
    genre: 'Novell',
    authors: [
        {name: 'Jenny', age: 44},
        {name: 'Britany', age: 23}
    ]
};
uptdBook2 = {
    title: 'Ulysses',
    pageCount: 1437,
    genre: 'Politic',
    authors: [
        {name: 'James', age: 62},
        {name: 'George', age: 29}
    ]
};
uptdBook3 = {
    title: 'Kobzar',
    pageCount: 115,
    genre: 'Poems',
    authors: [
        {name: 'Taras', age: 27},
    ]
}
console.log(uptdBook1)
console.log(uptdBook2)
console.log(uptdBook3)

console.log("--------")
//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user;
user = [
    {name:'Roman',username:'SaLuT1K',password:'qwerty123'},
    {name:'Oleg',username:'sa1den',password:'mambalamba'},
    {name:'Rostik',username:'so1dest',password:'queue32'},
    {name:'Vitalik',username:'phantom',password:'doter2'},
    {name:'Orest',username:'orko228',password:'bestkiller2004'},
    {name:'Sergiy',username:'S*',password:'oktenwebtop'},
    {name:'Marianna',username:'Marishka',password:'kwitkam2021'},
    {name:'Vittoria',username:'Vi_Ka',password:'lviv200504'},
    {name:'Olga',username:'Twoja_Mrs',password:'a8as2f3'},
    {name:'Bogdan',username:'NqTepBog',password:'imthebest'}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

console.log("--------")
//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1;
x1 = 1;
if (x1 !== 0){
    console.log("Вірно")
}else {
    console.log("Невірно")
};

let x2;
x2 = 0;
if (x2 !== 0){
    console.log("Вірно")
}else {
    console.log("Невірно")
};

let x3;
x3 = -3;
if (x3 !== 0){
    console.log("Вірно")
}else {
    console.log("Невірно")
};

console.log("--------")
//- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time;

time = +prompt("Яка у вас година?");
if(time <= 15 && time >= 0){
    console.log("Перша частина години")
}else if(time > 15 && time <= 30){
    console.log("Друга частина години")
}else if(time > 30 && time <= 45){
    console.log("Третя частина години")
}else if(time > 45 && time <= 59){
    console.log("Четверта частина години")
}else{
    console.log("Невірно вказана хвилина!!")
};

console.log("--------");
//- У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;

day = +prompt("А який сьогодні день?")
if(day >= 1 && day <=10){
    console.log("Ваш день попадає у першу декаду")
}else if(day > 10 && day <=20){
    console.log("Ваш день попадає у другу декаду")
}else if(day > 20 && day <= 31){
    console.log("Ваш день попадає у третю декаду")
}else{
    console.log("У місяці максимально 31 день!")
};

console.log("--------");

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let schedule;
schedule = +prompt("На який день тижня вас цікавить розклад?");

let smth;
switch (schedule) {
    case 1:
        console.log("Monday");
        smth = {
            subj:['Programming','English']
        };
        console.log(smth.subj);
        break;
    case 2:
        console.log("Tuesday");
        smth ={
            subj:['Math','PE']
        };
        console.log(smth.subj);
        break;
    case 3:
        console.log("Wednesday");
        smth = {
            subj:['Geography','Art']
        };
        console.log(smth.subj);
        break;
    case 4:
        console.log("Thursday");
        smth = {
            subj:['Math','PE','Programming','English']
        };
        console.log(smth.subj);
        break;
    case 5:
        console.log("Friday");
        smth = {
            subj:['Art','Programming','Web']
        };
        console.log(smth.subj);
        break;
    default:
        console.log("Сьогодні вихідний!")
        break;
}

console.log("--------");

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let n1;
let n2;
n1 = +prompt("Введіть 1-е число")
n2 = +prompt("Введіть 2-е число")

if (n1 > n2){
    console.log(n1);
}else if(n2 > n1){
    console.log(n2);
}else if (n1 === n2){

    console.log(`${n1} дорівнює ${n2}`)
}
console.log("--------");

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


//Варіант 1
let allX;
allX = 5 < 3;
if(!allX){
    allX = 'default'
    console.log(allX)
}else{
    console.log(allX)
}
//варіант 2
let x11 ; //тут потрібно вказати якесь значення .
x11 = x11 || 'default';
console.log(x11);

console.log("--------");

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер");
}