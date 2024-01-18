// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

class Employee {
    constructor(private _name: string, private _surname: string, private _rate: number, private _days: number) { }

    get name(): string { return this._name; }
    get surname(): string { return this._surname; }
    get rate(): number { return this._rate; }
    get days(): number { return this._days; }

    getSalary() {
        return this.days * this.rate;
    }

    toStringSalary() {
        return `${this.surname} ${this.name} получил ${this.getSalary()}`;
    }
}

let employee = new Employee("Иван", "Иванов", 1000, 3);
console.log(employee.toStringSalary());