class ConstructorPattern {

    constructor(strOne, strTwo) {

        this.strOne = strOne;
        this.strTwo = strTwo;

    }

    GetFullString() {

        return this.strOne + ' ' + this.strTwo;

    }

}

const getFullName = new ConstructorPattern('name', 'surname');

console.log("getFullName: ", getFullName.GetFullString());

const getHelloWorld = new ConstructorPattern('hello', 'world!');

console.log("getHelloWorld: ", getHelloWorld.GetFullString());