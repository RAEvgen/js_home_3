// Задача №3 ко вторнику (13.12.2016).
// (на замыкание) 
// Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное 
// число на указанный при карировании шаг. 

// Homework 3.
//задание №1. (дни, день, дней)

function day(number){
    'use strict';
    var c = String(number);
    var arr = c.split('');
        if (arr[arr.length-1] == 1 && arr[arr.length-2] != 1){
            console.log(number + ' день'); 
        }
        else if ((2 <= arr[arr.length-1] && arr[arr.length-1] <= 4) && arr[arr.length-2] != 1){
            console.log(number + ' дня'); 
        }
        else if ((5 <= arr[arr.length-1] && arr[arr.length-1] <= 9) || arr[arr.length-2] == 1) {
            console.log(number + ' дней');
        }
}
day(1217);

//задание №2. Рекурсия (сумма цифр в числе n)

function sum(n){
    'use strict';
    return n > 10 ? n%10 + sum(Math.floor(n/10)) : n;
}
console.log(sum(265));

//задание №3.

// не очень понял суть задания и что должно получиться в рез-те.

