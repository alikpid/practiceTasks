// создать класс calculation, в котором будет одна переменная calculationLine.
// методы: setterCalculationLine
// который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine
// который будет в конец строки прибавлять символ,
// gettercalCulationLine
// который будет выводить переменную,
// lastSymbol получение последнего символа,
// deleteLastSymbol
// удаление последнего символа из строки
var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    Calculation.prototype.getterCalculationLine = function () {
        return this.calculationLine;
    };
    Calculation.prototype.setterCalculationLine = function (value) {
        this.calculationLine = value;
    };
    Calculation.prototype.setLastSymbolCalculationLine = function (symbol) {
        this.calculationLine += symbol;
    };
    Calculation.prototype.lastSymbol = function () {
        if (this.calculationLine.length === 0) {
            return "";
        }
        return this.calculationLine.charAt(this.calculationLine.length - 1);
    };
    Calculation.prototype.deleteLastSymbol = function () {
        if (this.calculationLine.length > 0) {
            this.calculationLine = this.calculationLine.slice(0, -1);
        }
    };
    return Calculation;
}());
var calculator = new Calculation();
calculator.setterCalculationLine("");
console.log("\u0441\u0442\u0440\u043E\u043A\u0430".concat(calculator.getterCalculationLine())); // Вывод: 2 + 2
calculator.deleteLastSymbol();
calculator.setLastSymbolCalculationLine("2");
console.log(calculator.getterCalculationLine()); // Вывод: 2 + 2 + 3
console.log(calculator.lastSymbol()); // Вывод: 3
console.log("\u0441\u0442\u0440\u043E\u043A\u0430".concat(calculator.getterCalculationLine()));
// console.log(calculator.getterCalculationLine());
