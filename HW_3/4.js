"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");

console.log(`${number1} + ${number2} = ${summa(number1, number2)}`);

if (number1 > number2)
    console.log(`${number1} - ${number2} = ${raznost(number1, number2)}`);
else
    console.log(`${number2} - ${number1} = ${raznost(number2, number1)}`);

console.log(`${number1} * ${number2} = ${proizv(number1, number2)}`);

console.log(`${number1} / ${number2} = ${delen(number1, number2)}`);
console.log(`${number2} / ${number1} = ${delen(number2, number1)}`);

function summa(a, b) {
    return a + b;
}

function raznost(a, b) {
    return a - b;
}

function proizv(a, b) {
  return a * b;
}

function delen(a, b) {
    return a / b;
}