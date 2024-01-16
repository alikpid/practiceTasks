// В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// В переменной year лежит какой-то год например 2022.
// Определите високосный это год или нет.

function getRandomMonthNumber(first = 1, last = 12) {
    return Math.floor(Math.random() * (last - first + 1) + first);
}

function getMonthName(monthNumber) {
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    return months[monthNumber - 1];
}

function getRandomYear(first = 1, last = 2040) {
    return Math.floor(Math.random() * (last - first + 1) + first);
}

// я дебил
function getSeason(month) {
    let seasonNames = ['зима', 'весна', 'лето', 'осень'];
    let seasonIndex = Math.floor((month % 12) / 3);

    return seasonNames[seasonIndex];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let monthNumber = getRandomMonthNumber();
let monthName = getMonthName(monthNumber);
let year = getRandomYear();

let season = getSeason(monthNumber);
console.log(`${monthName}, время года - ${season}`);

let leapYearStatus = isLeapYear(year);
console.log(`Год ${year} ${leapYearStatus ? 'високосный' : 'не високосный'}`);