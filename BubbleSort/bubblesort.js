let sortArr = [3, 5, 15, 8, 333, 4, 9, 6, 7, 10];

function bubbleSort(arr) {
    
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return console.log(arr);
}

bubbleSort(sortArr);