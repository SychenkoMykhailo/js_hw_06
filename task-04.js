// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
import { default as users } from "./users.js";
const getInactiveUsers = (users) => {
  let unactiveUsers = [];
  users.forEach((user) => {
    if (!user.isActive) {
      unactiveUsers.push(user);
    }
  });
  return unactiveUsers;
};
console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
