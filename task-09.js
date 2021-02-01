// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества
// их друзей (поле friends)
import { default as users } from "./users.js";
const getNamesSortedByFriendsCount = (users) => {
  let arr = users.sort((a, b) => {
    return a.friends.length - b.friends.length;
  });
  return arr;
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
