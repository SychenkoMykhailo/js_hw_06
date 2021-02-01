// Напиши функции которые с помощью перебирающих методов массива
// (никаких for, splice и т. д.) выполняют следующие операции над массивом
// объектов пользователей из файла users.js.
// Задание 1
// Получить массив имен всех пользователей (поле name).
import { default as users } from "./users.js";
const getUserNames = (users) => {
  let names = [];
  users.forEach((element) => {
    names.push(element.name);
  });
  return names;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
