class Animal {
    static typeOfThing = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
    }

    voice() {
        console.log('I am ', this.name)
    }
}



class Cat extends Animal {
    static typeOfAnimal = 'CAT'

    constructor(options) {
        super(options)

        this.lengthOfTail = options.lengthOfTail
    }

    get humanAge() {
        return this.age * 5     //Также можно писать и геттеры/сеттеры, но вне конструктора
    }
}

class Bird extends Animal {
    static typeOfAnimal = 'BIRD'

    constructor(options) {
        super(options)      //Передаёт полученные опции в родительский конструктор

        this.typeOfFood = options.typeOfFood
    }

    voice() {
        super.voice()              //Чтобы вызвать родительский метод
        console.log('chirik!')     //Также можно переписать и методы
    }
}

const marzipanchik = new Cat({
    name: 'marzipanchik',
    age: 5,
    lengthOfTail: '15'
})

console.log(marzipanchik)
console.log(marzipanchik.typeOfAnimal)
console.log(`Like a human, i am ${marzipanchik.humanAge} age`)
marzipanchik.voice()
console.log(' ')

const popug = new Bird({
    name: 'popug',
    age: 5,
    typeOfFood: 'grain'
})

console.log(popug)
console.log(popug.typeOfAnimal)
popug.voice()
console.log(' ')