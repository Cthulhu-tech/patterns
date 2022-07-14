const number = {

    number: 0,

    consoleNumber() {

        console.log(`Я ${this.number}. Меня создал ${this.name}`);

    }

}

const numberCreateOne = Object.create(number, {name: {value: 'Вася'}});
const numberCreateTwo = Object.create(number, {name: {value: 'Ира'}});

numberCreateOne.consoleNumber();
numberCreateTwo.consoleNumber();