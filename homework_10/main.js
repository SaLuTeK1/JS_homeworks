// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let form1 = document.forms['f1'];
let users = [];
let div1 = document.getElementById('users-block');
form1.onsubmit = function (ev){
    ev.preventDefault();
    let username = ev.target.username.value;
    let surname = this.surname.value;
    let age = this.age.value;
    users.push({username,surname,age});
    div1.innerHTML = ''
    for (const user of users) {
        div1.innerHTML = `
        Username - ${user.username},
        Surname - ${user.surname} ,
        Age - ${user.age}`;
    }
    console.log(users);
};
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

let reloadNumber = document.getElementById('number');
let currentNumber = parseInt(reloadNumber.textContent,10);
document.onreadystatechange = function (){
    if(document.readyState === 'complete'){
        if (localStorage.getItem('newNumber') !== null ) {
            currentNumber = parseInt(localStorage.getItem('newNumber'),10);
            currentNumber = currentNumber + 1;
            reloadNumber.textContent = currentNumber;
            localStorage.setItem('newNumber', currentNumber)
        }
        else{
            reloadNumber.textContent = currentNumber;
            localStorage.setItem('newNumber', currentNumber)
        }
    }
};
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveSessionInfo() {
    const currentDate = new Date();
    let timestamp = currentDate.toLocaleString();
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push({ timestamp });
    localStorage.setItem('sessions', JSON.stringify(sessions));
    console.log(sessions);
}
saveSessionInfo();

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
    },
    {
        id: 11,
        name: 'Ромко',
        username: 'Ромко.Stanton',
    },
    {
        id: 12,
        name: 'Олег',
        username: 'Олег.Stanton',
    },
    {
        id: 13,
        name: 'Віталій',
        username: 'Віталій.Stanton',
    },
    {
        id: 14,
        name: 'Юрій',
        username: 'Юрій.Stanton',
    },
    {
        id: 15,
        name: 'Клементина',
        username: 'Клементина.Stanton',
    },
    {
        id: 16,
        name: 'Кокосік',
        username: 'Кокосік.Stanton',
    },
    {
        id: 17,
        name: 'Персик',
        username: 'Персик.Stanton',
    },
    {
        id: 18,
        name: 'Ольга',
        username: 'Ольга.Stanton',
    },
    {
        id: 19,
        name: 'Марія',
        username: 'Марія.Stanton',
    },
    {
        id: 20,
        name: 'Роман',
        username: 'Роман.Stanton',
    },
    {
        id: 21,
        name: 'Алекс',
        username: 'Алекс.Stanton',
    },
    {
        id: 22,
        name: 'Божена',
        username: 'Божена.Stanton',
    },
    {
        id: 23,
        name: 'Богдан',
        username: 'Богдан.Stanton',
    },
    {
        id: 24,
        name: 'Вероніка',
        username: 'Вероніка.Stanton',
    },
    {
        id: 25,
        name: 'Христина',
        username: 'Христина.Stanton',
    },
    {
        id: 26,
        name: 'Андрій',
        username: 'Андрій.Stanton',
    },
    {
        id: 27,
        name: 'Олена',
        username: 'Олена.Stanton',
    },
    {
        id: 28,
        name: 'Максим',
        username: 'Максим.Stanton',
    },
    {
        id: 29,
        name: 'Ірина',
        username: 'Ірина.Stanton',
    },
    {
        id: 30,
        name: 'Владислав',
        username: 'Владислав.Stanton',
    },
    {
        id: 31,
        name: 'Анастасія',
        username: 'Анастасія.Stanton',
    },
    {
        id: 32,
        name: 'Сергій',
        username: 'Сергій.Stanton',
    },
    {
        id: 33,
        name: 'Дарина',
        username: 'Дарина.Stanton',
    },
    {
        id: 34,
        name: 'Юрій',
        username: 'Юрій.Stanton',
    },
    {
        id: 35,
        name: 'Вікторія',
        username: 'Вікторія.Stanton',
    },
    {
        id: 36,
        name: 'Артем',
        username: 'Артем.Stanton',
    },
    {
        id: 37,
        name: 'Наталія',
        username: 'Наталія.Stanton',
    },
    {
        id: 38,
        name: 'Павло',
        username: 'Павло.Stanton',
    },
    {
        id: 39,
        name: 'Ольга',
        username: 'Ольга.Stanton',
    },
    {
        id: 40,
        name: 'Ігор',
        username: 'Ігор.Stanton',
    },
    {
        id: 41,
        name: 'Лілія',
        username: 'Лілія.Stanton',
    },
    {
        id: 42,
        name: 'Анна',
        username: 'Анна.Stanton',
    },
    {
        id: 43,
        name: 'Віталій',
        username: 'Віталій.Stanton',
    },
    {
        id: 44,
        name: 'Тетяна',
        username: 'Тетяна.Stanton',
    },
    {
        id: 45,
        name: 'Євген',
        username: 'Євген.Stanton',
    },
    {
        id: 46,
        name: 'Катерина',
        username: 'Катерина.Stanton',
    },
    {
        id: 47,
        name: 'Роман',
        username: 'Роман.Stanton',
    },
    {
        id: 48,
        name: 'Марія',
        username: 'Марія.Stanton',
    },
    {
        id: 49,
        name: 'Володимир',
        username: 'Володимир.Stanton',
    },
    {
        id: 50,
        name: 'Людмила',
        username: 'Людмила.Stanton',
    },
    {
        id: 51,
        name: 'Олександр',
        username: 'Олександр.Stanton',
    },
    {
        id: 52,
        name: 'Інна',
        username: 'Інна.Stanton',
    },
    {
        id: 53,
        name: 'Денис',
        username: 'Денис.Stanton',
    },
    {
        id: 54,
        name: 'Тетяна',
        username: 'Тетяна.Stanton',
    },
    {
        id: 55,
        name: 'Світлана',
        username: 'Світлана.Stanton',
    },
    {
        id: 56,
        name: 'Георгій',
        username: 'Георгій.Stanton',
    },
    {
        id: 57,
        name: 'Надія',
        username: 'Надія.Stanton',
    },
    {
        id: 58,
        name: 'Віктор',
        username: 'Віктор.Stanton',
    },
    {
        id: 59,
        name: 'Альона',
        username: 'Альона.Stanton',
    },
    {
        id: 60,
        name: 'Ігор',
        username: 'Ігор.Stanton',
    },
    {
        id: 61,
        name: 'Оксана',
        username: 'Оксана.Stanton',
    },
    {
        id: 62,
        name: 'Петро',
        username: 'Петро.Stanton',
    },
    {
        id: 63,
        name: 'Маргарита',
        username: 'Маргарита.Stanton',
    },
    {
        id: 64,
        name: 'Василь',
        username: 'Василь.Stanton',
    },
    {
        id: 65,
        name: 'Анастасія',
        username: 'Анастасія.Stanton',
    },{
        id: 66,
        name: 'Andrew',
        username: 'Andrew.Stanton',
    },
    {
        id: 67,
        name: 'Olivia',
        username: 'Olivia.Stanton',
    },
    {
        id: 68,
        name: 'Max',
        username: 'Max.Stanton',
    },
    {
        id: 69,
        name: 'Irene',
        username: 'Irene.Stanton',
    },
    {
        id: 70,
        name: 'Vladimir',
        username: 'Vladimir.Stanton',
    },
    {
        id: 71,
        name: 'Anastasia',
        username: 'Anastasia.Stanton',
    },
    {
        id: 72,
        name: 'Sergei',
        username: 'Sergei.Stanton',
    },
    {
        id: 73,
        name: 'Daria',
        username: 'Daria.Stanton',
    },
    {
        id: 74,
        name: 'Yuri',
        username: 'Yuri.Stanton',
    },
    {
        id: 75,
        name: 'Victoria',
        username: 'Victoria.Stanton',
    },
    {
        id: 76,
        name: 'Artem',
        username: 'Artem.Stanton',
    },
    {
        id: 77,
        name: 'Natalie',
        username: 'Natalie.Stanton',
    },
    {
        id: 78,
        name: 'Paul',
        username: 'Paul.Stanton',
    },
    {
        id: 79,
        name: 'Olga',
        username: 'Olga.Stanton',
    },
    {
        id: 80,
        name: 'Igor',
        username: 'Igor.Stanton',
    },
    {
        id: 81,
        name: 'Lily',
        username: 'Lily.Stanton',
    },
    {
        id: 82,
        name: 'Anna',
        username: 'Anna.Stanton',
    },
    {
        id: 83,
        name: 'Vitaly',
        username: 'Vitaly.Stanton',
    },
    {
        id: 84,
        name: 'Tatiana',
        username: 'Tatiana.Stanton',
    },
    {
        id: 85,
        name: 'Eugene',
        username: 'Eugene.Stanton',
    },
    {
        id: 86,
        name: 'Mickael',
        username: 'Mickael.Jackson',
    },
    {
        id: 87,
        name: 'Pandora',
        username: 'Pandora.Stanton',
    },
    {
        id: 88,
        name: 'Kokos',
        username: 'Kokos.Kokos',
    },
    {
        id: 89,
        name: 'Matvii',
        username: 'Matvii.Stanton',
    },
    {
        id: 90,
        name: 'Olegys',
        username: 'Olegys.Stanton',
    }
];
let prevButn = document.getElementById('prev-button');
let nextButn = document.getElementById('next-button');
let divArray = document.getElementById('hundred-users');

