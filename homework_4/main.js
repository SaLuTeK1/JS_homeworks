// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangleSquare(a_side,b_side){
    let res;
    res = a_side * b_side;
    return res;
}
console.log(triangleSquare(5,4));
console.log("---------");
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(radius){
    let res;
    res= Math.PI * radius * radius;
    res = Math.round(res);
    return res;
}
let circleSq = circleSquare(3);
console.log(circleSq);
console.log("---------");
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(height,radius){
    //2pr(h+R)
    let res;
    res = 2*Math.PI*radius*(height+radius);
    return res;
}
console.log(squareCylinder(4,2));
console.log("---------")
// - створити функцію яка приймає масив та виводить кожен його елемент
function array1(array){
    for (let i = 0; i<array.length; i++) {
        console.log(array[i]);
    }
}
array1([4,5,7,2]);
console.log("---------")
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(){
    console.log(arguments);
}
createParagraph('Some text!');
function createParagraph2(text){
    return  document.write(`<p>${text}</p>`);
}
createParagraph2('Some text!');  //Не знаю чи правильно зрозумів завдання,тому зробив 2 варіанти,
// але перший мені не подобається
console.log("---------")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text){
    document.write(`<ul>`)
    for (let i = 0; i<3;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createUl('Triple-diple');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl2(text,ammounOfLi){
    document.write(`<ul>`)
        for (let i = 0;i < ammounOfLi;i++){
            document.write(`<li>${text}</li>`)
        }
    document.write(`</ul>`)
}
createUl2('Onetext',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayLi(array){
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
arrayLi([123,'sometexttoo',true,15]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function arrayObj(array){
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
function arrayMin(array){
    let min = Infinity;
    for (const arrayElement of array) {
        if (arrayElement<min){
            min = arrayElement;
        }
    }
    return console.log(min);
}
arrayMin([2,3,5,1]);
console.log("---------")
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function arrSum(arrayNumber){
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];
    }
    return console.log(sum);
}
arrSum([2,5,10]);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let arr = [1,2,3,4,5];
console.log(arr);
swap(arr,0,3);
console.log(arr);
console.log("---------")
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchangeFinance(amount, currency) {
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

