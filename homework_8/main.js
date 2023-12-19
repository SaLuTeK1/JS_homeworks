// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1,'Roman','Babiichuk','kokos@oktnweb',       '+38309433221');
let user2 = new User(2,'Oleh','Kuchemba','persik@oktnweb',        '+38094377421');
let user4 = new User(3,'Vitaliy','Yatsik','pyfik@oktnweb',        '+38094461145');
let user3 = new User(14,'Maria','Lopatska','lopata@oktnweb',       '+38094461991');
let user5 = new User(5,'Olia','Yarmola','kishka@oktnweb',         '+38094461951');
let user6 = new User(6,'Sofia','Kostiv','topgirl@oktnweb',        '+38094461163');
let user7 = new User(4,'Arsen','Filia','killer228@oktnweb',       '+38094461121');
let user8 = new User(8,'Mandarin','Batenchyk','malush@oktnweb',   '+38096437121');
let user9 = new User(9,'Kokos','Fryktovui','kokosik12@oktnweb',   '+38095161144');
let user10= new User(10,'Petrik','Piatochkin','multikpro@oktnweb','+38094616721');

let usersArr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
console.log(usersArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function evenArr(array){
   let newUserEvenId = [];
    for (const arrayElement of array) {
        if (arrayElement.id % 2 === 0)
           newUserEvenId.push(arrayElement)
    }
    return newUserEvenId;
}
console.log(evenArr(usersArr));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortIds = (array) => {
    let sorted = array.sort((user1,user2)=>{
    return user1.id - user2.id
    })
    console.log(sorted);
}
sortIds(usersArr);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client{
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1,'Roman','Babiichuk','kokos@oktnweb', '+38309433221',['chips']);
let client2 = new Client(2,'Oleh','Kuchemba','persik@oktnweb',  '+38094377421',['popcorn','coke','chips','toilet']);
let client4 = new Client(3,'Vitaliy','Yatsik','pyfik@oktnweb',  '+38094461145',['popcorn','chips',]);
let client3 = new Client(14,'Maria','Lopatska','lopata@oktnweb','+38094461991',['coke','chips','pizza','juice','marker']);
let client5 = new Client(5,'Olia','Yarmola','kishka@oktnweb',   '+38094461951',['popcorn','coke','chips']);
let client6 = new Client(6,'Sofia','Kostiv','topgirl@oktnweb',  '+38094461163',['popcorn','coke','chips']);
let client7 = new Client(4,'Arsen','Filia','killer228@oktnweb', '+38094461121',['popcorn','coke','chips']);
let client8 = new Client(8,'Mandarin','Batenchyk','malush@oktnweb','+38096437121',['buble','milk']);
let client9 = new Client(9,'Kokos','Fryktovui','kokosik12@oktnweb','+38095161144',['coke','chips','pizza','juice','marker','buble','milk']);
let client10= new Client(10,'Petrik','Piatochkin','multikpro@oktnweb','+38094616721',['coke','chips','pizza','juice','marker','buble','pizza','juice','marker','milk']);

let clientArray = [client1, client2, client4, client3, client5, client6, client7, client8, client9, client10]
let sortOrders = (array) => {
    let sorted = array.sort((client1,client2)=>{
        return client1.order.length - client2.order.length
    })
    console.log(sorted);
}
sortOrders(clientArray);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineSize) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineSize = engineSize;
    this.driver = 'Відсутній';

    this.drive = () =>{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function() {
        console.log(`Виробник: ${this.manufacturer}`)
        console.log(`Модель: ${this.model}`)
        console.log(`Рік випуску: ${this.year}`)
        console.log(`Максимальна швидкість: ${this.maxSpeed}`)
        console.log(`Об'єм двигуна: ${this.engineSize}`)
        console.log('Водій: ',this.driver)
    }
    this.increaseMaxSpeed = (newSpeed) =>{
        this.maxSpeed += newSpeed;
        return console.log(`Швидкість зросла до ${this.maxSpeed}`)
    }
    this.changeYear = (newValues) =>{
        this.year= newValues;
        return console.log(`Ви змінили рік випуску на ${this.year}`)
    }
    this.addDriver = (driver) =>{
        this.driver = driver;
    };
}
let car1 = new Car('X','Tesla',2023,400,5.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(40);
car1.changeYear(2020);
car1.addDriver({
    name:'Oleg',
    age:'19',
    license : 'BK281120'});
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку