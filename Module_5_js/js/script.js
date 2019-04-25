'use strict'


// const dirtyDoubleFn = arr => {
//   for(let i = 0, max = arr.length; i<max; i+=1){
//     arr[i]=arr[i]*2;
//   }
// }

// const numbers = [1,2,3];
// dirtyDoubleFn(numbers);
// console.log(numbers);




// const pureDoubleFn = arr => {
//   const newArr = [];

//   for(let i=0, max = arr.length; i<max; i +=1){
//     newArr.push(arr[i]*2)
//   }
//   return newArr;
// };

// const numbers = [1,2,55];
// const doubleNumbers = pureDoubleFn(numbers);

// console.log(numbers);
// console.log(doubleNumbers);



// const numbers = [1,2,3,5,98]

// for(let i =0; i<numbers.length; i+=1){
//   console.log(numbers[i])
// }

// numbers.forEach(num=> console.log(num)
// );


// numbers.forEach((num,index)=>console.log(`index: ${index}, value: ${num}`));


// array.map(callback[currenValue,index,aray]);


// const numbers = [22,33,44];

// const doubleNumbers = numbers.map(num=>num*2);
// console.log(doubleNumbers);

// const users = [
//   {name: "mango", daysInactive: 5, isActive: false },
//   {name: "Tango", daysInactive: 7, isActive: true },
//   {name: "Xander", daysInactive: 10, isActive: true },
//   {name: "Django", daysInactive: 2, isActive: false }
// ];

// const updateUser = users.map(user =>({
//   ...user, isActive: user.daysInactive <7
// }))
// console.log(updateUser);


// array.filter(callback[curentValue,indx,array]);


// const numbers = [1,2,11,22,55,4788,,77,8,99];
// console.log(numbers.filter(num => num>15));

// console.log(numbers.filter(num=>num<15));
// numbers.filter((num,indx) => console.log(num=== 22, indx===num));


// const activeUser = users.filter(user=>user.isActive);
// console.log(activeUser);

// const inActivUser = user=>!user.isActive;
//   console.log(users.filter(inActivUser));
  
//   const userNum = users.filter(user => user.daysInactive>5);
//   console.log(userNum);
  

// // arr.find(callback[crrentValue,index.arr]);

// const numbers = [1,2,4,5,6,8,9,6,4,2,4,];

// console.log(numbers.find(num=>num>5));
// console.log(numbers.find(num=>num<5));
// console.log(numbers.find(num=>num===9));


// function nameObj(obj){
//   return obj.name === "Django"
// }

// console.log(users.find(nameObj));


// const idxNum = num => num === 9;
// console.log(numbers.find(idxNum));


// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false }
// ];


// // const user = users.find((user,idx) =>{
// // if(user.id === "002"){
// //   console.log(idx);
// // }
// // });
// // // console.log(idx.user);


// const user = users.find(user => user.id === "002");
// console.log(user);

// const getUserById = (arr,id) => arr.find(x=> x.id === id);

// console.log(getUserById(users,"003"));




// const isBigEnough = val => val>= 10;

// console.log([15,52,88,66,15].every(isBigEnough));
// console.log([3,5,72,4].some(isBigEnough));


// const numbers = [1,4,8,98,44,21];
// let acc=0;
// let value=0;
// const summ = numbers.reduce((acc,value)=>acc+value
// );

// console.log(summ);



// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // const likes= tweets.reduce((acc,tweet)=>acc+tweet.likes,0);


// // console.log(likes);

// // const summLikes = arr=> arr.reduce((acc,x)=>acc+x.likes,0);

// // console.log(summLikes(tweets));


// const getTags = arr => arr.reduce((acc,x)=> x.tags ? acc.concat(x.tags) : acc,[]);
// console.log(getTags(tweets));

// const tags = getTags(tweets)

// const ownTags = (acc,tag) => {

//   if(!acc.hasOwnProperty(tag)){
//     acc[tag] = 0;
//   }
//   acc[tag]+=1;
//   return acc

// };

// const countTags = arr => arr.reduce(ownTags, {});
// const tagCount = countTags(tags);
// console.log(tagCount);



// const numbers = [1,3,6,5,4,2];
// console.log("Sort:",numbers.sort());

