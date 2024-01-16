// вывести числа фибоначчи до 200

function getFibonacciNumbers(length) {
    let fibonacciNumbers = [0, 1];

    while (true) {
        let nextNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];

        if (nextNumber <= length)
            fibonacciNumbers.push(nextNumber);
        else
            break;
    }
    return fibonacciNumbers;
}

let fibonacciNumbers = getFibonacciNumbers(200).join(', ');
console.log(fibonacciNumbers);
