class GetNumberOne {

    constructor(name) {

        this.name = name;
        this.number = 1;

    }

    getNumber() {

        return this.number;

    }
    
}

class GetNumberTwo {

    constructor(name) {

        this.name = name;
        this.number = 2;

    }

    getNumber() {

        return this.number;

    }
    
}

class GetNumberThree{

    constructor(name) {

        this.name = name;
        this.number = 3;

    }
    
    getNumber() {

        return this.number;

    }

}

class GetNumber {

    list = {

        'one': GetNumberOne,
        'two': GetNumberTwo,
        'three': GetNumberThree

    }

    createNumber(name = 'one') {

        const Number = this.list[name] || this.list['one'];

        return new Number();

    }

}

const number = new GetNumber();

const allNumbers = [number.createNumber('one'), number.createNumber('two'), number.createNumber('three')];

allNumbers.forEach(obj => console.log(obj.getNumber()));