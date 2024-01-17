// вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
// добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсортировать его

const initialArray = [[1, 4, 5], [1, 3, 4], [2, 6]];
const sortedVector = initialArray
    .flat()
    .sort((a, b) => a - b);

console.log(sortedVector.join(', '));