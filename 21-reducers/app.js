const numbers = [1, 2, 3, 4]

const reducerFn = (accumulator, currentValue) => {
    console.log(`---Iteration---`)
    console.log(`Accumulator: ${accumulator}`)
    console.log(`Current Value: ${currentValue}`)

    const nextAccumulator = accumulator + currentValue;
    console.log(`Next Accumulator: ${nextAccumulator}`)
    return nextAccumulator
}

const reducerStrFn = (accumulator, currentValue) => {
    console.log(`---Iteration---`)
    console.log(`Accumulator: ${accumulator}`)
    console.log(`Current Value: ${currentValue}`)

    const nextAccumulator = accumulator + " " + currentValue;
    console.log(`Next Accumulator: ${nextAccumulator}`)
    return nextAccumulator
}

const initialValue = 0

const sum = numbers.reduce(reducerFn, initialValue)
console.log(`Sum: ${sum}`)