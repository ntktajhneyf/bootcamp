'use strict'


/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/


  
 


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const censel = 'Отменено пользователем!';
const log = prompt('Login:');

if (log === null) {
  alert(censel);
} else if (log === adminLogin) {
  const pass = prompt('Password');
  if (pass === null) {

    alert(censel);

  } else if (pass === adminPassword) {
    const welcome = alert('Добро пожаловать!');
  } else {
    const alarm = alert('Доступ запрещен, неверный пароль!');
  }
} else {
  const wrong = alert('Доступ запрещен, неверный логин!');
}




// ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
//   Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом. 
  
//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
//       "Ошибка ввода" и больше ничего не делает.
//     - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
//     - В случае верного ввода, последовательно проверить кол-во мест в группах, 
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому, 
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'

const number = prompt('Скільки місць Вам потрібно?');
console.log(number);

const sharm = 15;
const hurgada = 25;
const taba = 6;

if (number == null) {
  alert('Нам очень жаль, приходите еще!')

}

// console.log(Number.isInteger(Number(number)));
else if (Number.isInteger(Number(number)) === true) {

  if (Number(number) <= sharm) {
    const mesto = confirm('Есть место в групе Шарм, согласны Вы быть в этой групе?')
    if (mesto == true) {
      alert(`Приятного путешествия в группе Шарм`)
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (Number(number) <= hurgada) {
    const mesto2 = confirm('Есть место в групе Hurgada, согласны Вы быть в этой групе?')
    if (mesto2 == true) {
      alert(`Приятного путешествия в группе Hurgada`)
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (Number(number) <= taba) {
    const mesto3 = confirm('Есть место в групе Tada, согласны Вы быть в этой групе?')
    if (mesto3 == true) {
      alert(`Приятного путешествия в группе Tada`)
    } else {
      alert('Нам очень жаль, приходите еще!')
    }
  }else if(Number(number)>hurgada){
    alert('Извините, столько мест нет ни в одной группе!')
}else if (Number.isInteger(Number(number)) === false){
  alert('Ошибка ввода')
}
}

  
