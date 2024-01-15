// Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

function duplicateFirstChar(str) {
    let wordInString = str.split(' ');
    let result = [];

    for (let i = 0; i < wordInString.length; i++) {
        let word = wordInString[i];
        let firstChar = word.charAt(0);

        let duplicatedChars = firstChar.repeat(word.length - 1);
        let duplicatedWord = firstChar + duplicatedChars;

        result.push(duplicatedWord);
    }
    return result.join(' ');
}

let originalLine = 'hello alexandr!';
console.log(duplicateFirstChar(originalLine));