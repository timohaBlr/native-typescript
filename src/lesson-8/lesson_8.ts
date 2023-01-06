// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((a, b) => a + b)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    let [x, y, z] = [a, b, c].sort((a, b) => a - b)
    if ((x + y) <= z) return '00'
    else if (x === y && y === z) return '10'
    else if (x === y || y === z) return '01'
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return "11"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return String(number).split('')
        .map(m => Number(m))
        .reduce((a, b) => a + b)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let a = arr.reduce((acc, el, index) => acc += (index % 2 ? 0 : el))
    let b = arr.reduce((acc, el, index) => acc + (index % 2 ? el : 0), 0)
    console.log(a, b)
    return a > b
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    /*let arr = [0, 1, 0, -6, 2, 3, -2, 0, -3, -4].reduce(
        (a, c) => {
            if (c < 0) a[0] = a[0] + c;
            if (c > 0) a[1] = a[1] + c;
            return a;
        },
        [0, 0]
    );*/
    console.log([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2].reduce(
        (acc, el) => {
            if (el > 0 && Math.floor(el) === el) acc.push(el ** 2);
            return acc;
        }, [0]).slice(1)) // - ещё одно решение, используя reduce

    return [...array].filter(f => Math.floor(f) === f && f >= 0).map(m => m ** 2)  // my solution
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N === 0) return 0
    if (N === 1) return 1
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return N + sumFirstNumbers(N - 1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []
    for (let i = 0; i < banknotes.length; i++) {
        let banknote = banknotes[i]
        while (amountOfMoney >= banknote) {
            result.push(banknote)
            amountOfMoney -= banknote
        }
    }
    return result
}
      /* for (let i = 0; i < banknotes.length; i++) {
       let banknote = banknotes[i]
        if (amountOfMoney === 0) return [];
        if (amountOfMoney >= banknote) {
            return [banknote].concat(getBanknoteList(amountOfMoney - banknote))
            //return [Math.floor(amountOfMoney / banknote)].concat(getBanknoteList(amountOfMoney% banknote)) // этот
                // способ возвращает массив из количества купюр наибольших необходимых номиналов
        }

      }*/
    // вариант рекурсивного решения






