// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import { default as users } from "./users.js";
const getUsersWithEyeColor = (users, color) => {
  const blueEyedUsers = [];
  users.forEach((user) => {
    if (user.eyeColor === color) {
      blueEyedUsers.push(user);
    }
  });
  return blueEyedUsers;
};
console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
