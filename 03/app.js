//Замыкания
function createCalcFunction(n) {

    return function () {
        console.log(1000 * n)
    }
}

let result = createCalcFunction(4)
result()       //Возвращает результат выполнения функции, возвращаемой из createCalcFunction, согласно тому, какие параматры были переданы на 8 строке

let result2 = createCalcFunction(3)
result2()      //Возвращает результат выполнения функции, возвращаемой из createCalcFunction, согласно тому, какие параматры были переданы на 11 строке

console.log(' ')

result()        //Результаты не изменились
result2()       //Результаты не изменились

console.log(' ')

result = createCalcFunction(16)
result()                        //Результат изменился, теперь возвращает 16000

console.log(' ')



//Еще пример
function createIncrementor(n) {

    return function (num) {
        return n + num
    }
}

let addTen = createIncrementor(10)      //Передавая 10, мы присваиваем значение переменной n. Замкнула в себе 10 для переменной n

console.log(addTen)                     //Возвращает функцию, возвращается из createIncrementor, то есть то, что f(num){return n + num}. Поскольку функция addTen замкнула в себе значение 10, новые аргументы всегда будут прибавляться к 10

console.log(addTen(20))                 //возвращает 30. Теперь мы передали значение num в функцию, которая вернулась на 39 строке, то есть в f(num){return n + num}

console.log(' ')

let addTwo = createIncrementor(2)   //Замкнули внутри addTwo n = 2
console.log(addTwo)                 //Возвращает f(num){return n + num}
console.log(addTwo(12))             //Возвращает 14, то есть n + 12



//Еще пример
function urlGenerator(domain) {
    return function(url){
        return `https://${url}.${domain}/`
    }
}


let comUrl = urlGenerator('com')        //Создаем url для доменного имени .com
console.log(comUrl('google'))           //Создаем url https://google.com/
console.log(comUrl('netflix'))          //Создаем url https://netflix.com/

let ruUrl = urlGenerator('ru')          //Создаем url для доменного имени .com
console.log(comUrl('mail'))             //Создаем url https://mail.com/
console.log(comUrl('yandex'))           //Создаем url https://yandex.com/

console.log(' ')



//Написать свою функцию bind

function logPerson(i, n){
    console.group(this.name)
    console.log(`${this.name} ${i} и совсем не ${n}`)
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    console.groupEnd()
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 24, job: 'SMM'}

function bind(person, func){
    return function(...arg){
        func.apply(person, arg)
    }
}

let mikhail = bind(person1, logPerson)
mikhail('Красавчек', 'толстый')             //Михаил Красавчек и совсем не толстый
                                            //Person: Михаил, 22, Frontend



//Счетчик
function counter(i){
    
    return function(){
        return i += 1
    }
}

let newCounter = counter(2)

console.log(newCounter())
console.log(newCounter())
console.log(newCounter())


let secondCounter = counter(111)
console.log(secondCounter())
console.log(secondCounter())
console.log(secondCounter())




