"use strict"
// #1 В переменной month лежит какое-то число из интервала от 1 до 12. 
//    Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 8
if (month >= 1 && month <= 2 || month == 12) 
{
    console.log('Зима')
}
else if (month >= 3 && month <= 5) 
{
    console.log('Весна')
}
else if (month >= 6 && month <= 8)
{
    console.log('Лето')
}
else if (month >= 9 && month <= 11)
{
    console.log('Осень')
}
else
{
    console.log('Это не месяц года')
}

// #2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом
//    этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde'
if (str[0] == 'a')
{
    console.log('Да')
}
else
{
    console.log('Нет')
}

// #3 Дано число, например, 12345. Проверьте, что первым символом этого числа является
//    цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 12345
let str_num = String(num)
if (str_num[0] == 1 || str_num[0] == 2 || str_num[0] == 3) {
    console.log('Да')
}
else
{
    console.log('Нет')
}

// #4 Дано трехзначное число. Найдите сумму цифр этого числа.

let num2 = 829
let str_num2 = String(num2)
console.log(Number(str_num2[0]) + Number(str_num2[1]) + Number(str_num2[2]))

// #5 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//    Если это так - выведите 'да', в противном случае выведите 'нет'.

let num3 = 812543
let str_num3 = String(num3)
if ((Number(str_num3[0]) + Number(str_num3[1]) + Number(str_num3[2])) == (Number(str_num3[3]) + Number(str_num3[4]) + Number(str_num3[5]))) {
    console.log('Да')
}
else
{
    console.log('Нет')
}