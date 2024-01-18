// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const initialObject = { a: 1, b: 2 };
console.log(Object.entries(initialObject));