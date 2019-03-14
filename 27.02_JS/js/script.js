'use strict'





// // У нас есть семья из трех человек: Игорь, Ира, Коленька. Спросить кто пришел, если кто-то 
// // из семьи, то впускаем и приветствуем. Если кто-то чужой, то спрашиваем, к кому пришел?*
// // Дма в данний момент мама и Коля
// // В ответ нужно ввести "Пришел к Имя"
// // Если прише к отцу - сказать, что "нету дома".
// // Если пришел к маме, сказать "Добро пожаловать, но без сюрпризов"

// const inputName = prompt("Input you name");
// let inputNameLower;

// // const guest = prompt("Who you come?")
// const father = "Igor";
// const mother = "Ira";
// const child = "Nikolay";

// // if(inputName === father || inputName === mother || inputName === child){
// //   alert("Hello");
// // }else{
// //   const guest = prompt("Who you come?")
// //   if(guest.includes(father)){
// //     alert("нету дома");
// //   }else if (guest.includes(mother)){
// //     alert("Добро пожаловать, но без сюрпризов");
// //   }
// //   else{
// //     alert("на все добре")
// //   }
// // }


// inputName ? alert("Hello") : alert("False");


/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = '0' + day + "\\" + month + "\\" + year;

// console.log(date); // 02\10\2017


/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// let guest;
// const name = "Mango";
// guest = name;
// console.log(guest);


/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// const qwert = prompt("Введіть своє імя");
// alert (qwert);




/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.





/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";



// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth);

// console.log(totalWidth); // '125px'




/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/


// const year = prompt("Який зараз рік?");
// if(year == 2018){
//   alert("Все вірно!");
// }else{
//   alert("але ж на дворі 2018");
// }




/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/

// let number = prompt("введіть ціле число?");


// if(number === null){
//   alert("Приходьте ще");
// }
// else if(!Number.isNaN(Number(number))){

//   alert("Thenk you");
// }else{
//   alert("необхідно ввести ціле число");
// }



/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax


/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */
// users.shift();
// // Удалить из начала массива нулевой элемент
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// users.pop();
// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]
// users.unshift("Karina");
// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// users.push("ret0", "dss")
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]



/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt("Napushit shos");
// let arr;




// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr

// arr = string.split(" ");

// console.log(arr);


// console.log(arr.length);

// // Вывести в консоли общую длину массива arr
// // console.log();
// for(let num of arr){
//   let hodor = arr.indexOf(num);

//   console.log(hodor);

// }
// // Используя цикл, вывести в консоль все индексы массива arr




// // Используя цикл, вывести в консоль все элементы массива arr

// for(let i of arr){
//   let el = i;
//   // console.log(el);
// }

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr

// for(let j of arr){
//   let hodor = arr.indexOf(j);
//   console.log(`${hodor}:${j}`);

// }


// let aplle = 5;

// while(aplle >= 2){
//   // console.log(aplle);
//   aplle -=1;
// }
// console.log(aplle);






/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for(let i of numbers){
//   if(num < i)
//   newArray.push(i);
// }
// console.log(newArray);



/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;


// console.log(longestWord); // 'force'

// let newStreeng = string.split(' ');
// longestWord = newStreeng[0];
// for(let items of newStreeng){
//   if(items.length > longestWord.length)
//   longestWord = items;
// }

// console.log(longestWord);


// let counter = 0;

// while(counter < 10){
//   console.log("counter: ", counter);
//   counter +=1;
// }

// let clientCounter = 18;
// let maxClients = 25;
// while(clientCounter < maxClients){
//   console.log(clientCounter);
//   clientCounter+=1;

// }


// const clients = ["Mango", 'alex', 'poly'];
// let i = 0;

// while(i < clients.length){
//   console.log('loggins', clients[i]);
//   i +=1;
// }

// const numbers = [];
// let num = 0;

// while(num <7){
// numbers.push(num);
// num+=1;

// }
// console.log(numbers);


/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/




// function checkNumberType (num){

//   if(num % 2 !== 0){
//     return "Odd";
//   }
//   return "else";

// }
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'




/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/



// function formatString(str) {
//   if (str.length < 40) {
//     return str

//   }

//     return str.slice(0,39) + "..."
// };


// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка



/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str){


// if(str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')){

//   return true;

// }
// return false;
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true






/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/


// function getPx(str){

// if (typeof str === 'string'){
// console.log('is string');
// return parseFloat(str);
// }
// return null;

// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null







/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/


// function findLongestWord(str){


//   let newMass = str.split(' ');

//   let longWord = newMass[0];


//     for(let el of newMass){
// // console.log(el);

// if(el.length > longWord.length){
// longWord = el;
// // console.log('nashe slovo', longWord);

// }


//     }
//     return longWord;
// }

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'







/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// function findLargestNumber(numbers) {

//   let max = 0;

//   for (let num of numbers) {
//     if (num > max) {
//       max = num;
//       // console.log(max);
//     }
//   }
//   return max;

// }

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128







/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(){
//   for(let i of arguments){
//     if(!uniqueNumbers.includes(i)){
//     uniqueNumbers.push(i)    }
//     // console.log(i);
//   }
// }


// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]











/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...args) {

// // console.log(arr);
// // console.log(args);
// let newArr  = arr;


// for (let i of args){



//   if(newArr.includes(i))
//   // console.log(i);
//   newArr.splice(newArr.indexOf(i),1)

// }

// return newArr;
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]










///////        modul 4


/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
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


// user.moof = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// console.log(user);

// for(let item in user){

//   console.log(item, ':', user[item]);

// };


// let arr = Object.keys (user);
// console.log(arr);
// for(let el of arr){
//   console.log(el, ':', user[el]);

// }

// let arr2 = Object.entries(user);
// console.log(arr2);
// for(let el of arr2) {
//   console.log(el[0],':',el[1]);

// }








/*
  Напиште скрипт который определит и выведет в консоль 
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

// let maxNum = 0;
// let winner;


// for (let keys in tasksCompleted) {
//   if (tasksCompleted[keys] > maxNum) {
//     winner = keys;
//     maxNum = tasksCompleted[keys];

//   }
// }
// console.log(winner, maxNum);


/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/


// function countTotalSalary(salaries ){
//   let summ = 0;

//   let array = Object.values(salaries);

//   for(let elem of array){
//     summ += elem;
//   }
//   return summ;
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



/// zadacha 6

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// function getAllPropValues(arr, prop){
//   let arrOfPror = [];
//   for(let object of arr ){


// if(object.hasOwnProperty(prop)){

//   arrOfPror.push(object[prop]);
// }


    
    
//   }
// return arrOfPror;
// }

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];



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






/// zadacha  7


  /*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/


// const User = function(name, isActive, age, friends){

// this.name = name;
// this.isActive = isActive;
// this.age = age;
// this.friends = friends;

// this.getUserInfo = function(){
//   console.log(`user ${name} is ${age} years old and has ${friends} friends`);
   
// }
// }


// let user = new User ('Kate', true, 24, 13);
// let user1 = new User ('Vasia', true, 100, 43);
// console.log(user);
// console.log(user1);
// user.getUserInfo();
// user1.getUserInfo();





// Zadacha 8
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']






//zadacha  9


/*  
  Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login}, 
//       Pass: ${this.password}, 
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
