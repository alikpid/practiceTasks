// сделать палиндромы из строк "дим" "манек" "рота"
// чтоб получилось "димид" "манекенам" "ротатор"

function createPalindrome(input) {
    let reversed = input.split('').reverse().join('');
    return input + reversed.slice(1);
}

console.log(createPalindrome('дим'));
console.log(createPalindrome('манек'));
console.log(createPalindrome('рота'));