class oldClass {

    operation(num1, num2, operation){

        switch(operation){

            case 'add': return num1 + num2;
            case 'sub': return num1 - num2;
            case 'mul': return num1 * num2;
            default: return;

        }

    }

}

class newClass {

    add(num1, num2){
        
        return num1 + num2;

    }

    sub(num1, num2){

        return num1 - num2;

    }

    mul(num1, num2){

        return num1 * num2;

    }

}

class AdapterClass {

    constructor() {

        this.calculator = new oldClass();

    }

    operation(num1, num2, operation){

        switch(operation){

            case 'add': return this.calculator.add(num1, num2);
            case 'sub': return this.calculator.sub(num1, num2);
            case 'mul': return this.calculator.mul(num1, num2);
            default: return;
            
        }

    }

}