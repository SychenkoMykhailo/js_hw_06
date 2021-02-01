// Задание 3
// Получить массив имен пользователей по полу (поле gender).
import { default as users } from "./users.js";
const getUsersWithGender = (users, gender) => {
  let muzhiki = [];
  users.forEach((user) => {
    if (user.gender === gender) {
      muzhiki.push(user);
    }
  });
  return muzhiki;
};
console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
