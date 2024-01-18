// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
// name (имя),
// surname (фамилия),
// rate (ставка за день работы),
// days (количество отработанных дней).
//
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

class Employee {
    constructor(public name: string, public surname: string, public rate: number,public days: number) { }

    getSalary() {
        return this.days * this.rate;
    }

    toStringSalary() {
        return `${this.surname} ${this.name} получил ${this.getSalary()}`;
    }
}

let employee = new Employee("Иван", "Иванов", 1000, 3);
console.log(employee.toStringSalary());