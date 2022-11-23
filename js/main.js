//! Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ
// let programmer = {
//   name: "Zuhra",
//   lastName: "Mukamedieva",
//   age: 19,
//   language: "JavaScript",
//   salary: 100000,
// };
// for (elem in programmer) {
//   console.log(programmer[elem]);
// }

//! Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
// function summ(num1, num2) {
//   let summa = num1 + num2;
//   if (summa > 10 && summa < 20) {
//     return summa * 5;
//   } else if (summa > 20 && summa < 50) {
//     return summa / 3;
//   } else {
//     return summa + 10;
//   }
// }
// console.log(
//   summ(+prompt("Введите первое число"), +prompt("Введите второе число"))
// );

//! Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// for (let i of aboutUs) {
//   console.log(`${i[0]}:${i[1]}`);
// }

//! Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };
// let users = [
//     { name: "John", age: 28 },
//     { name: "Mark", age: 30 },
//     { name: "David", age: 25 },
//     { name: "Richard", age: 42 },
//   ];

// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42,
// };
// let j = 0;
// for (i in users) {
//   j += users[i];
// }
// console.log(j);

// ПИСАТЬ КОД ЗДЕСЬ

//! Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// ПИСАТЬ КОД ЗДЕСЬ

// function removeElem(arr, element) {
//   for (i in arr) {
//     if (arr[i] === element) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// console.log(removeElem([2, "hello", true, "world", 5, "js"], 5));

//! Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// ПИСАТЬ КОД ЗДЕСЬ

// let str = prompt("Введите значение").toLowerCase();
// function checkTask(word) {
//   let newWord = word.split("").reverse().join("");
//   if (newWord === word.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkTask(str));

//todo Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
function limit(num) {
  while (1000 > num) {
    console.log((num *= 2));
  }
}
limit(50);

//! Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ
// let arr = ["Zuhra", "Akerke", "Kamila", "Tom"];
// let arr1 = arr.filter(elem => {
//   return elem.length > 5;
// });
// console.log(arr1);

//! Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
// let task2 = [10, 25, 25, 15, 5, 10];
// let sum = 0;

// function itog(arr) {
//   arr.forEach(elem => {
//     sum += elem;
//   });
//   console.log(sum);
// }
// itog(task2);

//todo Задание №10
//   Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ

//! Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
// function showArr(arr) {
//   return arr.map(elem => {
//     let j = 0;
//     arr.forEach(elem2 => {
//       elem > elem2 ? j++ : null;
//     });
//     return j;
//   });
// }
// console.log(showArr([8, 1, 2, 2, 3]));

//! Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ
// let a = 0;
// let b = 1;

// [a, b] = [b, a];
// console.log(a, b);

//! Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ
// let obj = {
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// };
// let newObj = ({
//   size: { width, height },
//   items: [cake, donut],
//   extra,
// } = obj);
// console.log(width, height, cake, donut, extra);

//! Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
// let elevator = {
//   current: 1,
//   minFloor: 1,
//   maxFloor: 16,
//   printFloor() {
//     console.log(this.current);
//   },
//   upOneFloor() {
//     if (this.current < this.maxFloor) {
//       this.current++;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   downOneFloor() {
//     if (this.current > this.minFloor) {
//       this.current--;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   toFloor(floor) {
//     if (floor >= this.minFloor && floor <= this.maxFloor) {
//       while (this.current < floor) {
//         this.upOneFloor();
//       }
//       while (this.current > floor) {
//         this.downOneFloor();
//       }
//     } else {
//       console.error("Error!");
//     }
//   },
// };
// elevator.upOneFloor();
// elevator.toFloor(16);
// elevator.downOneFloor();
// elevator.downOneFloor();
// elevator.toFloor(5);
