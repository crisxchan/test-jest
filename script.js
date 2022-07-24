const capitalize = str => {
    return str.toUpperCase();
}

const reverse = str => {
    return str.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

const analyze = arr => {
    arr = arr.sort();
    let ave = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
    let min = arr[0];
    let max = arr[arr.length-1];
    
    return {
        average : ave,
        min : min,
        max : max,
        length : arr.length
    }
}

export { capitalize, reverse, calculator, analyze };
