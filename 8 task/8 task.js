//  отфильтровать выборкой массив и бинарным поиском найти элемент.
//  массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0

const initialArray = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const sortedArray = selectionSort([...initialArray]);
const requiredNumber = 0;
const indexOfRequiredNumber = binarySearch(sortedArray, requiredNumber);

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) { // array.length - 1 чтобы не заменять ласт эл-т самим собой
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex])
                minIndex = j;
        }
        // условие чтобы не менять то что и так на места
        if (minIndex !== i)
            [array[i], array[minIndex]] = [array[minIndex], array[i]]; // деструктуризации массива - это все для меня чтобы на будущее знать
    }
    return array;
}

function binarySearch(array, number) {
    let firstElement = 0;
    let lastElement = array.length - 1;

    while (firstElement <= lastElement) {
        const middle = Math.floor((firstElement + lastElement) / 2);
        const middleValue = array[middle];

        if (middleValue === number)
            return middle; // по сути та же position просто решила не писать лишнее присвоение
        else if (middleValue < number)
            firstElement = middle + 1;
        else
            lastElement = middle - 1;
    }
    return false;
}

console.log(sortedArray);
console.log("индекс эл-та со значением '0'", indexOfRequiredNumber);