const delay = ms => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, ms)
    })
}

const url = 'https://reqres.in/api/users?page=2'

/* function fetchTodos() {

    return delay(1000)
        .then(() => fetch(url))
        .then(response => response.json())
}

fetchTodos().then(data => {
    console.log(data)
}) */


async function fetchAsyncTodos() {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('finally')
    }
}

fetchAsyncTodos()