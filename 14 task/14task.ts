// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

class Employee {
    readonly _name: string;
    readonly _surname: string;
    private _rate: number;
    private _days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this._name = name;
        this._surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get name(): string { return this._name; }
    get surname(): string { return this._surname; }
    get rate(): number { return this._rate; }
    get days(): number { return this._days; }

    set days(quantity) {
        if (this.validatePositive(quantity, "Недопустимое кол-во дней"))
            this._days = quantity;
    }
    set rate(sum) {
        if (this.validatePositive(sum, "Недопустимое значение ставки"))
            this._rate = sum;
    }

    private validatePositive(value: number, message: string): boolean {
        if (value <= 0) {
            console.log(message);
            return false;
        }
        return true;
    }

    getSalary() {
        return this.days * this.rate;
    }

    toStringSalary() {
        if (isNaN(this.rate))
            return `${this.surname} ${this.name}. ЗП: Проверьте введенные данные`;
        return `${this.surname} ${this.name}. ЗП: ${this.getSalary()}`;
    }
}

let employee = new Employee("Иван", "Иванов", 1000, 3);
console.log(employee.toStringSalary());