// const clients = ["Frans","Candy","Juli","Andy"]
// console.log("Before sort:", clients);
// console.log("After sort:", clients.sort());

// const users = [
//   { name: "Mango", daysActive: 15 },
//   { name: "Poly", daysActive: 4 },
//   { name: "Ajax", daysActive: 27 },
//   { name: "Chelsey", daysActive: 2 }
// ];

// const sortByActiveDays = (a, b) => b.daysActive - a.daysActive;

// console.log(
//   users.sort(sortByActiveDays)
// );


// const numbers = [1,2,3,4,5,6,7,8,9];

// const even = numbers.filter( x => x % 2 === 0);
// console.log(even);
// const double = even.map(x=>x*2);
// console.log(double);
// const revers = double.reverse();
// console.log(revers);



// const result = numbers
// .filter(x=>x%2===0)
// .map(x=>x*2)
// .reverse()

// console.log(result);





/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//   const result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };




// const findGreaterThan = (num,arr) =>arr.filter(el=> el > num);



// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

// /* 
//   Функция multiplyBy принимает два параметра - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */




// // const multiplyBy = (num, arr) => {
// //   let result = [];

// //   for (let i = 0, max = arr.length; i < max; i += 1) {
// //     result.push(arr[i] * num);
// //   }

// //   return result;
// // };

// const multiplyBy = (num, arr) => arr.map(el => el * num);



// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// // function summAllNumbers(...args) {
// //   let accumulator = 0;

// //   for (let i = 0, max = args.length; i < max; i += 1) {
// //     accumulator += args[i];
// //   }

// //   return accumulator;
// // }

// const summAllNumbers = (...arr)=>arr.reduce((acc,value) => acc + value,0);

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// // const findEvery = (num, arr) => {
// //   for (let i = 0, max = arr.length; i < max; i += 1) {
// //     if (arr[i] < num) {
// //       return false;
// //     }
// //   }

// //   return true;
// // };

// const findEvery = (num, arr) => arr.every(el => el>=num);


// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true














/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];


// const getPropValues = (arr, prop) => arr.map(user=> user[prop])



// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]







/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];


// const setGuestState = (guests, period) => guests.map(user => ({
//   ...user,
//   isActive: user.inactiveDays< period
// }))


// // Вызовы функции для проверки
// console.log(
//   setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true




/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];


// const getActiveGuests = (guests) => guests.filter(guest => guest.isActive === true)


// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax








/*      
  Напиши функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста для сортировки. 
  
  Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];


// const getGuestsOlderThan = (guests, age) => guests.filter(guest => guest.age > age)

// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []







/*
  Напишите функию findGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];


// const getGuestById = (guests, id) => guests.find( guest => guest.id === id)


// // Вызовы функции для проверки
// console.log(
//   getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}

// console.log(
//   getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}

// console.log(
//   getGuestById(guests, 5)
// ); // undefined













/*
* Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
* Функция возвращает число - общую стоимость заказа.
* 
* Используй метод reduce.
*/

// const getTotal = (order) => Object.values(order).reduce((acc,value)=> acc + value, 0)


// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110









/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/




//  const getTotal = (products,order) => {
//    let result = [];
  
// for(let key in order){

//   result.push(products[key]*order[key])
    
// }
// const summ = result.reduce((acc, value) => acc + value, 0);
// return summ;

//    }

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 2,
//   apples: 1
// };

// const orderC = {
//   bread: 2,
//   cheese: 2
// };

// // Вызовы функции для проверки

// console.log(getTotal(products, orderA)); // 140
// console.log(getTotal(products, orderB)); // 120
// console.log(getTotal(products, orderC)); // 80





/*     
* Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
* Функция возвращает true если значение поля active всех объектов true, в противном случае false.
* 
* Используй метод every или some, никаких for!
*/



// const isGuestsActive = (guests)=> guests.every(guest => guest.active === true)


// // Вызовы функции для проверки
// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: false },
//     { name: "Ajax", active: true }
//   ])
// ); // false

// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: true },
//     { name: "Ajax", active: true }
//   ])
// ); // true

// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: true },
//     { name: "Ajax", active: false }
//   ])
// ); // false
