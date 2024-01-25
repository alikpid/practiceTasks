// str = "hello world";
// let str3 = "";
// let str2 = str.split(' ');
// for (let i = 0; i < str2.length; i++) {
//     // let words = str2[i];
//     let firstChar = str2[i].charAt(0).toUpperCase();
//     let otherPart = str2[i].slice(1);
//     console.log(otherPart)
//     console.log(firstChar)
//     str3 = firstChar + otherPart
// }
// console.log(str3.join(' '));

// result = [6, 5];
// (result.length === 1 || result === 0) ? result = 0 : result = result.slice(0, -1);
// console.log(result);
//
// function huita (line) {
//     line = line.split(' ');
//     let result = [];
//     for (let i = 0; i < line.length; i++) {
//         let firstChar = line[i].charAt(0).toUpperCase();
//         let otherPart = line[i].slice(1);
//
//         result.push(firstChar + otherPart);
//     }
//     return result.join(' ');
// }
//
// console.log(huita("kolchina alina penisovna"))

// function reverseString2(line) {
//     let lline = "";
//     for (let i = line.length - 1; i >= 0; i--) {
//         lline += line[i];
//     }
//     return lline;
// }

var test = "test"
function testVar() {
    console.log(test)
    var test  = "hui"
}

function testLet (){
    console.log(letVar)
    let letVar = 'letVar'
}

testVar();
testLet()
