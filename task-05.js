// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
import { default as users } from "./users.js";
const getUserWithEmail = (users, email) => {
  let user = users.filter((user) => {
    if (user.email === email) {
      return user.name;
    }
  });
  return user;
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
