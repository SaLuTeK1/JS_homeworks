// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let newStr1= str1.toUpperCase()
let newStr2= str2.toUpperCase()
let newStr3= str3.toUpperCase()

console.log(newStr1);
console.log(newStr2);
console.log(newStr3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(newStr1.toLowerCase());
console.log(newStr2.toLowerCase());
console.log(newStr3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strV = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
let newStrV = stringToArray(strV);
console.log(newStrV);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr1)
console.log(arr1.map((item) => String(item)));;

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let numsArr = [6,3,4,2,5,1];
let sortNums = (numsArr,direction) =>{
    if(direction === 'ascending'){
        let sort = numsArr.sort((a,b) =>{
            return a - b
        })
        console.log(sort);
    }else if(direction ==='descending'){
        let sort = numsArr.sort((a,b) =>{
            return b - a
        })
        console.log(sort);
    }else{
        console.log('Error');
    }
}
sortNums(numsArr,'ascending');
sortNums(numsArr,'descending');
let shortSort = (nums,direction)=>{
    if (direction !== 'ascending' && direction !== 'descending'){
        console.log('Error');
    }
   let compare = direction === 'ascending' ? (a,b) => a - b : (a,b) => b - a;
    nums.sort(compare);
    return nums
};
console.log(shortSort(numsArr, 'ascending'));
console.log(shortSort(numsArr, 'descending'));
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort1 = coursesAndDurationArray.sort((a,b) =>{
    return b.monthDuration-a.monthDuration
});
console.log(sort1);

let filter = coursesAndDurationArray.filter(function (item){
    return item.monthDuration > 5;
});
console.log(filter);

let map = coursesAndDurationArray.map((item,index) =>{
    item.id = index +1;
    return item;
});
console.log(map);

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше pick
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let allCards = [
    {cardSuit:'spade',value:'6',color:'black'},
    {cardSuit:'spade',value:'7',color:'black'},
    {cardSuit:'spade',value:'8',color:'black'},
    {cardSuit:'spade',value:'9',color:'black'},
    {cardSuit:'spade',value:'10',color:'black'},
    {cardSuit:'spade',value:'jack',color:'black'},
    {cardSuit:'spade',value:'queen',color:'black'},
    {cardSuit:'spade',value:'king',color:'black'},
    {cardSuit:'spade',value:'ace',color:'black'},

    {cardSuit:'clubs',value:'6',color:'black'},
    {cardSuit:'clubs',value:'7',color:'black'},
    {cardSuit:'clubs',value:'8',color:'black'},
    {cardSuit:'clubs',value:'9',color:'black'},
    {cardSuit:'clubs',value:'10',color:'black'},
    {cardSuit:'clubs',value:'jack',color:'black'},
    {cardSuit:'clubs',value:'queen',color:'black'},
    {cardSuit:'clubs',value:'king',color:'black'},
    {cardSuit:'clubs',value:'ace',color:'black'},

    {cardSuit:'diamond',value:'6',color:'red'},
    {cardSuit:'diamond',value:'7',color:'red'},
    {cardSuit:'diamond',value:'8',color:'red'},
    {cardSuit:'diamond',value:'9',color:'red'},
    {cardSuit:'diamond',value:'10',color:'red'},
    {cardSuit:'diamond',value:'jack',color:'red'},
    {cardSuit:'diamond',value:'queen',color:'red'},
    {cardSuit:'diamond',value:'king',color:'red'},
    {cardSuit:'diamond',value:'ace',color:'red'},

    {cardSuit:'heart',value:'6',color:'red'},
    {cardSuit:'heart',value:'7',color:'red'},
    {cardSuit:'heart',value:'8',color:'red'},
    {cardSuit:'heart',value:'9',color:'red'},
    {cardSuit:'heart',value:'10',color:'red'},
    {cardSuit:'heart',value:'jack',color:'red'},
    {cardSuit:'heart',value:'queen',color:'red'},
    {cardSuit:'heart',value:'king',color:'red'},
    {cardSuit:'heart',value:'ace',color:'red'},
];

let findAceDiamond = (array) =>{
    for (const arrayElement of array) {
        if (arrayElement.cardSuit ==='spade' && arrayElement.value === 'ace')
            return arrayElement;
    }
};
console.log(findAceDiamond(allCards));

function findAllSix(array) {
    const six = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].value === '6') {
            six.push(array[i]);
        }
    }
    return six;
}
console.log(findAllSix(allCards));

function findAllRed(array) {
    const red = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].color === 'red') {
            red.push(array[i]);
        }
    }
    return red;
}
console.log(findAllRed(allCards));

let findAllDiamonds = allCards.filter(item => item.cardSuit === 'diamond');
console.log(findAllDiamonds);

function findAllSpade(array) {
    const allSpades = [];
    for (const allSpade of array) {
        if(allSpade.cardSuit === 'spade' && allSpade.value !== '6' && allSpade.value !== '7' && allSpade.value !== '8')
            allSpades.push(allSpade);
    }
    return allSpades;
}
console.log(findAllSpade(allCards));
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceCards = allCards.reduce((acc,card) => {
if(card.cardSuit === 'spade'){
    acc[0].push(card);
    }
if(card.cardSuit === 'diamond') {
    acc[1].push(card);
    }
if(card.cardSuit === 'heart') {
    acc[2].push(card);
    }
if(card.cardSuit === 'clubs') {
    acc[3].push(card);
    }
return acc;
},[[],[],[],[]]);

console.log(reduceCards);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function finderArray(array){
    let lastArray = [];
    for (const arrayElement of array) {
        if (arrayElement.modules.includes('docker'))
            lastArray.push(arrayElement);
    }
    return lastArray;
}
function finderArray2(array){
    let lastArray = [];
    for (const arrayElement of array) {
        if (arrayElement.modules.includes('sass'))
            lastArray.push(arrayElement);
    }
    return lastArray;
}

console.log(finderArray(coursesArray));
console.log(finderArray2(coursesArray));