for (let i = 0;i<10;i++){
    localStorage.setItem('numberOfUser',i+1)
    let div = document.createElement('div');
    div.innerText = usersList[i].name;
    divArray.append(div);
}
nextButn.onclick = function (ev){
    ev.preventDefault();
    let num = parseInt(localStorage.getItem('numberOfUser'));
    divArray.innerText = '';
    for (let i = num;i < num +10;i++){
        if (usersList[i]?.name) {
            localStorage.setItem('numberOfUser', i + 1)
            let div = document.createElement('div');
            div.innerText = usersList[i]?.name;
            divArray.append(div);

        }else{
            divArray.innerText = 'Тут кінець!';
            localStorage.setItem('last',i+10)
            return;
        }
    }
}

prevButn.onclick = function (ev){
    ev.preventDefault();
    let num = parseInt(localStorage.getItem('numberOfUser')); //20
    divArray.innerText = '';
    if (!localStorage.getItem('last')) {
        for (let i = num - 20; i < num - 10; i++) {
            if (i >= 0) {
                localStorage.setItem('numberOfUser', i + 1)
                let div = document.createElement('div');
                div.innerText = usersList[i]?.name;
                divArray.append(div);
            } else {
                divArray.innerText = 'Тут ще нікого немає!';
                i = 0;
                localStorage.setItem('numberOfUser', i)
            }
        }
    }else{
        for (let i = num - 10; i < num; i++) {
            localStorage.setItem('numberOfUser', i + 1)
            let div = document.createElement('div');
            div.innerText = usersList[i]?.name;
            divArray.append(div);
            localStorage.removeItem('last');

        }
    }
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let disButn = document.getElementById('disappear');
let disDiv = document.getElementById('text');
let appButn = document.getElementById('appear');
disButn.onclick = function (ev){
    ev.preventDefault();
    disDiv.classList.add('disappear');
    disButn.classList.add('disappear');
    appButn.classList.add('appear')
}
appButn.onclick = function (ev){
    ev.preventDefault();
    disDiv.classList.remove('disappear');
    disButn.classList.remove('disappear');
    appButn.classList.remove('appear')
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form2 = document.forms['f2'];
let errorDiv = document.getElementById('error18')
form2.onsubmit = function (ev){
    ev.preventDefault();
    let age = this.forAge.value;
    if(age < 18 ){
        errorDiv.innerText = 'Упс,вам немає 18-ти 🔞'
    }else{
        errorDiv.innerText = 'Ласкаво просимо 😉'
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let row = document.getElementById('row');
let col = document.getElementById('column');
let content = document.getElementById('content');
let acceptBtn = document.getElementById('acceptTable');
let divTable = document.getElementById('table-box');
acceptBtn.onclick = function (ev){
    ev.preventDefault();
    let rowCount = row.value;
    divTable.innerText = '';
    let colCount = col.value;
    let contentText = content.value;
    let table = document.createElement('table');
    for (let i = 0;i<rowCount; i++){
        let tr = document.createElement('tr')
        table.append(tr);
        for (let i = 0; i < colCount;i++){
            let td = document.createElement('td');
            td.innerText = contentText;
            tr.append(td);
        }
    }
    divTable.append(table);
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається




let ReloadMoney = () => {
    let dateStorage = localStorage.getItem('Date');
    let currentSum = document.getElementById('money')
    let newSum = parseInt(currentSum.textContent,10);

    if (dateStorage){
        let currentDate = new Date();
        let lastDate = new Date(dateStorage);

        let difference = (currentDate.getTime() - lastDate.getTime() ) / 1000;
        if (difference >=10){

            localStorage.setItem('Date',currentDate);
            if(localStorage.getItem('Money')){
                let getMoney = JSON.parse(localStorage.getItem('Money'),10);
                getMoney = getMoney + 10;
                currentSum.textContent = `${getMoney}`;
                localStorage.setItem('Money',JSON.stringify(getMoney));

            }else{
                localStorage.setItem('Money',JSON.stringify(newSum));
            }
        }else{
            currentSum.innerText = `${parseInt(localStorage.getItem('Money'), 10)}`;
        }
    }else{
        localStorage.setItem('Date', new Date());
    }
}
ReloadMoney();