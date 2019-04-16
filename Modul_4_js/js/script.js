'use strict'


// const hotel = {
//   name : 'Resotto',
//   stars : 5,
//   capacitry : 100,
// }

// // for(let key in hotel ){
// //   console.log(hotel[key]);

// // }

// const key = Object.keys(hotel);
// console.log(key);
// const value = Object.values(hotel);
// console.log(value);
// const obj = Object.entries(hotel);
// console.log(obj);



// const motel = {
//   name: 'Restretti',
//   stars: 4,
//   capacity: 54,
// }

// const keys = Object.keys(motel);
// for(const key of keys){
//   console.log('Value:',hotel[key]);

// }

// const mass = Object.entries(motel);
// for(const entry of mass){
//   let key = entry[0];
//   let value = entry[1]

//   console.log(`${key}:${value}`);

// }

// const first = Object.assign(hotel,motel);
// console.log(first);


// const obj = Object.assign({name: 'Saraan'},{adress: 'Resotto'},{capacity: 102})
// console.log(obj);


// const person = {name: "pirson"};
// const clone = Object.assign({},person);
// console.log(clone);


// const defaultSeting = {
//   login:  'admin',
//   pass: 'pass',
//   age: 5,
//   isActive: false,
// }

// const newSeting = {
//   login: 'admin',
//   pass:'pass',
//   age: 8,
//   isActive: true,
// }

// Object.assign(defaultSeting,newSeting)
// console.log(defaultSeting);


// const a = {x:1, y:2};
// const b = {x:2, z:3};
// const c = {...a,...b};
// console.log(c);



/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };





// user.mood = "happy";
// user.hobby = 'javascript';
// user.premium = false;

// const mass = Object.entries(user)
// for(let index of mass){
//   let key = index[0];
//   let value = index[1];

//   console.log(`${key}: ${value}`)

// }


// console.log(user);




/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let user;
// let max = 0;
// for (const num in tasksCompleted) {
  
//   if (tasksCompleted[num] > max) {
//     max = tasksCompleted[num];
// user = num;
//   }
  
// }
// console.log(`${user}: ${max}`);








/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/



// const countProps = function(obj){
// const mass = Object.entries(obj);
// return mass.length;

// }

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3









/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/


// const isObjectEmpty = function(obj)
// {
//   const mass = Object.entries(obj);
//   if(mass.length <= 0){
//     return true;
//   }return false;
// }

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false





/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/



// let max = 0;
// const countTotalSalary = function(salaries){
// // const salarie = {};
// for(let zp in salaries){
// zp = salaries[zp]
// max += zp
// }
// return max;

// }


// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330



/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];


// const getAllPropValues = function(arr,prop){
  
//   const keys = [];
//   for(let i of arr){
    
//     // console.log(i);
    
//     for(let key in i){
//       if(key === prop){
//         // console.log(i[key]);

//         // // console.log(i[key]);
//         // // console.log(keys);
        
//         keys.push(i[key]);
        
        
        
//       }
//     }
//   }
//   return keys;
// }



// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []




// function showName(){
//   console.log('this is show Name:', this);
//   console.log('this name:', this.name);
 
// }

// // showName();


// const user = {
//   name: "Mango",

// }

// user.show = showName;
// user.show();

/*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']





/*  
 * Расставь отсутствующие this в конструкторе Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//    this.getInfo = function() {
//     console.log(`
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'





// const  hotel = {
//   name: 'Restrotto',
//   showThis(){
//     console.log(this);
    
//   }
// };

// const fn = function(collback){

//   collback();
// };

// fn(hotel.showThis);

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

/* 
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
    
    - setCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    
    - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
      🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
         а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
         Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
     
    - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
        * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
        * Если денег было передано достаточно, возвращает разницу денег.
        * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
        
    - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
    
    - reset() - метод, сбрасывает поле customerMoney 0.
*/

function Cashier(name, productDatabase) {
  // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
}

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем setCustomerMoney для запроса денег покупателя
mango.setCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0



























/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends
