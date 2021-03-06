//Асинхронность.Что такое Event Loop. JS SetTimeout 0



//Синхронность
console.log('start')
console.log('start 2')
//Операции выполнены синхронно (по порядку в коде)



//Асинхронность
setTimeout(function(){
    console.log('start 4. Logged after 2000ms')
}, 2000)

//Функция выполнится через 2000мс. То есть асинхронно. Код ниже может выполнится раньше неё из-за задержки (асинхронности)
//Поскольку setTimeout - это часть браузерного API, его нет в документации по JS и вызвать его можно из глобального объекта window - window.setTimeout

console.log('start 3')



//Event Loop
//В момент попадания на асинхронную функцию, интерпретатор помещает все инструкции по очереди в Call Stack, когда дело доходит до асинхронных функций (в данном примере для функции setTimeout) закидывают его колбэк (анонимную (может и неанонимную) функцию, переданную в качестве аргумента в setTimeout) в Web API, который начинает отсчет до выполнения колбэка. Пока идёт отсчет, весь остальной по очереди отправляется в Call Stack (Стек вызовов) и выполняется. Как только заканчивается отсчет, колбэк отправляется в очередь колбэков (Callback Queue), которые должны также отправиться в стэк вызовов по окончанию таймера и выполниться

//Если же речь про асинхронные функции типа слушателя, то слушатель добавляется в Web Api и отслеживает клики (или еще что-то, в зависимости от слушателя), далее по клику, колбэк из слушателя отправляется в очередь колбэков, далее в стэк вызовов и выполняется

//Функции не попадают ни в одну из этих частей Event Loop до тех пор, пока не будут вызваны



//Что если поставить setTimeout(function(){console.log('hui'), 0})?
//Сначала выполнится всё остальное, ТОЛЬКО ПОТОМ выполнится Callback Queue. Web Api зафиксирует задержку в 0мс, но интерпретатор всё равно выполнит все синхронные операции перед тем, как запускать очередь из асинхронных callback-ов

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKZnVuY3Rpb24gY2hlY2soKXsKICAgIGNvbnNvbGUubG9nKCdodWknKQp9CgpzZXRUaW1lb3V0KGNoZWNrLCAyMDAwKQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
