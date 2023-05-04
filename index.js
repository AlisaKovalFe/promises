//setInterval
const printNumbers = (from, to) => {

    let number = from

    let timerID = setInterval(() => {
        console.log(number)

        if (number == to) {
            clearInterval(timerID)
        }
        number++
    }, 1000)
}

printNumbers(1, 3)


//рекурсивный setTimeout
const printNumbers2 = (from, to) => {
    let number = from

    let timerID = setTimeout(function print() {
        console.log(number)
        timerID = setTimeout(print, 1000)

        if (number == to) clearTimeout(timerID)
        number++
    })
}

printNumbers2(1, 5)




