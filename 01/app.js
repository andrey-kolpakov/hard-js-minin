/* 

const person = { 
    name: 'Maxim', 
    age: 25,
    greet: function(){
        console.log('Greet')
    },
}

person.sayHello() //выдаст ошибку 

console.log(person.toString()) //вернёт значение, несмотря на то, что у объекта person нет такого метода, однако он есть у его прототипа - родителя этого объекта


*/



//Комментируем предыдущий person и делаем новый через конструктор
const person = new Object({
    name: 'Maxim', 
    age: 25,
    greet: function(){
        console.log('Greet')
    },
})

//Обращение к прототипу класса, от которого создан этот объект (в данном случае класс Object) и задаем ему новую функцию
Object.prototype.sayHello = function(){
    console.log('Hello')
}

person.sayHello()

//с помощью Object.create - создаются новые объекты, в аргументы передаётся прототип для newPerson 
const newPerson = Object.create(person)

console.log(newPerson)  //пустой объект
newPerson.greet()       //но методы объекта-прототипа (person) - работают

console.log(newPerson.name) //вернёт Maxim, найдя его у прототипа объекта newPerson
console.log(' ')

newPerson.name = 'Elena'            
console.log(newPerson.name)         //вернёт Elena
console.log(person.name)            //вернёт Maxim. Также объект person - все ещё имеет своё поле name со своим значением

console.log(newPerson)
console.log(' ')

let string = 'I am string'
console.log(string)
string.sayHello()                   //Поскольку мы добавили прототипу класса Object новый метод sayHello, а все созданные в JS переменные являются объектами, из любой переменной, мы можем вызвать sayHello