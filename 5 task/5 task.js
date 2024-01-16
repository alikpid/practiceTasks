// вывести все числа делящиеся только на себя до 100
// это прикол потому что текст по-дебильному написан

function IfSelfDividing(number) {
    return number === 1;
}

for (let i = 1; i <= 100; i++) {
    if (IfSelfDividing(i))
        console.log("Числа, делящиеся только на себя: ", i);
}

// вывести все числа делящиеся только на себя и на единицу до 100

function isPrime(number) {
    if (number < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

console.log("Числа, делящиеся только на себя и на единицу (простые числа):")

for (let i = 1; i <= 100; i++) {
    if (isPrime(i))
        console.log(i);
}

