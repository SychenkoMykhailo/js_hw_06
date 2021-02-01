// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
import { default as users } from "./users.js";
const calculateTotalBalance = (users) => {
  let total = users.reduce((total, user) => {
    total += user.balance;
    return total;
  }, 0);
  return total;
};
console.log(calculateTotalBalance(users)); // 20916
