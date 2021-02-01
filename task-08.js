// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
import { default as users } from "./users.js";
const getUsersWithFriend = (users, friendName) => {
  let withFriend = [];
  users.forEach((user) => {
    if (user.friends.includes(friendName)) {
      withFriend.push(user);
    }
  });
  return withFriend;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
