let sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArr(arr) {
    for (let i = 0; i <arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return console.log(arr);
}

reverseArr(sampleArr);