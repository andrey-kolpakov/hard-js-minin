console.log('Request data...')

/* setTimeout(() => {
    console.log('Preparing data')
    
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
}, 2000) */



//Объект Promise используется для отложенных и асинхронных вычислений.
//Будет выполнен код из колбэка, переданного внутрь конструктора класса Promise
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }

        resolve(backendData)
    }, 1000)
})

//Код будет вызван тогда, когда будут закончены асинхронные операции, тогда, когда будет вызван метод resolve() на 28 строке
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            console.log('Data modified!')

            resolve(data)       //Здесь снова вызывается resolve потому что инструкции выполняются из нового Promise и возвращается именнно он
        }, 1000)
    })
}).then(clientData => {
    console.log('Data received! ', clientData)
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('Looking for a errors in data')
    return data
}).catch(err => {               //Вызывается в случае появления ошибки
    console.log('Error: ', err)
}).finally(() => {              //Вызывается в любом случае по окончанию промиса
    console.log('Finally! ')
})

//Для then можно задать еще один .then, в который перейдёт то, что передано в предыдущий resolve
//Chain - цепь - чейнить - создавать последовательности из .then (и подобные случаи)

const sleep = new Promise(resolve => {
    setTimeout(() => {
        console.log('I slept')
        resolve()
    }, 4000)
}).then(() => {
    console.log('This is the second chain element')
})

sleep.finally(() => {
    console.log('That`s all!')
})

Promise.all([p, sleep]).then(() => {        //Метод all глобального объекта Promise вызывается тогда, когда будут выполнены промисы, переданные ему в качестве аргументов в виде массива
    console.log('All Promises is done')
})

Promise.race([p, sleep]).then(() => {
    console.log('One of the arguments promises is done')    //Отработает тогда, когда один, из переданных в аргументы промисов, отработает
})