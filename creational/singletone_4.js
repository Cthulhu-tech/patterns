class Singleton {

    constructor(data) {

        if(Singleton.init){

            return Singleton.oldClass;

        }

        Singleton.init = true;
        Singleton.oldClass = this;

    this.data = data;

    }

}

const call_1 = new Singleton('первый вызов');

console.log(call_1.data);

const call_2 = new Singleton('а я не сработал ;(');

console.log(call_2.data);