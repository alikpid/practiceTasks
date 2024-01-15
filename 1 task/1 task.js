// // Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

function getUniqueChars(input) {
    let charArr = input.split('');
    let uniqueChars = [...new Set(charArr)];
    return uniqueChars.join('');
}

let originalLine = 'DDADSADASDAAADS'; // тут по идее должен был input и проверка на ввод но мне лень
console.log(getUniqueChars(originalLine));

