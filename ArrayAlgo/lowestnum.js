let numArr = [3, 5, 15, 8, 333, 4, 9, 6, 7, 10];

function lowestNum(arr) {
    let lowest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return console.log(lowest);
}

lowestNum(numArr);