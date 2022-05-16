const person = Object.create(
    {
        calculateAge(){
            return new Date().getFullYear() - this.birthYear
        },
    }, {
        name: {
            value: 'Andrey',
            enumerable: true,       //Если дескриптор enumerable поставить в значение true, поле становится итерируемым. По умолчанию значение - false
            writable: true,         //Если дескриптор writable: true (по умолчанию - false), значение поля можно менять
            configurable: true,     //Если дескриптор configurable: true (по умолчанию - false), поле можно удалить с помощью delete person.name
        },
        birthYear: {
            value: 1996,
        },
        age: {
            get(){
                return new Date().getFullYear() - this.birthYear     //Что происходит при обращении к полю. На 29 строке происходит обращение. Возвращает число 26
            },
            set(value){
                //Описывает инструкции, которые нужно произвести в момент присвоения нового значения этому полю (полю age). Получает значение value при присвоении
            },
            enumerable: true,
        }
    }
)   //Object.create принимает в себя два объекта: первый - это его прототип, второй - это поля нового объекта

console.log(person)         //Ключи подсвечиваются бледным цветом. Это означает, что эти поля присутствуют в объекте, но если мы будем циклом перебирать этот объект, эти поля не будут итерироваться в объекте

for (let key in person) {
    // console.log(key, ' = ', person[key])        //Ничего не происходит, если дескриптор enumerable = false. По умолчанию так и есть.

    if (person.hasOwnProperty(key)){               //Так цикл будет перебирать только поля объекта, иначе бы он перебрал и поля прототипа объекта
        console.log(key, ' = ', person[key])
    }
}                   

console.log(person.age)