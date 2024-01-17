// сортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с
// массивом строк ['one', 'two','three']
// решенным заданием будет считаться массив
// [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

const firstArray = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
const secondArray = ['one', 'two', 'three'];
const sortedFirstArray = bubbleSort([...firstArray]);
const mergedArray = sortedFirstArray.concat(secondArray);

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // картинка где чел тащит камень в гору
        }
    }
    return array;
}

console.log(mergedArray.join(', '));