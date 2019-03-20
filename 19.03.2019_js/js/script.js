'use strict'

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/



// const button = document.querySelector('.button');
// const click = () => button.textContent ++;
// button.addEventListener('click', click)


/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// let number = document.querySelector('.expression');
// let button = document.querySelector('button');


// button.addEventListener('click', ()=>number.children[4].textContent = Number(number.children[0].value)+ Number(number.children[2].value))





/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// let btnMin = document.querySelector('button[data-action="sub"]');
// let btnMax = document.querySelector('button[data-action="add"]');

// let result = document.querySelector('.value');

// class Counter {
//   constructor(onChange){
//     this.value = 0;
//     this.onChange = onChange;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);

//   }

//   increment(){
//     this.value += 1;
//     this.onChange(this.value)
//   }

// decrement(){
//   this.value -= 1;
//   this.onChange(this.value)
// }

// }

// function change(value){
//   result.textContent = value;
// }

// const counter = new Counter(change);
// btnMin.addEventListener('click', counter.decrement);
// btnMax.addEventListener('click', counter.increment);





/* Доп 4

  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const form = document.querySelector('.question-form');
// const chkd = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// form.addEventListener('submit', show );

// function show(e) {
//   e.preventDefault();
//   Array.from(chkd).find(i => i.checked === true ? result.innerHTML = ` Result:${i.parentElement.textContent};` : null);
// }


/*
Dop 5
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/




// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> target.nodeName === "IMG"? alert(target.src):null);


/* Dop 6
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list');
// console.log(list);


// list.addEventListener('click', dlt);

// function dlt({target}){
//   target.dataset.action === 'delete'? target.parentElement.remove():null;

//   if(list.children.length === 0){
//     location.reload()
//   }
// }



/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// let dataLength = document.querySelector('.input-list');

// function result({target}){
//   ['valid','invalid'].forEach(i=>target.classList.remove(i));

// if(target.value.length === +target.dataset.length){
//   target.classList.add('valid')
// }else{
// target.classList.add('invalid')
// }

// }

// dataLength.addEventListener('focusout', result);


/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// let message = document.querySelector('.message');
// let input = document.querySelector('input');
// let inputValue = document.querySelector('.input-value');


// input.addEventListener('focusin', result);
// input.addEventListener('input', text)
// function result()
// {
//   message.textContent= 'Input is in focus!'
// }
// function text () {

// inputValue.textContent = `Current input value: ${input.value}`

// }





/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// // let modalHiden = document.querySelector('.modal-hidden');
// let clouse = document.querySelector('[data-action="close-modal"]');

// modal.addEventListener('click',clous);
// openModal.addEventListener('click',open);

// function open (){
//     modal.classList.remove('modal-hidden');
// }

// function clous (event){
//     if(event.target === clouse || event.target === modal){
//         modal.classList.add('modal-hidden')



/* 8 модуль
Домашка Підвищена 

ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
аналогичный заданию выше.

При создании экземпляра конструктор получает:
  - items - список элементов для preview
  - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
  - defaultActiveItem - номер активного элемента preview по умолчанию
  
Тогда создание экземпляра будет выглядеть следующим образом.
*/


const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];



new Gallery({
items: galleryItems,
parentNode: document.querySelector('.image-gallery'),
defaultActiveItem: 1
});

/* Далее плагин работает в автономном режиме */

class Gallery {
  constructor (items,parentNode,defaultActiveItem){
    this.items = items.map(item => item.preview );
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;

  }

  get insertGalery (){
    
  }

}