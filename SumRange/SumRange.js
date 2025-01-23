function sumRange(min, max) {
    let range = [];

    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    console.log(`The range is ${range}.`);

    let sum = 0;

    for (let i = 0; i < range.length; i++) {
        sum += range[i];
    }

    console.log(`The sum of the range is ${sum}.`);
}

sumRange(1, 10);