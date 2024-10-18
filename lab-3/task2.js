
console.log('Task 2')
/**
 * Создайте функцию, которая на вход принимает функцию-колбэк и через
несколько секунд возвращает некоторые данные. Используйте функцию-
колбэк, чтобы вывести эти данные в консоль после завершения асинхронной
операции. Создайте аналогичную функцию с использованием промиса,
обработайте успешное и неуспешное выполнение промиса. Создайте
аналогичную функцию с использованием синтаксиса async/await, обработайте
успешное и неуспешное выполнение функции.
Приведите пример параллельного выполнения нескольких асинхронных
функций.
 */

function getDataWithCallback(callback) {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      console.log('Передаем данные в колбэк')
      callback(null, data);
    }, 2000);
  }

getDataWithCallback((error, data) => {
    if (error) {
        console.error("Ошибка:", error);
    } else {
        console.log("Полученные данные с колбэком:", data);
    }
});
  
function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data = { name: "Jane", age: 25 };
                console.log('Успешное выполнение')
                resolve(data);
            } else {
                reject("Ошибка при получении данных");
            }
        }, 2000);
    });
}

getDataWithPromise()
.then(data => {
    console.log("Полученные данные с промисом:", data);
})
.catch(error => {
    console.error("Ошибка:", error);
});

async function getDataWithAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const success = true;
        if (success) {
            const data = { name: "Alice", age: 28 };
            console.log('Успешное выполнение')
            resolve(data);
        } else {
            reject("Ошибка при получении данных");
        }
        }, 2000);
    });
    }
      
async function fetchData() {
    try {
        const data = await getDataWithAsync();
        console.log("Полученные данные с async/await:", data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

fetchData();

async function getData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные 1");
        }, 2000);
    });
}
      
async function getData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные 2");
        }, 3000);
    });
}
      
async function fetchAllData() {
    try {
        const results = await Promise.all([getData1(), getData2()]);
        console.log("Результаты параллельного выполнения:", results);
    } catch (error) {
        console.error("Ошибка при параллельном выполнении:", error);
    }
}

fetchAllData();
      