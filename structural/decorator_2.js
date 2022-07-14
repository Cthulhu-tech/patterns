class Car {

    constructor(name, value) {

        this.name = name;
        this.value = value;

    }

    get info() {

        return `name: ${this.name} value: ${this.value}, create: ${this.create}`;

    }

}

function createCarRussian(car) {

    car.create = 'Russia';

    car.carInfo = function() {

        return car.info;

    }

    return car;

}

function createCarGerman(car) {

    car.create = 'German';

    car.carInfo = function() {

        return car.info;

    }

    return car;

}

const carRussian = createCarRussian(new Car("lada", "1.000.000 rub"));

const carGerman = createCarGerman(new Car("bmw", "20.000 euro"));

console.log(carRussian.carInfo());

console.log(carGerman.carInfo());