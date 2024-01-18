// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// метод ucWords(),
// который принимает строку и делает заглавной первую букву каждого слова этой строке

class MyString {
    // я не знаю что лучше это или цикл (время +- одинаковое)
    // но это мне нравится больше потому что меньше строк
    // а в цикле понятнее что происходит
    reverseLine (line: string) {
        return line.split('').reverse().join('');
    }

    ucFirst (line: string) {
        return line.charAt(0).toUpperCase() + line.slice(1);
    }

    ucWords (line: string) {
        let words = line.split(' ');
        let result = [];
        for (let i = 0; i < words.length; i++) {
            let firstChar = words[i].charAt(0).toUpperCase();
            let otherPart = words[i].slice(1);

            result.push(firstChar + otherPart);
        }
        return result.join(' ');
    }
}
let line = new MyString();
console.log(line.reverseLine('капуста должна дать сок'));
console.log(line.ucFirst('капуста должна дать сок'));
console.log(line.ucWords('капуста должна дать сок'));