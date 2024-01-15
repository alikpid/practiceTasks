// вывести из объекта (тут fetch'ем отправить запрос надо) адрес в формате
// 'Город: city2 Улица: street2 Дом: house2'.
// из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'

// тут я попыталась разделить логику

function getAddress(address) {
    return `АДРЕС\nГород: ${address.city}\nУлица: ${address.street}\nДом: ${address.house}`;
}

function getOrderInfo(person, productsOrder) {
    return `${person.lastName} ${person.firstName} купил ${productsOrder.count} штук товаров ${productsOrder.product.name}`;
}

function displayData(str) {
    console.log(str);
}

let requestUrl = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        let address = getAddress(data.address);
        let purchase = getOrderInfo(data.person, data.productsOrder);

        displayData(address);
        displayData(purchase);
    })
    .catch(error => console.error('Что-то пошло не так', error));
