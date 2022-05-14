//Контекст


//Ключевое слово this - указывает на текущий контекст
function hello(){
    console.log('hello', this)
}

hello()             //this указывает на глобальный объект window

const person = {
    name: 'Andrey',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)

        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)

        console.groupEnd()


        console.log(' ')
    }
} 

const newPerson ={
    name: 'Dmitry',
    age: 23
}

person.sayHello()   //this указывает на объект person

window.hello()      //this указывает на глобальный объект window. this указывает объект, в контексте которого оно было вызвано
console.log(' ')



//МЕТОД bind()
person.sayHelloWindow()     //this указывает на глобальный обхект window, потому что мы выше мы с помощью метода bind передали в функцию hello объект window. Также можно заменить this на любой другой объект
console.log(' ')



//Метод bind возвращает НОВУЮ функцию с переданным контекстом, поэтому её надо вызвать
person.logInfo()

//person.logInfo.bind(newPerson)('worker', '554325423')   //Один из вариантов вызова - вызвать функцию сразу

// let newPersonInfo = person.logInfo.bind(newPerson)     //Второй вариант - положить функцию в новую переменную и далее вызвать её с параметрами
// newPersonInfo('worker', '554325423')

person.logInfo.bind(newPerson,'worker', '554325423')()      //Также можно передать аргументы в функцию сразу после нового контекста



//Метод call и apply. Отличаются только способом передачи параметров в функцию
const thirdPerson = {
    name: 'Lena',
    age: '23'
}

const fourthPerson = {
    name: 'Liya',
    age: '25'
}

person.logInfo.call(thirdPerson, 'Front End', '4686151')    //Метод call сразу же вызывает функцию
person.logInfo.apply(fourthPerson, ['1C', '879784964'])     //Метод apply сразу же вызывает функцию и принимает аргументы только массивом

//Контекст и прототипы
const array = [1,2,3,4,5,]
const array1 = [12,3,567,4]

Array.prototype.multBy = function(n){
    console.log(this.map((el) => el * n))

    /*  

    //Более полный вариант выражения выше со стрелочной функцией
    console.log(this.map(function(el){
        return el * n
    })) 
    
    */   
}

array.multBy(5)
array1.multBy(123)