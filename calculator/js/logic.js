import {print} from './utils/print.js'

const operations = {
    'АС': 'AC',
    'С': 'C',
    '=': '=',
    'x': '*',
    '+': '+',
    '-': '-',
    '/': '/',
};

class Calculator {
    calcLine = '';
    result = 0;

    calculate() {
        this.result = eval(this.calcLine);
        this.calcLine = '';
        print(this.result);
    }

    addSymbol(symbol) {
        // использовать рез-т в дальнейших вычислениях
        if (this.calcLine === '' && /[+\-*/]/.test(symbol))
            this.calcLine = this.result;

        // замена операторов
        if (/[+\-*/]/.test(symbol) && /[+\-*/]/.test(this.calcLine.toString().slice(-1)))
            this.calcLine = this.calcLine.slice(0, -1);

        // нельзя добавить точку если перед ней нет цифры
        if (symbol === '.' && !/\d$/.test(this.calcLine)) {
            return;
        }

        this.calcLine += symbol;
        print(this.calcLine || this.result);
    }

    deleteAll() {
        this.calcLine = ''
        this.result = 0
        print(this.calcLine || this.result);
    }

    deleteLastSymbol() {
        this.calcLine = this.calcLine.slice(0, -1);
        print(this.calcLine || this.result);
    }
}

const main = () => {
    const calculator = new Calculator();

    return (operation) => {
        const mappedOperation = operations[operation] || operation;
        switch (mappedOperation) {
            case 'AC':
                calculator.deleteAll();
                break;
            case 'C':
                calculator.deleteLastSymbol();
                break;
            case '=':
                calculator.calculate();
                break;
            default:
                calculator.addSymbol(mappedOperation)
        }
    }
}

export default main