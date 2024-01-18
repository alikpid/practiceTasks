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

class Calculation {
    private calculationLine: string;

    gettercalCulationLine(): string {
        return this.calculationLine;
    }

    setterCalculationLine(line: string) {
        this.calculationLine = line;
    }
    setLastSymbolCalculationLine(symbol: string) {
        this.calculationLine += symbol;
    }

    lastSymbol() {
        if (this.calculationLine.length === 0)
            return '';
        return this.calculationLine.charAt(this.calculationLine.length - 1);
    }

    deleteLastSymbol() {
        if (this.calculationLine.length > 0)
            this.calculationLine = this.calculationLine.slice(0, -1);
    }
}

let calculatorLine = new Calculation();

calculatorLine.setterCalculationLine('line');
calculatorLine.setLastSymbolCalculationLine('2');
console.log(calculatorLine.lastSymbol());
calculatorLine.deleteLastSymbol();
console.log(calculatorLine.gettercalCulationLine);


