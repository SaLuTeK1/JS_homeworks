// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sqRectangle = (a_side,b_side) => console.log(a_side * b_side);
sqRectangle(2,5);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sqCircle = (radius) => console.log(Math.PI*radius*radius);
sqCircle(3);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sqCilindr = (height,radius) => 2*Math.PI*radius*(height+radius);
console.log(sqCilindr(3,2))

// - створити функцію яка приймає масив та виводить кожен його елемент
let array1 = (array) =>{
    for (let i = 0; i<array.length; i++) {
        console.log(array[i]);
    }
};
array1([1,2,3,4]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textParag = (text) =>{
    document.write(`<p>${text}</p>`);
}
textParag('Idk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl= (text) =>{
    document.write(`<ul>`)
    for (let i = 0; i<3;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createUl('Triple-diple');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl2 = (text,ammounOfLi) =>{
    document.write(`<ul>`)
    for (let i = 0;i < ammounOfLi;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createUl2('Onetext',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayLi = (array) =>{
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
arrayLi([123,'sometexttoo',true,15]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayObj = (array) =>{
    for (const element of array) {
        document.write(`<div>${element.id}</div>`)
        document.write(`<div>${element.name}</div>`)
        document.write(`<div>${element.age}</div>`)
    }
}
arrayObj([
    {id:4,name:'Romko',age:19},
    {id:1,name:'Oleg',age:29}
]);

// - створити функцію яка повертає найменьше число з масиву
let arrayMin = (array) =>{
    let min = array[0];
    for (const arrayElement of array) {
        if (arrayElement<min){
            min = arrayElement;
        }
    }
    return console.log(min);
}
arrayMin([2,3,1,1]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arraySum = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return console.log(sum);
}
arraySum([2,2,1]);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapArray = (array,index1,index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
let arr = [2,3,4,1];
console.log(arr);
swapArray(arr,3,0);
console.log(arr);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchangeFinance = (amount, currency) =>{
    let res;
    let exValues = [{ currency: "USD", value: 40 }, { currency: "EUR", value: 42 },{currency:"PLN",value: 8}];
    for (const exValue of exValues) {
        if (currency === exValue.currency) {
            res = amount / exValue.value;
        }
    }
    if (!res) {
        console.log("Enter valid currency (USD,EUR)");
    } else {
        console.log(res);
    }
}

exchangeFinance(10000, "USD");
exchangeFinance(10000, "EUR");
exchangeFinance(10000, "PLN");

